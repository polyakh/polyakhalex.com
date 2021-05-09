// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import type { WithAs } from "~types";
import * as styles from "./styles.module.css";
import { Header, Footer } from "./index";
import { SEO  } from "~components";
// #endregion Local Imports

type LayoutOwnProps = WithAs
const COMPONENT_KEY = "Layout";

const Layout = (props: LayoutOwnProps): React.ReactElement => {
  const {as: Component = "section", children } = props;
  return <Component className={styles.wrapper}>
      <SEO />
      <Header/>
      <main className={styles.content}>{children}</main>
      <Footer/>
    </Component>
}

Layout.displayName = COMPONENT_KEY;

export type { LayoutOwnProps };
export { COMPONENT_KEY };

export default Layout;
