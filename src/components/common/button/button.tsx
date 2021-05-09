// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import type {WithAs} from "~types";
// #endregion Local Imports

const RESET = "reset";
const SUBMIT = "submit";
const DEFAULT_TYPE = "button";
type Type = typeof DEFAULT_TYPE | typeof RESET | typeof SUBMIT;

interface ButtonOwnProps extends WithAs {
  type?: Type;
}

const COMPONENT_KEY = "Button";

const Button = (props: ButtonOwnProps): React.ReactElement => {
  const {as: Component = DEFAULT_TYPE, type = DEFAULT_TYPE, children, ...restProps} = props;

  return <Component type={type} {...restProps} >{children}</Component>;
};

Button.displayName = COMPONENT_KEY;

export type {ButtonOwnProps};
export {COMPONENT_KEY};
export default Button;

