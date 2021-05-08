// #region Global Imports
import React from "react";
import {Helmet} from "react-helmet";
// #endregion Global Imports

// #region Local Imports
import {defaultLng} from "~libs";
import {useSiteMetadata} from "~hooks";

// #endregion Local Imports

interface SEOOwnProps {
  lang?: string;
}

const COMPONENT_KEY = "SEO";

const SEO = (props: SEOOwnProps): React.ReactElement => {
  const {lang = defaultLng,} = props;
  const { siteInfo} = useSiteMetadata();

  return <Helmet>
    <html lang={lang}/>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
    <title>{siteInfo.metaTitle}</title>
    <meta name="description" content={siteInfo.metaDescription} />
  </Helmet>;
};

SEO.displayName = COMPONENT_KEY;

export type {SEOOwnProps};
export {COMPONENT_KEY};

export default SEO;
