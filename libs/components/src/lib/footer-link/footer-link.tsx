import React from "react"

/* eslint-disable-next-line */
export interface FooterLinkProps {
  hoverColor: string
  href: string
  children: React.ReactNode
}

export const FooterLink = (props: FooterLinkProps) => {
  const hover = `hover:${props.hoverColor}`

  return (
    <a href={props.href} className={`block focus:outline-none ${hover}`}>
      {props.children}
    </a>
  )
}

export default FooterLink
