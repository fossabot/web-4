import React from "react"
import { Code, CodeProps } from "./code"

export default {
  component: Code,
  title: "Code",
}

export const singleLine = () => {
  /* eslint-disable-next-line */
  const props: CodeProps = {
    codeString: `const x = ["hello", "world"].map(word => word + "!")`,
    language: "js",
  }

  return <Code codeString={props.codeString} language={props.language} />
}

export const multiLine = () => {
  /* eslint-disable-next-line */
  const props: CodeProps = {
    codeString: `
    const arr = ["hello", "world"]
    const x = arr.map(word => word + "!")
    `,
    language: "js",
  }

  return <Code codeString={props.codeString} language={props.language} />
}
