import type { EmailField, TextField } from "@/sanity.types";
import { FieldWrapper, Label, useFocusState } from "./formUtils";
import { useFormContext } from "./Form";



export default function TextField({ name, fieldOptions, _type }: TextField | EmailField) {

  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  
  const fieldName: string = (fieldOptions?.adminLabel ?? name) as string;

  const { focused, handleFocus, handleBlur } = useFocusState();
  const { errors } = useFormContext();
  const error = errors ? errors[fieldName] : null;

  function getType(type: string) {
    switch(type) {
      case 'emailField':
        return 'email';
      case 'urlField':
        return 'url';
      case 'passwordField':
        return 'password';
      default:
        return 'text';
    }
  }
  
  return (
    <FieldWrapper options={fieldOptions}>
      <Label name={name!} options={fieldOptions} focused={focused} htmlFor={fieldName}>
        <input
          className="text-input bg-transparent border-0 w-full p-4 mb-0 mt-4 text-black focus:outline-0"
          type={getType(_type)}
          name={fieldName}
          id={fieldName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
        />
      </Label>
      {description && <p className="field-description">{description}</p>}
      {error && <p className="text-error">{error}</p>}
    </FieldWrapper>
  );
}