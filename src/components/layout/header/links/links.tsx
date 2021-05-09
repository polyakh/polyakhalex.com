// #region Global Imports
import React from "react";
import {Link as GatsbyLink} from "gatsby";
// #endregion Global Imports

// #region Local Imports
import {WithAs} from "~types";
import { TO_LESSONS, TO_ABOUT_ME, TO_INDEX, LVL4 } from "~definitions";
import {Image, Title, } from "~components";
import * as linksStyles from "./styles.module.css";
import polyakhLogo from "~images/polyakh.jpg";
import Item from "./item";
// #endregion Local Imports

//region Types
export type Link = { path: string, title: string };

interface LinksOwnProps extends WithAs {
  readonly links?: Link[]
  readonly logoPath?: string;
  role?: string;
}
//endregion

const COMPONENT_KEY = "Links";
const DEFAULT_LINKS: Link[] = [
  {path: TO_LESSONS(), title: "Lessons"},
  {path: TO_ABOUT_ME(), title: "About me"},
];
const DEFAULT_LOGO_PATH = polyakhLogo;

const defaultImgDimension = 40;
const link = ({path, title}: Link) => <Item key={title} path={path} title={title}/>;
const Links = (props: LinksOwnProps): React.ReactElement => {
  const {
    as: Component = "nav",
    links = DEFAULT_LINKS,
    logoPath = DEFAULT_LOGO_PATH,
    ...restProps
  } = props;
  const getLink = () => links;
  return <Component {...restProps}>
    <Title lvl={LVL4}>
      <GatsbyLink area-lable={"Polyakh Blog, Back to homepage"} to={TO_INDEX()}>
        <Image width={defaultImgDimension} height={defaultImgDimension} src={logoPath} alt='logo'/>
      </GatsbyLink>
    </Title>
    <ul className={linksStyles.nav}>{getLink().map(link)}</ul>
  </Component>;
};

Links.displayName = COMPONENT_KEY;

export type { LinksOwnProps };
export { COMPONENT_KEY };
export default Links;
// https://www.labnol.org/code/gatsby-images-200607
