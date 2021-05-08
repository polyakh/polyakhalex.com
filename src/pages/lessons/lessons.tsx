// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types/common";
import { Layout, Title } from "~components";
import { lessons as lessonsStyles } from "./styles.module.css";
// #endregion Local Imports

type LessonsPageOwnProps = WithAs

const COMPONENT_KEY = "Lessons";

const Lessons = (props: LessonsPageOwnProps): React.ReactElement => (
  <Layout>
    <Title lvl={1}>
      Lessons
    </Title>
  </Layout>
);

Lessons.displayName = COMPONENT_KEY;

export type { LessonsPageOwnProps };
export { COMPONENT_KEY };
export default Lessons;
