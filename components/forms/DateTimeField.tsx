import type { DateField, DateTimeField, TimeField } from '@/sanity.types';
import { FieldWrapper, Label, useFocusState } from './formUtils';
import { useFormContext } from './Form';

export default function DateTimeField({ name, fieldOptions, _type }: TimeField | DateField | DateTimeField) {
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;

  const fieldName: string = (fieldOptions?.adminLabel ?? name) as string;

  const { focused, handleFocus, handleBlur } = useFocusState();

  const { errors } = useFormContext();
  const error = errors ? errors[fieldName] : null;

  function getType(type: string) {
    switch (type) {
      case 'dateField':
        return 'date';
      case 'timeField':
        return 'time';
      default:
        return 'datetime-local';
    }
  }

  return (
    <FieldWrapper options={fieldOptions}>
      <Label name={name!} options={fieldOptions} focused={focused} forceActiveLabel htmlFor={fieldName}>
        <input
          className="text-input bg-transparent border-0 w-full p-4 mb-0 mt-4 text-black focus:outline-0"
          type={getType(_type)}
          name={fieldName}
          id={fieldName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
        />
      </Label>
      {description && <p className="field-description">{description}</p>}
      {error && <p className="text-error">{error}</p>}
    </FieldWrapper>
  );
}
