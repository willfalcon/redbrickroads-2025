import { FieldOptions } from "@/sanity.types";
import classNames from "classnames";
import { createContext, FocusEvent, PropsWithChildren, useContext, useState } from "react";

export function useFocusState(type = 'default') {
  const [focused, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    console.log(e);
    if (type === 'date') {
      if (e.target.tagName === 'INPUT') {
        if (!e.target.value) {
          setFocus(false);
        }
      }
    } else {
      if (!e.target.value) {
        setFocus(false);
      }
    }
  };
  return {focused, handleFocus, handleBlur, setFocus};
}

// const FormContext = createContext({});

// export function FormContextProvider({ value, children }) {
//   // console.log({ values: value.control.getValues() });
//   return (
//     <FormContext.Provider value={{ ...value }}>{children}</FormContext.Provider>
//   );
// };

// export function useFormContext() {
//   return useContext(FormContext);
// }


interface FieldWrapperProps extends PropsWithChildren  {
  options?: FieldOptions,
  name: string,
}

export function FieldWrapper({ name, options, children }: FieldWrapperProps) {
  const required = options && options.required ? options.required : false;
  const halfWidth = options && options.halfWidth ? options.halfWidth : false;
  return (
    <div
      className={classNames('w-full h-full relative', {
        'col-span-1': halfWidth,
        'col-span-2': !halfWidth,
      })}
    >
      <label
        className={classNames('w-full relative transition-all block border-2 border-orange', {
          'col-span-1': halfWidth,
          'col-span-2': !halfWidth,
        })}
      >
        <span className="label-text absolute top-1/2 left-4 transition-all -translate-y-1/2 text-[1.6rem] pointer-events-none">
          {name}
          {required && '*'}
        </span>
        {children}
      </label>
    </div>
  );
}