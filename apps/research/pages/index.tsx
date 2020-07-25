import React from "react"
import { HeroSection, Code } from "@perfolio/components"
import fs from "fs"

interface IndexProps {
  codeExamples: {
    language: string
    snippet: string
  }[]
}

const Index = (props: IndexProps) => {
  return (
    <div className="min-h-screen">
      <HeroSection
        color="primary"
        headline={{
          regular: "Enhance your research with",
          highlight: "factor returns",
        }}
        paragraph="Factor investing is a strategy that chooses securities on attributes that are associated with higher returns. There are two main types of factors that have driven returns of stocks, bonds, and other factors: macroeconomic factors and style factors. The former captures broad risks across asset classes while the latter aims to explain returns and risks within asset classes."
        primaryButton={{
          label: "Get started",
          href: "#",
        }}
        secondaryButton={{
          label: "Learn more",
          href: "#",
        }}
      >
        <Code code={props.codeExamples}></Code>
      </HeroSection>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      codeExamples: [
        {
          language: "python",
          snippet: fs.readFileSync(
            `${process.cwd()}/apps/research/public/code-snippets/import-from-api.python.txt`,
            "utf-8",
          ),
        },
        {
          language: "r",
          snippet: fs.readFileSync(
            `${process.cwd()}/apps/research/public/code-snippets/import-from-api.r.txt`,
            "utf-8",
          ),
        },
      ],
    },
  }
}

export default Index
