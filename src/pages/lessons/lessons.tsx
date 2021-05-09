// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import type { WithAs } from "~types";
import { Layout, Title } from "~components";
import { LVL1 } from "~definitions";
// #endregion Local Imports

type LessonsPageOwnProps = WithAs

const COMPONENT_KEY = "Lessons";

const Lessons = (props: LessonsPageOwnProps): React.ReactElement => (
  <Layout>
    <Title lvl={LVL1}>
      Lessons
    </Title>
  </Layout>
);

Lessons.displayName = COMPONENT_KEY;

export type { LessonsPageOwnProps };
export { COMPONENT_KEY };
export default Lessons;
