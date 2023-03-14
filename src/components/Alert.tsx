import React from "react";
type Props = {
        message: string
}
export const Alert: React.FC<Props> = ({message}) => {
        return<div style={{border:"1px solid red",color: "red"}}>{message}</div>
}