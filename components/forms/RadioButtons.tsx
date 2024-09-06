import type { RadioButtons } from "@/sanity.types";
import { useState } from "react";
import { useFormContext } from "./Form";


export default function RadioButtons({name, fieldOptions, options}: RadioButtons) {
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth = fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;
  const [checked, setChecked] = useState<number | null>(null);
  const { errors } = useFormContext();
  const error = errors ? errors[fieldName] : null;
  return (
    <div>
      <span className="label-text">
        {name}
        {required && '*'}
      </span>
      <div>
        {options?.map((option, i) => (
          <span className="radio-button-wrapper" key={option}>
            <input
              className="radio-button"
              type="radio"
              name={fieldName}
              value={option}
              required={required}
              id={`${fieldName}-${option}`}
            />
            <label className="radio-button-option-label" htmlFor={`${fieldName}-${option}`}>
              {option}
            </label>
          </span>
        ))}
      </div>
      {description && <p className="field-description">{description}</p>}
      {error && <p className="text-error">{error}</p>}
    </div>
  );
}