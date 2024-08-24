import type { CheckBoxes } from "@/sanity.types";
import { useState } from "react";
import { FieldWrapper, Label } from "./formUtils";


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
    <FieldWrapper options={fieldOptions}>
      <Label className="p-4 *:static" name={name!} options={fieldOptions} focused={false}>
        <div>
          {options?.map((option, i) => (
            <span className="block cursor-pointer relative" key={option} onClick={() => toggleChecked(i)}>
              <input
                onChange={() => toggleChecked(i)}
                className="peer absolute top-auto overflow-hidden w-[1px] h-[1px] whitespace-nowrap focus:underline decoration-orange"
                style={{ clip: 'rect(1px, 1px, 1px, 1px)' }}
                type="checkbox"
                checked={checked.includes(i)}
                name={fieldName}
                value={option}
              />
              <span className="bg-transparent border border-orange block w-[1.2rem] h-[1.2rem] rounded absolute left-0 top-1/2 -translate-y-1/2 peer-checked:bg-orange" />
              <span className="block text-[1.4rem] p-2 pl-8 relative">{option}</span>
            </span>
          ))}
        </div>
        {description && <p className="field-description">{description}</p>}
      </Label>
    </FieldWrapper>
  );
}