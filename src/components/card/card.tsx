// #region Global Imports
import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
// #endregion Global Imports

// #region Local Imports
import type { WithAs } from "~types";
import Meta from "./meta";
// #endregion Local Imports

interface CardOwnProps extends WithAs {
  readonly key: string;
}

const COMPONENT_KEY = "Card";

const Card = (props: CardOwnProps): React.ReactElement => {
  const { as: Component = "article", key,...restProps } = props;
  return <Component key={key} {...restProps}>
    <Link to={"/123"} >
      <StaticImage src={"StaticImage"}/>
    </Link>
    Card <Meta title={"Test"} description={"Lorem"}/>
  </Component>;
};

Card.displayName = COMPONENT_KEY;

export type { CardOwnProps };
export { COMPONENT_KEY };
export default Card;
