import React, { InputHTMLAttributes } from "react";
import { MainGridContainer } from "./MainGrid.style";

export default function MainGrid(props: InputHTMLAttributes<HTMLBaseElement>) {
  return <MainGridContainer {...props}>{props.children}</MainGridContainer>;
}
