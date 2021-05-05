// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types";
import * as styles from "./styles.module.css";
// #endregion Local Imports

interface ImageOwnProps extends WithAs {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

const COMPONENT_KEY = "Image";

const Image = (props: ImageOwnProps): React.ReactElement => {
  const { as: Component = "img", width, height, ...restProps } = props;
  return <div width={`${width}px`} height={`${height}px`}>
    <Component className={styles.image} {...restProps} />
  </div>;
};

Image.displayName = COMPONENT_KEY;

export type { ImageOwnProps };
export { COMPONENT_KEY };
export default Image;

