import type { FileUpload } from "@/sanity.types";
import { FieldWrapper, Label, useFocusState } from "./formUtils";
import { useRef, useState } from "react";
import { useFormContext } from "./Form";

export default function FileUpload({name, fieldOptions}: FileUpload) {
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;

  const { focused, handleFocus, handleBlur, setFocus } = useFocusState();
  const [fileName, setFileName] = useState<string>('');

  const { errors } = useFormContext();
  const error = errors ? errors[fieldName] : null;
  
  const ref = useRef<HTMLInputElement>(null);

  const checkFile = () => {
    if (ref.current) {
      console.dir(ref.current)
      const filePath = ref.current.value;
      const splitFile = filePath.split('\\');
      const file = splitFile[splitFile.length - 1];
      if (file) {
        setFocus(true);
        setFileName(file);
      }
    }
  }


  return (
    <FieldWrapper options={fieldOptions}>
      <Label className="h-[64px]" options={fieldOptions} name={name!} focused={focused} htmlFor={fieldName}>
        <input
          className="absolute opacity-0 top-0 right-0 bottom-0 left-0 cursor-pointer"
          type="file"
          id={fieldName}
          onFocus={handleFocus}
          ref={ref}
          name={fieldName}
          required={required}
          
          onBlur={(e) => {
            handleBlur(e);
            checkFile();
          }}
        />
        {fileName && <span className="file-name absolute top-1/2 -translate-y-1/2 left-2">{fileName}</span>}
        <span className="absolute h-full right-0 top-0 flex items-center bg-orange text-white px-4 text-center pointer-events-none">
          Browse
        </span>
      </Label>
      {description && <p className="field-description">{description}</p>}
      {error && <p className="text-error">{error}</p>}
    </FieldWrapper>
  );

}