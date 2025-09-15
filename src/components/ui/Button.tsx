import type { ReactElement } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ButtonProps{
    variant:"primary"|"secondary";
    size:"md"|"sm"|"lg";
    text:string;
    onclick:()=>void;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
}

const variantStyles={
    'primary':'bg-purple-600 text-white',
    'secondary':'bg-white text-purple-300'
}

const defaultStyles="rounded-md flex";

const sizeStyles={
    "sm":"py-1 px-2",
    "md":" py-2 px-4",
    "lg":" py-3 px-6"
}
export const Button=(props:ButtonProps)=>{
   
    return (
        <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>
           {props.startIcon ?<div className="pr-2">{props.startIcon}</div>:null} {props.text} {props.endIcon?<div>{props.endIcon}</div>:null}
        </button>
    )
}
