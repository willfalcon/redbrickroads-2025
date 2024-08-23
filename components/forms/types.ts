import { AddressField, CheckBoxes, DateField, DateTimeField, EmailField, FileUpload, PhoneField, RadioButtons, SelectField, TextArea, TextField, TimeField } from "@/sanity.types";

export type FormField = ({
    _key: string;
  } & TextField) | ({
    _key: string;
  } & TextArea) | ({
    _key: string;
  } & EmailField) | ({
    _key: string;
  } & PhoneField) | ({
    _key: string;
  } & AddressField) | ({
    _key: string;
  } & CheckBoxes) | ({
    _key: string;
  } & RadioButtons) | ({
    _key: string;
  } & SelectField) | ({
    _key: string;
  } & FileUpload) | ({
    _key: string;
  } & TimeField) | ({
    _key: string;
  } & DateField) | ({
    _key: string;
  } & DateTimeField)
