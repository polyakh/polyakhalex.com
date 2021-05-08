// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types";
// #endregion Local Imports

interface IconOwnProps extends WithAs {
  viewBox?: string;
  focusable?: boolean;
}

const COMPONENT_KEY = "Icon";

const Icon = (props: IconOwnProps): React.ReactElement => {
  const { as: Component = "svg", children, ...restProps } = props;

  return <Component {...restProps}>{children}</Component>;
};

Icon.displayName = COMPONENT_KEY;

export type { IconOwnProps };
export { COMPONENT_KEY };
export default Icon;

