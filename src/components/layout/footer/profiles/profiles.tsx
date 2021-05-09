// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import type {Profiles as ProfilesI, WithAs, Icons } from "~types";
import {useSiteMetadata} from "~hooks";
import {Link, Icon} from "~components";
import {DEFAULT_TABINDEX, ICONS} from "~definitions";
import * as profilesStyles from "./styles.module.css";

// #endregion Local Imports

interface ProfilesOwnProps extends WithAs {
  readonly name?: string;
}

const COMPONENT_KEY = "Profiles";

const NEXT_CHAR = 1;
const capitalize = str => `${str.charAt().toUpperCase()}${str.slice(NEXT_CHAR)}`;
const DIMENSION_ICON = 24;

const getProfiles = (data: ProfilesI, icons: Icons = ICONS) => Object.keys(data).map(name => {
  const currentIconProps = icons[name.toUpperCase()];
  return <li key={name}>
    <Link
      href={data[name]}
      tabIndex={DEFAULT_TABINDEX}
      aria-label={`Visit my ${capitalize(name)}`}
      target={"_blank"}>
      <Icon
        width={DIMENSION_ICON}
        height={DIMENSION_ICON}
        viewBox={currentIconProps.viewBox}
      >
        <path d={currentIconProps.path}/>
      </Icon>
    </Link>
  </li>
});

const Profiles = (props: ProfilesOwnProps): React.ReactElement => {
  const {as: Component = "ul", ...restProps} = props;
  const {authorInfo} = useSiteMetadata();
  return <Component className={profilesStyles.profiles} {...restProps}>
    {getProfiles(authorInfo.profiles, ICONS)}
  </Component>;
};

Profiles.displayName = COMPONENT_KEY;

export type {ProfilesOwnProps};
export {COMPONENT_KEY};
export default Profiles;
