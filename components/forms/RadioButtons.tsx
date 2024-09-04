import type { RadioButtons } from "@/sanity.types";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function RadioButtons({name, fieldOptions, options}: RadioButtons) {
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth = fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;
  const [checked, setChecked] = useState<number | null>(null);
  const { register, formState: {errors} } = useFormContext();
  const error = errors[fieldName!];
  // const { ref } = register(fieldName!, { required });
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
              // onChange={() => setChecked(i)}
              className="radio-button"
              type="radio"
              // checked={checked === i}
              // name={fieldName}
              value={option}
              {...register(fieldName!, { required })}
              id={`${fieldName}-${option}`}
            />
            <label className="radio-button-option-label" htmlFor={`${fieldName}-${option}`}>
              {option}
            </label>
          </span>
        ))}
      </div>
      {error?.type === 'required' && <p className="text-error">{fieldName || 'This field'} is required!</p>}
      {description && <p className="field-description">{description}</p>}
    </div>
  );
}