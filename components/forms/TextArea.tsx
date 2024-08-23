import type { TextArea } from "@/sanity.types";
import { useFocusState } from "./formUtils";

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
    <div>
      <label>
        <span className="label-text">
          {name}
          {required && '*'}
        </span>
        <textarea className="text-area" name={fieldName} onFocus={handleFocus} onBlur={handleBlur} />
      </label>
    </div>
  );
}