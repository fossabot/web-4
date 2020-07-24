import React from "react"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import prism from "react-syntax-highlighter/dist/cjs/styles/prism/ghcolors"

/* eslint-disable-next-line */
export interface CodeProps {
  language: string
  children: string
}

export const Code = (props: CodeProps) => {
  return (
    <SyntaxHighlighter language={props.language} style={prism} customStyle={"color:red;"}>
      {props.children}
    </SyntaxHighlighter>
  )
}

export default Code
