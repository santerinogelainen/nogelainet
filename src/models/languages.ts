import { SBEnumControl } from "../utils/storybookUtils";

export const Languages = {
  Fi: "fi",
  En: "en",
} as const;

export type LanguageType = (typeof Languages)[keyof typeof Languages];

export const LanguagesSBArgs = SBEnumControl(Languages);
