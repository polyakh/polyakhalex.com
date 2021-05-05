// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types";
import * as styles from "./styles.module.css";

// #endregion Local Imports

type AvatarOwnProps = WithAs

const COMPONENT_KEY = "Avatar";

const Avatar = (props: AvatarOwnProps): React.ReactElement => {
  const { as: Component = "span", children, ...restProps } = props;

  return <Component {...restProps} className={styles.avatar}>{children}</Component>;
};

Avatar.displayName = COMPONENT_KEY;

export type { AvatarOwnProps }
export { COMPONENT_KEY };
export default Avatar;

