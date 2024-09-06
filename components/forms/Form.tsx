'use client';

import type { Form } from "@/sanity.types";
import { createContext, useContext, PropsWithChildren, CSSProperties } from "react";

import FieldSwitcher from "./FieldSwitcher";
import SimpleContent from "../SimpleContent";
import Submit from "./Submit";
import { formSubmit } from "@/app/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useMeasure } from '@uidotdev/usehooks';


type Props = Form & {
  className: string;
  additionalSubmitHandler?: () => void;
}; 

const initialState = {
  message: '',
  errors: null
};

export default function Form(props: Props) {
  const {title, description, fields, submitText, successMessage, _id, className, additionalSubmitHandler} = props;
  
  const hasUploads = fields?.some(field => field._type === 'fileUpload');

  const [state, formAction]= useFormState(formSubmit, initialState); 

  const {errors, message} = state;
  console.log(state);

  return (
    <FormContext.Provider value={{ errors }}>
      <form action={formAction}>
        <h2 className="text-[3rem] md:text-[6rem] uppercase text-orange my-20">{title}</h2>
        {description && <SimpleContent className="form__description">{description}</SimpleContent>}
        <Fieldset>
          {fields?.map(field => <FieldSwitcher key={field._key} {...field} />)}
          {/* <input type="hidden" name="_subject" value={`RBR Form Submission - ${title}`} /> */}
          <input type="hidden" name="form" value={_id} />
          <Submit>{submitText}</Submit>
        </Fieldset>

        {!errors && message && (
          <div className="bg-success p-4 mt-4">
            <p className="text-white">{message}</p>
          </div>
        )}
        {errors && (
          <div className="bg-error p-4 mt-4">
            <p className="text-white">{message}</p>
          </div>
        )}
      </form>
    </FormContext.Provider>
  );
}

const FormContext = createContext({errors: []});
export const useFormContext = () => useContext(FormContext);

const Fieldset = ({children}: PropsWithChildren) => {
  const { pending } = useFormStatus();
  const [ref, { width, height }] = useMeasure();
  
  const flagHeight = Math.sqrt(Math.pow(width!, 2) + Math.pow(height!, 2));

  return (
    <fieldset className="relative form__fields grid grid-cols-2 gap-4 overflow-hidden p-4" disabled={pending} aria-busy={pending} ref={ref}>
      {children}
      {pending && (
        <div className="absolute w-[200%] h-full top-0 left-0 bg-gradient-to-r from-orange from-0 via-purple via-50% to-orange to-100 origin-center bg-[length:50%_auto] mix-blend-multiply opacity-30 animate-movingBg" />
      )}
    </fieldset>
  );
}