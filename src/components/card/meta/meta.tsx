// #region Global Imports
import React from "react";
import { Link } from "gatsby";
// #endregion Global Imports

// #region Local Imports
import type {WithAs, Title as ITitle, Description} from "~types";
import {Title} from "~components";
import {LVL4} from "~definitions";
// #endregion Local Imports

type MetaOwnProps = Omit<WithAs, "children"> & ITitle & Description;

const COMPONENT_KEY = "Meta";

const Meta = (props: MetaOwnProps): React.ReactElement => {
  const {as: Component = "div", title, description, ...restProps} = props;
  return <Component {...restProps}>
    <Title lvl={LVL4}>
      <Link to={"/123"}>{title}</Link>
    </Title>
    <div>{description}</div>
  </Component>;
};

Meta.displayName = COMPONENT_KEY;

export type {MetaOwnProps};
export {COMPONENT_KEY};
export default Meta;
