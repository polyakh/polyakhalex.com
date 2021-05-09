// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import type { WithAs } from "~types";
import Copyright from "./copyright";
import Profiles from "./profiles";
// #endregion Local Imports


type FooterOwnProps = WithAs;

const COMPONENT_KEY = "Footer";

const Footer = (props: FooterOwnProps): React.ReactElement => {
  const { as: Component = "footer", ...restProps} = props;
  return <Component {...restProps}><Copyright /><Profiles /></Component>;
};

Footer.displayName = COMPONENT_KEY;

export type { FooterOwnProps };
export {COMPONENT_KEY};
export default Footer;
