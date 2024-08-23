import type { RadioButtons } from "@/sanity.types";
import { useState } from "react";

export default function RadioButtons({name, fieldOptions, options}: RadioButtons) {
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth = fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;
  const [checked, setChecked] = useState<number | null>(null);

  return (
    <div>
      <label>
        <span className="label-text">
          {name}
          {required && '*'}
        </span>
        <div>
          {options?.map((option, i) => (
            <span className="radio-button-wrapper" key={option} onClick={() => setChecked(i)}>
              <input
                onChange={() => setChecked(i)}
                className="radio-button"
                type="radio"
                checked={checked === i}
                name={fieldName}
                value={option}
              />
              <span className="radio-button-option-label">{option}</span>
            </span>
          ))}
        </div>
      </label>
    </div>
  );
}