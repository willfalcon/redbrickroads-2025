import type { SelectField } from "@/sanity.types";
import { FieldWrapper, Label, useFocusState } from "./formUtils";
import { useFormContext } from "./Form";

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

  
  const { focused, handleFocus, handleBlur } = useFocusState();
  const { errors } = useFormContext();
  const error = errors ? errors[fieldName] : null;

  return (
    <FieldWrapper options={fieldOptions}>
      <Label name={name!} options={fieldOptions} focused={focused} htmlFor={fieldName}>
        <select
          className="text-input bg-transparent border-0 w-full p-4 mb-0 mt-4 text-black"
          onFocus={handleFocus}
          // onChange={e => setSelected(e.target.value)}
          // value={selected}
          // {...register(fieldName!, { required })} 
          required={required}
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
      {description && <p className="field-description">{description}</p>}
      {error && <p className="text-error">{error}</p>}
    </FieldWrapper>
  );
}