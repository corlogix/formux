import { createCtx } from "../utils/createCtx";

export type FormContext = {
    formData: any;
    configureField: (field: FormField, deps: any[]) => void;
    setValue: (payload: Record<string, any>) => void;
};

export type FormField = {
    name: string;
    defaultValue: any;
    state: "valid" | "invalid" | undefined;
    required: boolean;
    disabled: boolean;
    dirty: boolean;
};

const [ useFormContext,  FormProvider ] =  createCtx<FormContext>({ formData: null }, false);

export {
  useFormContext,
  FormProvider
}