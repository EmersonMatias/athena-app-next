import { ComponentProps } from "react"

type ContainerProps = ComponentProps<'div'> 

export default function Container({...props}: ContainerProps){
    return(
        <div {...props}/>
    )
}