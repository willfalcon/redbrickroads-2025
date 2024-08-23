import type { DateField } from "@/sanity.types";
import { useFocusState } from "./formUtils";
import DatePicker from "react-date-picker";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function DateField({name, fieldOptions}: DateField) {
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth = fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;

  const {focused, handleFocus, handleBlur} = useFocusState();

  return (
    <div>
      <label>
        <span className="label-text">
          {name}
          {required && '*'}
        </span>
        <DatePicker 
          required={required} 
          name={fieldName} 
          onFocus={handleFocus}
          onBlur={handleBlur} 
          // prevLabel={<FaAngleLeft />}
          // prev2Label={<FaAngleDoubleLeft />}
          // nextLabel={<FaAngleRight />}
          // next2Label={<FaAngleDoubleRight />}
        />
      </label>
      {description && <p className="field-description">{description}</p>}
    </div>
  );
}