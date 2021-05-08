// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Profiles as ProfilesI} from "~types";
import {useSiteMetadata} from "~hooks";
import {Link} from "~components";
// #endregion Local Imports

interface ProfilesOwnProps {
  readonly name?: string;
}

const COMPONENT_KEY = "Profiles";

const NEXT_CHAR = 1;
const capitalize = str => `${str.charAt().toUpperCase()}${str.slice(NEXT_CHAR)}`;

const getProfiles = (data: ProfilesI) => Object.keys(data).map(name => <li key={name}>
  <Link href={data[name]} aria-label={`Visit my ${capitalize(name)}`} target={"_blank"}>icon</Link>
</li>);

const Profiles = (props: ProfilesOwnProps): React.ReactElement => {
  const {as: Component = "ul", ...restProps} = props;
  const {authorInfo} = useSiteMetadata();
  return <Component {...restProps}>{getProfiles(authorInfo.profiles)}</Component>;
};

Profiles.displayName = COMPONENT_KEY;

export type {ProfilesOwnProps};
export {COMPONENT_KEY};
export default Profiles;
