// #region Global Imports
import React from "react";
import {Link} from "gatsby";
// #endregion Global Imports

// #region Local Imports
import {WithAs} from "~types/common";
import {Link as LinkType} from "~components/layout/header/links";
// #endregion Local Imports

//region Types
interface ItemOwnProps extends WithAs, LinkType {
  path: string;
  role?: string;
}

//endregion

const COMPONENT_KEY = "Item";

const Item = (props: ItemOwnProps): React.ReactElement => {
  const {as: Component = "li", role = "menuitem", title, path, ...restProps} = props;
  return <Component {...restProps} role={role}><Link to={path}>{title}</Link></Component>;
};

Item.displayName = COMPONENT_KEY;

export type { ItemOwnProps };
export { COMPONENT_KEY};
export default Item;
// https://www.labnol.org/code/gatsby-images-200607
