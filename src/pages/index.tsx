// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Layout, Title } from "~components";
// #endregion Local Imports

// https://sourcegraph.com/github.com/gatsbyjs/gatsby@master/-/blob/examples/using-i18n/src/pages/index.js
const IndexPage = () => {
  // const { hello, subline } = useTranslations();
  return (
    <Layout>
      <Title lvl={1}>
        IndexPage
      </Title>
    </Layout>
  )
};


export default IndexPage;
