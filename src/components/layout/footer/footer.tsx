// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types/common";
// #endregion Local Imports

type SocialLinks = "twitter" | "github" | "linkedin";

interface FooterOwnProps extends WithAs {
 readonly socialLinks?: {[key in SocialLinks]: string}
}

const COMPONENT_KEY = "Footer";

const Footer = (props: FooterOwnProps): React.ReactElement => {
  const { as: Component = "footer", ...restProps} = props;
  return <Component {...restProps}>Footer</Component>;
};

Footer.displayName = COMPONENT_KEY;

export {COMPONENT_KEY};
export type { FooterOwnProps };
export default Footer;
