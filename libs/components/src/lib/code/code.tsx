import React, { useState } from "react"
import { CodeSnippet } from "../code-snippet/code-snippet"

/* eslint-disable-next-line */
export interface CodeProps {
  code: {
    language: string
    snippet: string
  }[]
}

export const Code = (props: CodeProps) => {
  const [selectedLanguage, setSelectedlanguage] = useState<string>(props.code[0].language)

  return (
    <div className="shadow-lg">
      <nav className="flex items-center justify-start px-4 space-x-4 border border-gray-500 rounded-t">
        {props.code.map((c) => {
          return (
            <button
              onClick={() => setSelectedlanguage(c.language)}
              className={`py-3 mr-8 text-xs font-bold tracking-wide  no-underline uppercase focus:outline-none hover:text-gray-900 ${
                c.language === selectedLanguage ? "text-primary-900" : "text-gray-600"
              }`}
            >
              {c.language}
            </button>
          )
        })}
      </nav>
      <div className="px-4 overflow-x-visible overflow-y-hidden bg-gray-900 rounded-b">
        <div className="flex pt-3 -mb-4 space-x-2">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
        {props.code.map((c) => {
          if (c.language === selectedLanguage) {
            return <CodeSnippet language={c.language}>{c.snippet}</CodeSnippet>
          }
        })}
      </div>
    </div>
  )
}

export default Code
