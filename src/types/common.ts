// #region Global Imports
import React from "react";
// #endregion Global Imports

export interface CommonProps {
  className?: string;
  children?: React.ReactNode;
}

export interface WithAs<As extends React.ElementType | string = React.ElementType>
  extends CommonProps {
  as?: As;
}

export interface Description {
  readonly description: string;
}
export interface Disabled {
  readonly disabled: string;
}
export interface Icon {
  readonly icon: string;
}
export interface Style {
  readonly style: React.CSSProperties;
}
export interface className {
  readonly className: string;
}
export interface Src {
  readonly src: string;
}
export interface Title {
  readonly title: string;
}
export interface subTitle {
  readonly SubTitle: string;
}
export interface Value {
  readonly value: string;
}
export interface Loading {
  readonly isLoading: string;
}
export interface Checked {
  readonly isChecked: string;
}
export interface Datetime {
  readonly datetime: string | React.ReactNode;
}


