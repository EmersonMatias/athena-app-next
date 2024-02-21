import { ComponentProps } from "react"

type DividerProps = ComponentProps<'div'>

export default function Divider({className, ...props}:DividerProps){
    return(
        <div className={`h-[2px] ${className} bg-opacity-50`} {...props} >
        </div>
    ) 
}   