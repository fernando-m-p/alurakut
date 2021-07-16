import React, { InputHTMLAttributes } from "react";
import { LoginGridContainer } from "./LoginGrid.style";

export default function LoginGrid(props: InputHTMLAttributes<HTMLBaseElement>) {
  return <LoginGridContainer {...props}>{props.children}</LoginGridContainer>;
}
