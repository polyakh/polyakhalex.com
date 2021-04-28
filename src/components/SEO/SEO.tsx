// #region Global Imports
import React from "react";
import { Helmet } from "react-helmet";
// #endregion Global Imports

// #region Local Imports
// #endregion Local Imports

interface SEOProps {
  title: string;
  description: string;
  image: string;
  isArticle: boolean;
}

const COMPONENT_KEY = "SEO";

const SEO = (props: SEOProps): React.ReactElement => {
  const { title, description, image } = props;

  return <Helmet title={"test"} titleTemplate={"test"}>
  <meta name="description" content={"test"} />
  </Helmet>;
};

SEO.displayName = COMPONENT_KEY;

export { SEOProps, COMPONENT_KEY };
export default SEO;
