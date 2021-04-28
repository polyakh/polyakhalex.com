// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types/common";
// #endregion Local Imports

const tupleNum = <T extends number[]>(...args: T) => args ;
const LVL1 = 1;
const LVL2 = 2;
const LVL3 = 3;
const LVL4 = 4;
const TITLE_LVL = tupleNum(LVL1, LVL2, LVL3, LVL4);

const LTR = "ltr";
const RTL = "rtl";
type Directions = typeof LTR | typeof RTL;
interface TypographyOwnProps extends WithAs {
  readonly lvl?: typeof TITLE_LVL[number]
  readonly direction?: Directions;
}

const COMPONENT_KEY = "Title";

const Title = ({lvl = LVL2, direction = LTR, ...props}: TypographyOwnProps): React.ReactElement => {
  const { as: Component = `h${lvl}`, children,...restProps } = props;
  return <Component {...restProps} dir={direction}>{children}</Component>;
};

Title.displayName = COMPONENT_KEY;

export { TypographyOwnProps, COMPONENT_KEY };
export default Title;

