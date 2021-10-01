import { ReactNode, ReactNodeArray } from 'react'

import { FormProvider } from "../context/formContext";

type OverridedFormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, "onChange">

export type FormProps = OverridedFormProps & {
  children: ReactNode | ReactNodeArray
  data: any;

  // overrides
  onChange?: (formData: any) => void;
}

export function Form(props: FormProps) {
    return <form {...props}/>
}