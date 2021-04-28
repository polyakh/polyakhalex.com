// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types";
// #endregion Local Imports

type Type = "button" | "reset" | "submit";

interface ButtonOwnProps extends WithAs {
  type?: Type;
}

const COMPONENT_KEY = "Button";

const Button = (props: ButtonOwnProps): React.ReactElement => {
  const { as: Component = "button", children, ...restProps } = props;

  return <button {...restProps}>{children}</button>;
};

Button.displayName = COMPONENT_KEY;

export { ButtonOwnProps, COMPONENT_KEY };
export default Button;

