// https://github.com/microsoft/TypeScript/issues/24220#issuecomment-720167232
type IconNames =
  | "TWITTER"
  | "TELEGRAM"
  | "GITHUB"
  | "EMAIL"
  | "LINKEDIN"


interface Icon {
  readonly path: string
  readonly viewBox: string
}

type Icons = {
  readonly [prop in IconNames]: Icon;
};

export type { Icons, Icon, IconNames }
