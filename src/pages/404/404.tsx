// #region Global Imports
import React from "react";
import { Link } from "gatsby";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types/common";
import * as styles from "./styles.module.css";
import { Layout, Title } from "~components";
import { TO_INDEX } from "~definitions/routes/path";
// #endregion Local Imports

type NotFoundPageOwnProps = WithAs

const COMPONENT_KEY = "NotFoundPage";

const NotFoundPage = (props: NotFoundPageOwnProps): React.ReactElement => (
  <Layout>
    <Title lvl={1}>
      Page not found
    </Title>
    <p className={styles.paragraph}>
      Sorry
      <span role="img" aria-label="Pensive emoji">
        😔
      </span>
      <Link to={TO_INDEX()}>Back to home page</Link>
    </p>
  </Layout>
);

NotFoundPage.displayName = COMPONENT_KEY;

export type { NotFoundPageOwnProps };
export { COMPONENT_KEY };
export default NotFoundPage;
