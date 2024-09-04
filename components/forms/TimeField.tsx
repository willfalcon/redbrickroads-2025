import type { TimeField } from "@/sanity.types";
import { useFocusState } from "./formUtils";
import TimePicker from 'react-time-picker';
import { useFormContext } from "react-hook-form";

export default function TimeField({name, fieldOptions}: TimeField) {
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth = fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;

  const { focused, handleFocus, handleBlur } = useFocusState();
  const { control, formState: {errors} } = useFormContext();
  const error = errors[fieldName!];
  // const { ref } = register(fieldName!);

  return (
    <div>
      <label>
        <span className="label-text">
          {name}
          {required && '*'}
        </span>
        <TimePicker {...control} name={fieldName} onFocus={handleFocus} onBlur={handleBlur} />
      </label>
      {error?.type === 'required' && <p className="text-error">{fieldName || 'This field'} is required!</p>}
      {description && <p className="field-description">{description}</p>}
    </div>
  );
}