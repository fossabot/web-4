import React from "react"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import prism from "react-syntax-highlighter/dist/esm/styles/prism/ghcolors"

/* eslint-disable-next-line */
export interface CodeProps {
  codeString: string
  language: string
}

export const Code = (props: CodeProps) => {
  return (
    <SyntaxHighlighter language={props.language} style={prism}>
      {props.codeString}
    </SyntaxHighlighter>
  )
}

export default Code
