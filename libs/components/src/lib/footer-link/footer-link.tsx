import React from "react"

/* eslint-disable-next-line */
export interface FooterLinkProps {
  color: string
  href: string
  children: React.ReactChildren
}

export const FooterLink = (props: FooterLinkProps) => {
  const hover = `hover:text-${props.color}-600`

  return (
    <a href={props.href} className={`block focus:outline-none ${hover}`}>
      {props.children}
    </a>
  )
}

export default FooterLink
