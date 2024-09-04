import type { EmailField, TextField } from "@/sanity.types";
import { FieldWrapper, Label, useFocusState } from "./formUtils";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";


export default function TextField({ name, fieldOptions, _type }: TextField | EmailField) {

  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;

  const { focused, handleFocus, handleBlur } = useFocusState();
  
  const { register, formState: {errors} } = useFormContext();
  const error = errors[fieldName!];

  const { ref, onChange } = register(fieldName!, { required });

  
  return (
    <FieldWrapper options={fieldOptions}>
      <Label name={name!} options={fieldOptions} focused={focused} htmlFor={fieldName}>
        <input
          className="text-input bg-transparent border-0 w-full p-4 mb-0 mt-4 text-black focus:outline-0"
          type={_type === 'emailField' ? 'email' : 'text'}
          name={fieldName}
          id={fieldName}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
        />
      </Label>
      {error?.type === 'required' && (
        <p className="text-error">{fieldName || 'This field'} is required!</p>
      )}
      {description && <p className="field-description">{description}</p>}
    </FieldWrapper>
  );
}