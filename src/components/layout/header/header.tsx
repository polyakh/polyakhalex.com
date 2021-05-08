// #region Global Imports
import React from "react";
import { useTranslation } from "react-i18next";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types/common";
import { Links } from "~components";
import {graphql, useStaticQuery} from "gatsby";
// #endregion Local Imports

type HeaderOwnProps = WithAs

const COMPONENT_KEY = "Header";

const Header = (props: HeaderOwnProps): React.ReactElement => {
  const { as: Component = "header", ...restProps} = props;
  const { t } = useTranslation();
  return <Component {...restProps}>
    <Links/>{t("heading")}
  </Component>;
};



Header.displayName = COMPONENT_KEY;

export type { HeaderOwnProps };
export { COMPONENT_KEY };

export default Header;
