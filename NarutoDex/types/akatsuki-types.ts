import type { Debut, PersonalBase, Rank, VoiceActors } from "./character-types";

export interface AkatsukiMember {
  id: number;
  name: string;
  images: string[];
  debut?: Debut;
  family?: Record<string, string>;
  jutsu?: string[];
  natureType?: string[];
  personal: PersonalBase;
  rank?: Rank;
  tools?: string[];
  uniqueTraits?: string[];
  voiceActors?: VoiceActors;
}

export interface AkatsukiResponse {
  akatsuki: AkatsukiMember[];
  currentPage: number;
  pageSize: number;
  total: number;
}
