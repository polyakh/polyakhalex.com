// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import type { WithAs } from "~types";
import { Links } from "~components";
// #endregion Local Imports

type HeaderOwnProps = WithAs

const COMPONENT_KEY = "Header";

const Header = (props: HeaderOwnProps): React.ReactElement => {
  const { as: Component = "header", ...restProps} = props;
  return <Component {...restProps}>
    <Links/>
  </Component>;
};


Header.displayName = COMPONENT_KEY;

export type { HeaderOwnProps };
export { COMPONENT_KEY };

export default Header;
