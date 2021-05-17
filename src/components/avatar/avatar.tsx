// TODO width, height not work or path
//

// #region Global Imports
import React from "react";
import { StaticImage, IGatsbyImageData } from "gatsby-plugin-image";
// #endregion Global Imports

// #region Local Imports
import type { AltText, Url, WithAs } from "~types";
import * as styles from "./styles.module.css";
// #endregion Local Imports

const FIXED = "fixed",
  BLURRED = "blurred",
  WIDTH = 45,
  HEIGHT = 45

const defaultProps = {
  width: WIDTH,
  height: HEIGHT,
  placeholder: BLURRED,
  layout: FIXED,
}

// https://www.gatsbyjs.com/plugins/gatsby-plugin-image
interface AvatarOwnProps extends
  AltText, Url, Omit<WithAs, "children">, Partial<IGatsbyImageData> {
  readonly user?: string;
  readonly src: string
}

const COMPONENT_KEY = "Avatar";

const Avatar = (props: AvatarOwnProps): React.ReactElement => {
  const { as: Component = "span", placeholder, layout, altText, width, src, height, ...restProps } = props;
  console.log(props);

  return <Component className={styles.avatar}>
    <StaticImage
      src={"../../images/polyakh.jpg"}
      alt={altText ?? "logo"}
      placeholder={BLURRED}
      layout={layout}
      width={200}
      height={200}
    />
  </Component>
};

Avatar.displayName = COMPONENT_KEY;
Avatar.defaultProps = defaultProps;

export type { AvatarOwnProps }
export { COMPONENT_KEY };
export default Avatar;

