'use server';

import { FormField } from "@/components/forms/types";
import { client, tokenClient } from "@/sanity/lib/client";
import { FORM_QUERY } from "@/sanity/lib/queries";
import { isValidPhoneNumber } from 'libphonenumber-js';

type ErrorItem = {  
  field: string,
  message: string
}

export async function formSubmit(
  prevState: any,
  formData: FormData
) {
  

  const form = await client.fetch(FORM_QUERY, {id: formData.get('form')});

  const fieldErrors = form.fields.map((field: FormField) => {
    const {name, _type, fieldOptions } = field;
    const fieldName = fieldOptions?.adminLabel ? fieldOptions?.adminLabel : name;
    
    if (fieldOptions?.required && !formData.get(fieldName!)) {
      return { field: fieldName, message: `${fieldName} is required!`}
    }

    if (_type === 'phoneField') {
      const value = formData.get(fieldName!);
      if (!value) return;
      console.log('valid phone number: ', isValidPhoneNumber(value as string, 'US'));
      if (isValidPhoneNumber(value as string, 'US')) return;
      return {field: fieldName, message: `Please enter a valid phone number`};
    }

    if (_type === 'emailField') {
      const value = formData.get(fieldName!);
      if (!value) return;
      if (validateEmail(value as string)) return;
      return {field: fieldName, message: 'Please enter a valid email address'};
    }
    return;
  }).filter((e: any) => e)

  if (fieldErrors.length) {
    return {
      message: 'Please check the fields above.',
      errors: fieldErrors.reduce((a: [ErrorItem], v: ErrorItem) => ({ ...a, [v.field]: v.message }), {}),
    };
  }

  const fileFields = Array.from(formData.entries()).filter(([key, value]) => typeof value === 'object');
  const otherFields = Array.from(formData.entries()).filter(([key, value]) => typeof value !== 'object' && key !== 'form');
  
  const files = await Promise.all(
    fileFields.map(async ([key]) => {
      const file: File | null = formData.get(key) as unknown as File;
      if (file) {
        try {
          const uploadRes = await tokenClient.assets.upload('file', file, {filename: file.name});
          return {
            _type: 'field',
            name: key,
            value: file.name,
            file: {
              _type: 'file',
              asset: {
                _type: 'reference',
                _ref: uploadRes._id,
              },
            },
          };
        } catch(err) {
          console.error('upload failed: ', err);
          return null;
        }
      }
      return null;
    })
  );


  const entry = {
    _type: 'entry',
    form: {
      _type: 'reference',
      _ref: formData.get('form'),
    },
    fields: [
      ...otherFields.map(([name, value]) => ({
        name,
        value,
      })),
      ...files,
    ],
  };

  try {
    const res = await tokenClient.create(entry, { autoGenerateArrayKeys: true });
    console.log('success');
    return {message: form.successMessage, errors: null};
    
  } catch(err: any) {
    console.log('submit error: ', err);
    return { message: 'Somthing went wrong. Try again later!', error: err.details}
  }

}

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};