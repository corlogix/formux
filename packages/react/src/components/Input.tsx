import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {

}

export function Input(props: InputProps) {
    return <input {...props}/>
}