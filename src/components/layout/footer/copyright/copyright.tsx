// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types/common";
// #endregion Local Imports

const currentYear = new Date().getFullYear();

interface CopyrightOwnProps extends WithAs {
 readonly name: string;
}

const COMPONENT_KEY = "Copyright";

const Copyright = (props: CopyrightOwnProps): React.ReactElement => {
  const { as: Component = "span", name, ...restProps} = props;
  return <Component {...restProps}>© {currentYear} { name }</Component>;
};

Copyright.displayName = COMPONENT_KEY;

export { CopyrightOwnProps, COMPONENT_KEY };
export default Copyright;
