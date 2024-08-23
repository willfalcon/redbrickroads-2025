import type { FileUpload } from "@/sanity.types";
import { useFocusState } from "./formUtils";
import { ChangeEvent, useState } from "react";

export default function FileUpload({name, fieldOptions}: FileUpload) {
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth = fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;

  const { focused, handleFocus, handleBlur, setFocus } = useFocusState();
  const [fileName, setFileName] = useState<string>('');

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

  return (
    <div>
      <label>
        <span className="label-text label-text--file">
          {name}
          {required && '*'}
        </span>
        <input
          className="file-input"
          type="file"
          name={fieldName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </label>
    </div>
  );

}