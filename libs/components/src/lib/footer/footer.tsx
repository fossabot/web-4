import React from "react";
import {FooterLink} from "../footer-link/footer-link"
/* eslint-disable-next-line */
export interface FooterProps {
  color?: string
}

export const Footer = (props: FooterProps) => {

  const color = props.color ? `bg-${props.color}-700` : "bg-gray-200"
  const darkText = "text-primary-100"
  const lightText = "text-gray-100"

  return (
    <footer className={`w-full ${color}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-wrap justify-between p-10  ${darkText}`}>
          <div className="space-y-2">
            <h4 className={`text-xs font-semibold ${lightText} uppercase`}> Projects</h4>
            <FooterLink color={props.color} href="https://research.perfol.io">Research</FooterLink>
            <FooterLink color={props.color} href="/#">The other thing </FooterLink>
          </div>
          <div className="space-y-2">
            <h4 className={`text-xs font-semibold ${lightText} uppercase`}> Resources</h4>
            <FooterLink color={props.color} href="/#">Documentation</FooterLink>
            <FooterLink color={props.color} href="/#">Tutorials</FooterLink>
          </div>
          <div className="space-y-2">
            <h4 className={`text-xs font-semibold ${lightText} uppercase`}> Contact us</h4>
            <FooterLink color={props.color} href="mailto:contact@perfol.io">contact@perfol.io</FooterLink>
          </div>
          <div className="space-y-2">
            <h4 className={`text-xs font-semibold ${lightText} uppercase`}> Source</h4>
            <FooterLink color={props.color} href="https://github.com/perfolio">github.com</FooterLink>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-primary-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center px-10 py-2 text-sm text-gray-800 md:flex-row">
            <span className={`${lightText}`}>© Copyright {new Date().getFullYear()}. All Rights Reserved.</span>
            <div className="flex flex-row md:flex-auto md:flex-row-reverse">
              <FooterLink color={props.color} href="https://www.netlify.com">
                <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="Deploys by Netlify" />
              </FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
