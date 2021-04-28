// #region Global Imports
import React, {AnchorHTMLAttributes} from "react";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types/common";
// #endregion Local Imports


const BLANK = "_blank";
const COMPONENT_KEY = "Link";
// About rel=noopener => https://mathiasbynens.github.io/rel-noopener/
type Targets = typeof BLANK | "_parent" | "_self" | "_top" | string;
interface LinkOwnProps extends WithAs, AnchorHTMLAttributes<HTMLAnchorElement> {
  target?: Targets
}

const Link = (props: LinkOwnProps): React.ReactElement => {
  const { as: Component = "a", children, rel: propRel, target, ...restProps } = props;

  const rel = target === BLANK ? "noopener noreferrer" : "";
  return <Component {...restProps} rel={rel}>{children}</Component>;
};

Link.displayName = "Link";
export { LinkOwnProps, COMPONENT_KEY }
export default Link;
