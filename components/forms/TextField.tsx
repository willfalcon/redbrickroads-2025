import type { EmailField, TextField } from "@/sanity.types";
import { FieldWrapper, useFocusState } from "./formUtils";
import classNames from "classnames";

export default function TextField({ name, fieldOptions, _type }: TextField | EmailField) {
  
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;

  const { focused, handleFocus, handleBlur } = useFocusState();

  return (
    <FieldWrapper name={name!} options={fieldOptions}>
      <input 
        className="text-input bg-transparent border-0 w-full p-4 mb-0 mt-4 text-black"
        type={_type === 'emailField' ? 'email' : 'text'}
        name={fieldName}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </FieldWrapper>
  );
}