// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import type {WithAs} from "~types";
// #endregion Local Imports

interface IconOwnProps extends React.HTMLAttributes<SVGSVGElement>, React.SVGAttributes<SVGSVGElement>, WithAs {
  viewBox?: string;
  focusable?: "false" | "true" | boolean;
}

const COMPONENT_KEY = "Icon";

const Icon = (props: IconOwnProps): React.ReactElement => {
  const {
    as: Component = "svg",
    "aria-hidden": ariaHidden = true,
    viewBox = "0 0 24 24",
    focusable = false,
    children,
    ...restProps
  } = props;

  return <Component viewBox={viewBox} aria-hidden={ariaHidden}
                    focusable={focusable} {...restProps}>{children}</Component>;
};

Icon.displayName = COMPONENT_KEY;

export type {IconOwnProps};
export {COMPONENT_KEY};
export default Icon;

