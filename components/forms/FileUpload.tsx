import type { FileUpload } from "@/sanity.types";
import { FieldWrapper, Label, useFocusState } from "./formUtils";
import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function FileUpload({name, fieldOptions}: FileUpload) {
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth = fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;

  const { focused, handleFocus, handleBlur, setFocus } = useFocusState();
  const [fileName, setFileName] = useState<string>('');
  const { register, setValue, formState: {errors} } = useFormContext();
  const error = errors[fieldName!];
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filePath = e.target.value;
    // console.log(e.target.files);
    const splitFile = filePath.split('\\');
    const file = splitFile[splitFile.length - 1];

    if (file) {
      setFocus(true);
      setFileName(file);
    }
  };
  const { ref, onChange } = register(fieldName!, { required, onChange: handleChange });


  return (
    <FieldWrapper options={fieldOptions}>
      <Label className="h-[64px]" options={fieldOptions} name={name!} focused={focused} htmlFor={fieldName}>
        <input
          className="absolute opacity-0 top-0 right-0 bottom-0 left-0 cursor-pointer"
          type="file"
          name={fieldName}
          id={fieldName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          ref={ref}
        />
        {fileName && <span className="file-name absolute top-1/2 -translate-y-1/2 left-2">{fileName}</span>}
        <span className="absolute h-full right-0 top-0 flex items-center bg-orange text-white px-4 text-center pointer-events-none">
          Browse
        </span>
      </Label>
      {error?.type === 'required' && <p className="text-error">{fieldName || 'This field'} is required!</p>}
      {description && <p className="field-description">{description}</p>}
    </FieldWrapper>
  );

}