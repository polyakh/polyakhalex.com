// #region Global Imports
import React from "react";
import { Link } from "gatsby";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types/common";
import { lessons as lessonsStyles } from "./styles.module.css";
// #endregion Local Imports

type LessonsPageOwnProps = WithAs

const COMPONENT_KEY = "Lessons";

const Lessons = (props: LessonsPageOwnProps): React.ReactElement => (
  <h2 className={lessonsStyles}>
    Lessons
  </h2>
);

Lessons.displayName = COMPONENT_KEY;

export { LessonsPageOwnProps, COMPONENT_KEY };
export default Lessons;
