'use client';

import type { Form } from "@/sanity.types";
import { FormEvent, FormEventHandler, useState, useTransition } from "react";
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import FieldSwitcher from "./FieldSwitcher";
import SimpleContent from "../SimpleContent";

type Props = Form & {
  className: string;
  additionalSubmitHandler?: () => void;
}; 
export default function Form(props: Props) {
  const {title, description, fields, submitText, successMessage, _id, className, additionalSubmitHandler} = props;
  

  const methods = useForm();
  const { handleSubmit, getValues, reset } = methods;
  
  // console.log(getValues())

  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  // console.log(props)
  
  const hasUploads = fields?.some(field => field._type === 'fileUpload');

  const [isPending, startTransition] = useTransition();
  // async function onSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
  async function onSubmit(data: any) {
    console.log('submitted');
    

    setPending(true);
    const formData = new FormData();

     Object.keys(data).forEach(key => {
       if (data[key] instanceof FileList) {
         // If the field is a FileList, append each file
         Array.from(data[key]).forEach(file => {
           formData.append(`[file] ${key}`, file);
         });
       } else {
         formData.append(key, data[key]);
       }
     });

     formData.append('form', _id);

    try {
      const response = await fetch('/api/form-submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setPending(false);
        if (additionalSubmitHandler) {
          additionalSubmitHandler();
        }
      } else {
        console.error('Form submission failed.');
        setPending(false);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setPending(false);
    }

    setPending(false);
  }

  function onErrors(errors: any) {
    console.log(errors);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onErrors)} className={className}>
        {/* <form action={handleSubmit}> */}
        <h2 className="text-[3rem] md:text-[6rem] uppercase text-orange my-20">{title}</h2>
        {description && <SimpleContent className="form__description">{description}</SimpleContent>}
        <fieldset className="form__fields grid grid-cols-2 gap-4" disabled={pending}>
          {fields?.map(field => <FieldSwitcher key={field._key} {...field} />)}
          <input type="hidden" name="_subject" value={`RBR Form Submission - ${title}`} />
          <input
            className="bg-orange text-white py-4 px-12 uppercase font-bold mt-8 block w-max"
            type="submit"
            disabled={pending}
            value={submitText || 'Submit'}
          />
        </fieldset>

        {message && (
          <div className="bg-success p-4 mt-4">
            <p className="text-white">{message}</p>
          </div>
        )}
        {error && (
          <div className="bg-error p-4 mt-4">
            <p className="text-white">{error}</p>
          </div>
        )}
      </form>
    </FormProvider>
  );
}

