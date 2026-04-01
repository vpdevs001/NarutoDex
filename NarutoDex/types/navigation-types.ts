import type { Character } from "./character-types";
import type { AkatsukiMember } from "./akatsuki-types";
import type { KaraMember } from "./kara-types";

export type RootStackParamList = {
  Intro: undefined;
  Home: undefined;
  Details: { character: Character | AkatsukiMember | KaraMember };
  Akatsuki: undefined;
  Kara: undefined;
  TailedBeasts: undefined;
};

export type RootDrawerParamList = {
  Characters: undefined;
  Villages: undefined;
  Clans: undefined;
  Akatsuki: undefined;
  Kara: undefined;
  TailedBeasts: undefined;
};
