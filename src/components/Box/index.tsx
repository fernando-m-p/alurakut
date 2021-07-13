import React, { InputHTMLAttributes } from "react";
import { BoxContainer } from "./Box.style";

export default function Box(props: InputHTMLAttributes<HTMLDivElement>) {
  return <BoxContainer {...props}>{props.children}</BoxContainer>;
}
