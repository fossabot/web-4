import React from "react"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "./style"

/* eslint-disable-next-line */
export interface CodeProps {
  language: string
  children: string
}

export const Code = (props: CodeProps) => {
  return (
    <div className="px-4 m-8 overflow-visible bg-gray-900 rounded-lg shadow-lg ">
      <SyntaxHighlighter language={props.language} style={style} className="font-mono">
        {props.children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
