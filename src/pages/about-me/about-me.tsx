// #region Global Imports
import React from "react";
import { Link } from "gatsby";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types/common";
import { aboutMe } from "./styles.module.css";
// #endregion Local Imports

type AboutMePageOwnProps = WithAs

const COMPONENT_KEY = "About-me";

const AboutMe = (props: AboutMePageOwnProps): React.ReactElement => (
  <h2 className={aboutMe}>
    AboutMe
  </h2>
);

AboutMe.displayName = COMPONENT_KEY;

export { AboutMePageOwnProps, COMPONENT_KEY };
export default AboutMe;
