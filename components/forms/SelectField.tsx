import type { SelectField } from "@/sanity.types";
import { useState } from "react";
import { useFocusState } from "./formUtils";

export default function SelectField({name, fieldOptions, options}: SelectField) {
  console.log(options)
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth = fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;

  const [selected, setSelected] = useState<string>('');
  const { focused, handleFocus, handleBlur } = useFocusState();

  return (
    <div>
      <label>
        <span className="label-text">
          {name}
          {required && '*'}
        </span>
        <select
          className="select-field"
          name={fieldName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={e => setSelected(e.target.value)}
          value={selected}
        >
          <option value={''}></option>
          {options?.map((option, i) => {
            
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
      </label>
      {description && <p className="field-description">{description}</p>}
    </div>
  );
}