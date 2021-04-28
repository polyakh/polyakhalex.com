// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types/common";
// #endregion Local Imports

type CardOwnProps = WithAs

const COMPONENT_KEY = "Card";

const Card = (props: CardOwnProps): React.ReactElement => {
  const { as: Component = "div",...restProps } = props;
  return <Component {...restProps}>Card</Component>;
};

Card.displayName = COMPONENT_KEY;

export { CardOwnProps, COMPONENT_KEY };
export default Card;
