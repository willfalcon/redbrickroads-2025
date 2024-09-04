'use client';

import type { Form as FormType, Popup } from "@/sanity.types"
import classNames from "classnames";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import SimpleContent from "./SimpleContent";
import Form from "./forms/Form";
import { IoCloseSharp } from "react-icons/io5";

type Props = Popup & {
  className?: string
}

export default function Popup(props: Props) {
  console.log(props)
  const [visible, setVisible] = useState(false);
  const {className, location, title, text, form, cookieId} = props;
  
  const [formData, setForm] = useState<FormType | null>(null);


  useEffect(() => {
    const closed = cookieId?.current && Cookies.get(cookieId.current) === 'true';
    
    async function getForm() {
      if (form) {
        const formRes = await fetch(`/api/get-form/${form._ref}`).then(res => res.json());
        setForm(formRes);
      }
    }

    if (!closed) {
      getForm(); 
    }

  }, []);

  useEffect(() => {

    const closed = cookieId?.current && Cookies.get(cookieId.current) === 'true';
    
    if (formData && !closed) {
      setVisible(true);
    }

  }, [formData]);
  
  
  function handleClose() {
    setVisible(false);
    if (cookieId?.current) {
      Cookies.set(cookieId.current, 'true', { expires: 7 });
    }
  }

  function handleSubmit() {
    setTimeout(() => {
      handleClose();
    }, 1500);
  }

  
  let classes = 'flex justify-center items-center flex-col fixed z-50 bg-white rounded px-4 pb-6 pt-12 max-w-[calc(100vw-2rem)] md:max-w-[400px] ';
  switch(location) {
    case 'bottom-center':
      classes += 'bottom-4 md:bottom-10';
    default: 
      classes += 'bottom-4 md:bottom-10 left-4 md:left-10';
  }

  return (
    visible && (
      <div className={classNames(classes, className)}>
        <h2 className="text-[1.6rem] md:text-[2rem] uppercase">{title}</h2>
        <SimpleContent className="max-w-full">{text}</SimpleContent>
        {formData && (
          <Form className="[&>h2]:text-[3.5rem] [&>h2]:my-4 [&>h2]:normal-case" {...formData} additionalSubmitHandler={handleSubmit} />
        )}
        <button className="absolute top-2 right-2" aria-label="Close Popup" onClick={handleClose}>
          <IoCloseSharp className="w-[30px] h-[30px]" />
        </button>
      </div>
    )
  );

}