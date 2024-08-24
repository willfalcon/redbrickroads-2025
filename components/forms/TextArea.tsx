import type { TextArea } from "@/sanity.types";
import { FieldWrapper, Label, useFocusState } from "./formUtils";

export default function TextArea({name, fieldOptions}: TextArea) {
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
  return (
    <FieldWrapper options={fieldOptions}>
      <Label className="*:top-0 *:translate-y-0" name={name!} options={fieldOptions} focused={focused} htmlFor={fieldName}>
        <textarea
          className="text-input bg-transparent border-0 w-full p-4 mb-0 mt-4 text-black focus:outline-0"
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