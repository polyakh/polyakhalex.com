//region Local Imports
import type { Description, Title } from "./common";
//endregion

interface Profiles {
  twitter: string;
  linkedin: string;
  github: string;
  instagram: string;
  telegram: string;
}
interface AuthorInfo extends Description, Title {
  email: string;
  profiles: Profiles;
}

interface AuthorStats {
  twitterFollowersCount: string;
}

interface SiteInfo extends Description {
  description: string;
  metaTitle: string;
  repositoryUrl: string;
}

export type {
  Profiles,
  AuthorInfo,
  AuthorStats,
  SiteInfo,
}
