import type { AddressField } from "@/sanity.types";
import TextField from "./TextField";
import SelectField from "./SelectField";
import classNames from "classnames";
import states from "./states";

export default function AddressField({name, fieldOptions}: AddressField) {
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth = fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  const description = fieldOptions && fieldOptions.description ? fieldOptions.description : false;
  const adminLabel = fieldOptions && fieldOptions.adminLabel ? fieldOptions.adminLabel : false;
  const fieldName = adminLabel ? adminLabel : name;

  return (
    <div className={classNames('w-full h-full relative grid grid-cols-2 gap-4', {
        'col-span-1': halfWidth,
        'col-span-2': !halfWidth,
      })}>
      <span className="label-text complex-field-label col-span-2">
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
      <SelectField
        name={`State`}
        fieldOptions={{
          halfWidth: true,
          adminLabel: `${fieldName} - State`,
          _type: 'fieldOptions'
        }}
        options={states}
        _type="selectField"
      />
      <TextField
        name={`Zip`}
        fieldOptions={{ halfWidth: true, adminLabel: `${fieldName} - Zip`, _type: 'fieldOptions' }}
        _type="textField"
      />
      {description && <p className="field-description">{description}</p>}
      
    </div>
  );
}