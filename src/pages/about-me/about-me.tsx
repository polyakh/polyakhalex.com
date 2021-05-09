// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import type { WithAs } from "~types";
import { Layout, Title } from "~components";
import { LVL1 } from "~definitions";
// #endregion Local Imports

type AboutMePageOwnProps = WithAs

const COMPONENT_KEY = "About-me";

const AboutMe = (props: AboutMePageOwnProps): React.ReactElement => (
  <Layout>
    <Title lvl={LVL1}>
      AboutMe
    </Title>
  </Layout>
);

AboutMe.displayName = COMPONENT_KEY;

export type { AboutMePageOwnProps };
export { COMPONENT_KEY };
export default AboutMe;
