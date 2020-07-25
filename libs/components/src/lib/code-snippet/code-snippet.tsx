import React from "react"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "../code-snippet/style"
/* eslint-disable-next-line */
export interface CodeProps {
  language: string
  children: string
}

export const CodeSnippet = (props: CodeProps) => {
  return (
    <SyntaxHighlighter language={props.language} style={style} className="font-mono">
      {props.children}
    </SyntaxHighlighter>
  )
}

export default CodeSnippet