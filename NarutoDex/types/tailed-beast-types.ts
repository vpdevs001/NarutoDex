import type { Debut, PersonalBase, VoiceActors } from "./character-types";

export interface TailedBeastPersonal extends PersonalBase {
  jinchūriki?: string[];
}

export interface TailedBeast {
  id: number;
  name: string;
  images: string[];
  debut?: Debut;
  family?: Record<string, string>;
  jutsu?: string[];
  natureType?: string[];
  personal: TailedBeastPersonal;
  tools?: string[];
  uniqueTraits?: string[];
  voiceActors?: VoiceActors;
}

export interface TailedBeastsResponse {
  "tailed-beasts": TailedBeast[];
  currentPage: number;
  pageSize: number;
  total: number;
}
