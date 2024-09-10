'use client';

import React from 'react';

import TextField from './TextField';
import PhoneField from './PhoneField';
import TextArea from './TextArea';
import AddressField from './AddressField';
import CheckBoxes from './CheckBoxes';
import RadioButtons from './RadioButtons';
import SelectField from './SelectField'
import FileUpload from './FileUpload';
import { FormField } from './types';
import DateTimeField from './DateTimeField';

export default function FieldSwitcher(field: FormField) {
  switch (field._type) {
    case 'textField':
    case 'emailField':
      return <TextField {...field} />;
    case 'phoneField':
      return <PhoneField {...field} />;
    case 'addressField':
      return <AddressField {...field} />;
    case 'textArea':
      return <TextArea {...field} />;
    case 'checkBoxes':
      return <CheckBoxes {...field} />;
    case 'radioButtons':
      return <RadioButtons {...field} />;
    case 'selectField':
      return <SelectField {...field} />;
    case 'fileUpload':
      return <FileUpload {...field} />;
    case 'timeField':
    case 'dateField':
    case 'dateTimeField':
      return <DateTimeField {...field} />;
    default:
      return null;
  }
};

