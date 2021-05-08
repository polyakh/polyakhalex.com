// #region Global Imports
import React from "react";
import { Link } from "gatsby";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types/common";
import { aboutMe } from "./styles.module.css";
import { Layout, Title } from "~components";
// #endregion Local Imports

type AboutMePageOwnProps = WithAs

const COMPONENT_KEY = "About-me";

const AboutMe = (props: AboutMePageOwnProps): React.ReactElement => (
  <Layout>
    <Title lvl={1}>
      AboutMe
    </Title>
  </Layout>
);

AboutMe.displayName = COMPONENT_KEY;

export type { AboutMePageOwnProps };
export { COMPONENT_KEY };
export default AboutMe;
