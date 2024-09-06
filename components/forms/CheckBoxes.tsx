import type { CheckBoxes } from "@/sanity.types";

import { FieldWrapper, Label } from "./formUtils";
import classNames from "classnames";
import { useFormContext } from "./Form";


export default function CheckBoxes({name, fieldOptions, options}: CheckBoxes) {
  const required =
    fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth =
    fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;

  const description =
    fieldOptions && fieldOptions.description ? fieldOptions.description : false;

  
  const fieldName: string = (fieldOptions?.adminLabel ?? name) as string;
  
  const {errors} = useFormContext();
  const error = errors ? errors[fieldName] : null;
  
  
  return (
    <FieldWrapper options={fieldOptions}>
      <div
        className={classNames('w-full relative transition-all block border-2 border-orange p-4 *:static', {
          'col-span-1': halfWidth,
          'col-span-2': !halfWidth,
        })}
      >
        <span
          className={classNames('label-text absolute top-1/2 left-4 transition-all pointer-events-none')}
        >
          {name} 
          {required && '*'}
        </span>
      <div>
        {options?.map((option, i) => {
          if (!fieldName || !option) return;
          return (
            <span className="cursor-pointer relative flex items-start rounded has-[:focus]:ring-1 ring-orange" key={option}>
              <input
                className="peer absolute top-auto overflow-hidden w-[1px] h-[1px] whitespace-nowrap decoration-orange "
                style={{ clip: 'rect(1px, 1px, 1px, 1px)' }}
                type="checkbox"
                value={option}
                id={`${fieldName}-${option}`}
              />
              <span className="bg-transparent border border-orange block w-[1.2rem] h-[1.2rem] rounded absolute left-1 top-3 peer-checked:bg-orange" />
              <label htmlFor={`${fieldName}-${option}`} className="text-[1.4rem] p-2 pl-8 relative cursor-pointer">
                {option}
              </label>
            </span>
          );
        })}
      </div>
      </div>
      {description && <p className="field-description">{description}</p>}
      {error && <p className="text-error">{error}</p>}
    </FieldWrapper>
  );
}