// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import type { WithAs } from "~types";
import { LVL1, LVL2, LVL3, LVL4 } from "~definitions";
// #endregion Local Imports

const tupleNum = <T extends number[]>(...args: T) => args ;
export const TITLE_LVL = tupleNum(LVL1, LVL2, LVL3, LVL4);

const LTR = "ltr";
const RTL = "rtl";
type Directions = typeof LTR | typeof RTL;
interface TitleOwnProps extends WithAs {
  readonly lvl?: typeof TITLE_LVL[number]
  readonly direction?: Directions;
}

const COMPONENT_KEY = "Title";

const Title = ({lvl = LVL2, direction = LTR, ...props}: TitleOwnProps): React.ReactElement => {
  const { as: Component = `h${lvl}`, children,...restProps } = props;
  return <Component {...restProps} dir={direction}>{children}</Component>;
};

Title.displayName = COMPONENT_KEY;

export type { TitleOwnProps };
export { COMPONENT_KEY };
export default Title;

