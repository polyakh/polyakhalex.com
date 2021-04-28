﻿// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import "~styles/core.css";
import { WithAs } from "~types";
import * as styles from "./styles.module.css";
import { Header, Footer } from "./index";
// #endregion Local Imports

type LayoutOwnProps = WithAs
const COMPONENT_KEY = "Layout";

const Layout = (props: LayoutOwnProps): React.ReactElement => {
  const {as: Component = "section", children } = props;
  return <Component className={styles.wrapper}>
      <Header/>
      <main className={styles.content}>{children}</main>
      <Footer/>
    </Component>
}

Layout.displayName = COMPONENT_KEY;

export { LayoutOwnProps, COMPONENT_KEY };
export default Layout;