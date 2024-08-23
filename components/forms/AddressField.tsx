import type { AddressField } from "@/sanity.types";
import TextField from "./TextField";

export default function AddressField({name, fieldOptions}: AddressField) {
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth = fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;

  return (
    <div>
      <span className="label-text complex-field-label">
        {name}
        {required && '*'}
      </span>
      <TextField
        name={`Address Line 1`}
        fieldOptions={{ adminLabel: `${fieldName} - Address Line 1`, _type: 'fieldOptions' }}
        _type="textField"
      />
      <TextField
        name={`Address Line 2`}
        fieldOptions={{ adminLabel: `${fieldName} - Address Line 2`, _type: 'fieldOptions' }}
        _type="textField"
      />
      <TextField
        name={`City`}
        fieldOptions={{ halfWidth: true, adminLabel: `${fieldName} - City`, _type: 'fieldOptions' }}
        _type="textField"
      />
      {/* <SelectField
        name={`State`}
        fieldOptions={{
          halfWidth: true,
          adminLabel: `${fieldName} - State`,
        }}
        options={states}
        // register={register}
      /> */}
      <TextField
        name={`Zip`}
        fieldOptions={{ halfWidth: true, adminLabel: `${fieldName} - Zip`, _type: 'fieldOptions' }}
        _type="textField"
      />
      {description && <p className="field-description">{description}</p>}
      
    </div>
  );
}