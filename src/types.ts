export type Localized<T = string> = {
  fi?: T;
  en?: T;
};

export type Project = {
  key: string;
  description: Localized;
  name: Localized;
  employer?: string;
  order?: number;
};

export type ActiveProject = null | {
  nr: string;
  project: Project;
  pos: DOMRect;
};

export type SocialMedia = {
  key: string;
  name: string;
  url: string;
  username: string;
};
