// #region Global Imports
import React from "react";

// #endregion Global Imports

interface CommonProps {
  className?: string;
  children?: React.ReactNode;
}

interface WithAs<As extends React.ElementType | string = React.ElementType>
  extends CommonProps {
  as?: As;
}

interface CommonProps {
  className?: string;
  children?: React.ReactNode;
}

interface Title {
  readonly title: string;
}

interface Description {
  readonly description: string;
}

interface Disabled {
  readonly disabled: string;
}

interface Style {
  readonly style: React.CSSProperties;
}

interface className {
  readonly className: string;
}

interface Src {
  readonly src: string;
}

interface SubTitle {
  readonly subTitle: string;
}

interface Value {
  readonly value: string;
}

interface Loading {
  readonly isLoading: string;
}

interface Checked {
  readonly isChecked: string;
}

interface Datetime {
  readonly datetime: string | React.ReactNode;
}

interface Tabindex {
  readonly tabIndex?: number;
}


export type {
  CommonProps,
  WithAs,
  Title,
  Description,
  Disabled,
  Style,
  className,
  Src,
  SubTitle,
  Value,
  Loading,
  Checked,
  Datetime,
  Tabindex,
}
