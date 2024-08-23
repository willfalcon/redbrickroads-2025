'use client';



import type { Form } from "@/sanity.types";
import Button from "../Button";
import Content from "../Content";
import FieldSwitcher from "./FieldSwitcher";

export default function Form({title, description, fields, submitText}: Form) {

  return (
    <form>
      <h2 className="form__title">{title}</h2>
      <Content className="form__description">{description}</Content>
      <fieldset className="form__fields grid grid-cols-2 gap-4">
        {fields?.map(field => (
          <FieldSwitcher key={field._key} {...field} />
        ))}
        <Button type="submit" className="form__submit mt-8 block w-max" >{submitText || 'Submit'}</Button>
      </fieldset>
    </form>
  );
}

