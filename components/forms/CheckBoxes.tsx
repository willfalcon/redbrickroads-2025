import type { CheckBoxes } from "@/sanity.types";
import { useState } from "react";


export default function CheckBoxes({name, fieldOptions, options}: CheckBoxes) {
  const required =
    fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth =
    fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;

  const description =
    fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel =
    fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;
  const [checked, setChecked] = useState<Array<number>>([]);
  
  function toggleChecked(i: number) {
    if (!checked.includes(i)) {
      setChecked([...checked, i]);
    } else {
      setChecked(checked.filter(x => x !== i));
    }
  };

  return (
    <div>
      <label>
        <span className="label-text">
          {name}
          {required && '*'}
        </span>
        <div>
          {options?.map((option, i) => (
            <span className="checkbox-wrapper" key={option} onClick={() => toggleChecked(i)}>
              <input
                onChange={() => toggleChecked(i)}
                className="checkbox"
                type="checkbox"
                checked={checked.includes(i)}
                name={fieldName}
                value={option}
              />
              <span className="checkbox-option-label">{option}</span>
            </span>
          ))}
        </div>
      </label>
    </div>
  );
}