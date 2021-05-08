//region Local Imports
import { Description, Title } from "./common";
//endregion

export interface Profiles {
  twitter: string;
  linkedin: string;
  github: string;
}
export interface AuthorInfo extends Description, Title {
  email: string;
  profiles: Profiles;
}

export interface AuthorStats {
  twitterFollowersCount: string;
}

export interface SiteInfo extends Description {
  description: string;
  metaTitle: string;
  repositoryUrl: string;
}
