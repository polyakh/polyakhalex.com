import {useStaticQuery, graphql} from "gatsby";


const SITE_META_DATA = graphql`
  query SiteMetaData {
    site {
      siteMetadata {
        siteInfo {
          metaTitle
          metaDescription
        }
        authorInfo {
          profiles {
            github
            linkedin
            twitter
          }
        }
      }
    }
  }
`;

export const useSiteMetadata = () => {
  const {site} = useStaticQuery(SITE_META_DATA);
  return site.siteMetadata;
};

