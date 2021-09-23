export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {

}

export function Form(props: FormProps) {
    return <form {...props}/>
}