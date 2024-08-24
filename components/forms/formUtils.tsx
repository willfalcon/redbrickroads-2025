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


type FieldWrapperProps = PropsWithChildren & {
  options?: FieldOptions,
}

export function FieldWrapper({ options, children }: FieldWrapperProps) {
  const halfWidth = options && options.halfWidth ? options.halfWidth : false;
  return (
    <div
      className={classNames('w-full h-full relative', {
        'col-span-1': halfWidth,
        'col-span-2': !halfWidth,

      })}
    >
      {children}
    </div>
  );
}

type LabelProps = PropsWithChildren & {
  className?: string,
  options?: FieldOptions,
  name: string,
  focused: boolean,
  htmlFor?: string
}
export function Label({className, options, name, children, focused, htmlFor } : LabelProps) {
  const halfWidth = options && options.halfWidth ? options.halfWidth : false;
  const required = options && options.required ? options.required : false;
  const fieldName = options && options.adminLabel ? options.adminLabel : name;
  return (
    <label
      className={classNames(className, 'w-full relative transition-all block border-orange', {
        'col-span-1': halfWidth,
        'col-span-2': !halfWidth,
        'border-4': focused,
        'border-2': !focused,
        'my-0': focused,
        'my-[2px]': !focused,
        // 'translate-y-[-2px]': focused,
        // 'translate-y-0': !focused
      })}
      htmlFor={htmlFor || undefined}
    >
      <span className={classNames("label-text absolute top-1/2 left-4 transition-all text-[1.6rem] pointer-events-none", {
        '-translate-y-1/2': !focused,
        'translate-y-[-140%]': focused,
        'text-[1.6rem]': !focused,
        'text-[1.2rem]': focused
      })}>
        {name}
        {required && '*'}
      </span>
      {children}
    </label>
  );
}