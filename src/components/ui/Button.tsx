/* eslint-disable @typescript-eslint/no-explicit-any */


export interface ButtonProps{
    variant:"primary"|"secondary";
    size:"md"|"sm"|"lg";
    text:string;
    onclick:()=>void;
    startIcon?:any;
    endIcon?:any;
}

export const Button=(props:ButtonProps)=>{
   
    return (
        <div>
            <button>{props.text}</button>
        </div>
    )
}
