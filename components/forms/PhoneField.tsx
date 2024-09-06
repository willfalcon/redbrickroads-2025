import type { PhoneField } from "@/sanity.types";
import { FieldWrapper, Label, useFocusState } from "./formUtils";
import { useFormContext } from "./Form";

export default function PhoneField({name, fieldOptions}: PhoneField) {
  const required =
    fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth =
    fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  const description =
    fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  
    const fieldName: string = (fieldOptions?.adminLabel ?? name) as string;
    
  const { focused, handleFocus, handleBlur } = useFocusState();
  const { errors } = useFormContext();
  const error = errors ? errors[fieldName] : null;
  return (
    <FieldWrapper options={fieldOptions}>
      <Label options={fieldOptions} name={name!} focused={focused}>
        <input
          className="text-input bg-transparent border-0 w-full p-4 mb-0 mt-4 text-black focus:outline-0"
          type="tel"
          name={fieldName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          // ref={ref}
          // onChange={onChange}
        />
      </Label>
      {description && <p className="field-description">{description}</p>}
      {error && <p className="text-error">{error}</p>}
    </FieldWrapper>
  );
}