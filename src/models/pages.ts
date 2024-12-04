import { SBEnumControl } from "../utils/storybookUtils";

export const Pages = {
  Home: "/",
  About: "/about",
  Projects: {
    Index: "/projects",
    CardRegistry: "/projects/cardregistry",
    FundRaising: "/projects/fundraising",
    EventManager: "/projects/eventmanager",
    KiltaUnions: "/projects/kiltaunions",
    KTSms: "/projects/ktsms",
    KTVueComponents: "/projects/ktvuecomponents",
    MyCats: "/projects/mycats",
    Nogelainet: "/projects/nogelainet",
    Samivaan: "/projects/samivaan",
    YTJ: "/projects/ytj",
  } as const,
  Contact: "/contact",
} as const;

export const PagesSBArgs = SBEnumControl(Pages);
