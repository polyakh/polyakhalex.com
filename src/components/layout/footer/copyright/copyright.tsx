// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import type {WithAs} from "~types";
import {useSiteMetadata} from "~hooks";
// #endregion Local Imports

const currentYear = new Date().getFullYear();

interface CopyrightOwnProps extends WithAs {
  readonly name?: string;
}

const COMPONENT_KEY = "Copyright";

const Copyright = (props: CopyrightOwnProps): React.ReactElement => {
  const {as: Component = "span", children, ...restProps} = props;
  const { authorInfo } = useSiteMetadata();
  console.log(authorInfo)
  return <Component {...restProps}>© {currentYear} {authorInfo.name}{children}</Component>;
};

Copyright.displayName = COMPONENT_KEY;

export type {CopyrightOwnProps};
export {COMPONENT_KEY};
export default Copyright;
