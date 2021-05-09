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
          name
          profiles {
            github
            linkedin
            twitter
            instagram
            telegram
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

