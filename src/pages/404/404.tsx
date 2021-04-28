// #region Global Imports
import React from "react";
import { Link } from "gatsby";
// #endregion Global Imports

// #region Local Imports
import { WithAs } from "~types/common";
import * as styles from "./styles.module.css";
// #endregion Local Imports

type NotFoundPageOwnProps = WithAs

const COMPONENT_KEY = "NotFoundPage";

const NotFoundPage = (props: NotFoundPageOwnProps): React.ReactElement => (
  <main className={styles.page}>
    <title>404 - Page Not Found</title>
    <h1 className={styles.heading}>Page not found</h1>
    <p className={styles.paragraph}>
      Sorry
      <span role="img" aria-label="Pensive emoji">
        😔
      </span>
      <Link to="/">Back to home page</Link>
    </p>
  </main>
);

NotFoundPage.displayName = COMPONENT_KEY;

export { NotFoundPageOwnProps, COMPONENT_KEY };
export default NotFoundPage;
