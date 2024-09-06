import type { TimeField } from "@/sanity.types";
import { useFocusState } from "./formUtils";
import TimePicker from 'react-time-picker';
import { useFormContext } from "./Form";


export default function TimeField({name, fieldOptions}: TimeField) {
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth = fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  
  const fieldName: string = (fieldOptions?.adminLabel ?? name) as string;

  const { focused, handleFocus, handleBlur } = useFocusState();
  
  const { errors } = useFormContext();
  const error = errors ? errors[fieldName] : null;

  return (
    <div>
      <label>
        <span className="label-text">
          {name}
          {required && '*'}
        </span>
        <TimePicker 
         name={fieldName} onFocus={handleFocus} onBlur={handleBlur} required={required} />
      </label>
      {description && <p className="field-description">{description}</p>}
      {error && <p className="text-error">{error}</p>}
    </div>
  );
}