import type { EmailField, TextField } from "@/sanity.types";
import { FieldWrapper, Label, useFocusState } from "./formUtils";
import classNames from "classnames";

export default function TextField({ name, fieldOptions, _type }: TextField | EmailField) {

  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;

  const { focused, handleFocus, handleBlur } = useFocusState();

  return (
    <FieldWrapper options={fieldOptions}>
      <Label name={name!} options={fieldOptions} focused={focused} htmlFor={fieldName}>
        <input
          className="text-input bg-transparent border-0 w-full p-4 mb-0 mt-4 text-black focus:outline-0"
          type={_type === 'emailField' ? 'email' : 'text'}
          name={fieldName}
          id={fieldName}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Label>
      {description && <p className="field-description">{description}</p>}
    </FieldWrapper>
  );
}