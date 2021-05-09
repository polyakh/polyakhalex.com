// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import type { WithAs } from "~types";
// #endregion Local Imports

type TagOwnProps = WithAs

const COMPONENT_KEY = "Tag";

const Tag = (props: TagOwnProps): React.ReactElement => {
  const { as: Component = "span", children, ...restProps } = props;

  return <Component {...restProps}>{children}</Component>;
};

Tag.displayName = COMPONENT_KEY;

export type { TagOwnProps };
export { COMPONENT_KEY };
export default Tag;

