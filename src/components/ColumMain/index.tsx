import React, { InputHTMLAttributes } from "react";
import { ColumGrid } from "./ColumMain.style";

type ColumProps = InputHTMLAttributes<HTMLDivElement>;

export default function ColumMain(props: ColumProps) {
  return <ColumGrid {...props}></ColumGrid>;
}
