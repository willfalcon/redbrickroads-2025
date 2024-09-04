import type { PhoneField } from "@/sanity.types";
import { FieldWrapper, Label, useFocusState } from "./formUtils";
import { useFormContext } from "react-hook-form";

export default function PhoneField({name, fieldOptions}: PhoneField) {
  const required =
    fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth =
    fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  const description =
    fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel =
    fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;
  const { focused, handleFocus, handleBlur } = useFocusState();
  const { register, formState: {errors} } = useFormContext();
  const { ref, onChange } = register(fieldName!, { required });
  const error = errors[fieldName!];
  return (
    <FieldWrapper options={fieldOptions}>
      <Label options={fieldOptions} name={name!} focused={focused}>
        <input
          className="text-input bg-transparent border-0 w-full p-4 mb-0 mt-4 text-black focus:outline-0"
          type="tel"
          name={fieldName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          onChange={onChange}
        />
      </Label>
      {error?.type === 'required' && <p className="text-error">{fieldName || 'This field'} is required!</p>}
      {description && <p className="field-description">{description}</p>}
    </FieldWrapper>
  );
}