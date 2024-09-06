import type { TextArea } from "@/sanity.types";
import { FieldWrapper, Label, useFocusState } from "./formUtils";
import classNames from "classnames";
import { useFormContext } from "./Form";


export default function TextArea({name, fieldOptions}: TextArea) {
    const required =
      fieldOptions && fieldOptions.required ? fieldOptions.required : false;
    const halfWidth =
      fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
    const description =
      fieldOptions && fieldOptions.description ? fieldOptions.description : false;
    
    const fieldName: string = (fieldOptions?.adminLabel ?? name) as string;
    
    const { focused, handleFocus, handleBlur } = useFocusState();

    const { errors } = useFormContext();
    const error = errors ? errors[fieldName] : null;

    const classes = classNames('*:translate-y-0', {
      '*:top-[17px]': !focused,
      '*:top-0': focused,
    });
  return (
    <FieldWrapper options={fieldOptions}>
      {description && <p className="field-description">{description}</p>}
      <Label className={classes} name={name!} options={fieldOptions} focused={focused} htmlFor={fieldName}>
        <textarea
          className="text-input bg-transparent border-0 w-full p-4 mb-0 mt-4 text-black focus:outline-0"
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