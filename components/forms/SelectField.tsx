import type { SelectField } from "@/sanity.types";
import { useState } from "react";
import { FieldWrapper, Label, useFocusState } from "./formUtils";
import { useFormContext } from "react-hook-form";

type StateOption = {
  value: string;
  label: string;
};


type SelectFieldType = Omit<SelectField, 'options'> & { options?: Array<StateOption | string>}

export default function SelectField({ name, fieldOptions, options }: SelectFieldType) {
  
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;

  // const [selected, setSelected] = useState<string>('');
  const { focused, handleFocus, handleBlur } = useFocusState();
  const { register, formState: {errors} } = useFormContext();
  const error = errors[fieldName!];
  return (
    <FieldWrapper options={fieldOptions}>
      <Label name={name!} options={fieldOptions} focused={focused} htmlFor={fieldName}>
        <select
          className="text-input bg-transparent border-0 w-full p-4 mb-0 mt-4 text-black"
          onFocus={handleFocus}
          // onChange={e => setSelected(e.target.value)}
          // value={selected}
          // {...register(fieldName!, { required })} 
          onBlur={handleBlur}
        >
          <option value={''}></option>
          {options?.map((option: StateOption | string) => {
            const label = typeof option === 'string' ? option : option.label;
            const value = typeof option === 'string' ? option : option.value;
            return (
              <option value={value} key={value}>
                {label}
              </option>
            );
          })}
        </select>
      </Label>
      {error?.type === 'required' && <p className="text-error">{fieldName || 'This field'} is required!</p>}
      {description && <p className="field-description">{description}</p>}
    </FieldWrapper>
  );
}