import type { EraRecord, OneOrMany } from "./utility-types";

export interface Debut {
  appearsIn: string;
  anime?: string;
  manga?: string;
  game?: string;
  novel?: string;
  movie?: string;
  ova?: string;
}

export interface PersonalBase {
  sex?: string;
  species?: string;
  status?: string;
  birthdate?: string;
  age?: EraRecord;
  height?: EraRecord;
  weight?: EraRecord;
  bloodType?: string;
  kekkeiGenkai?: OneOrMany<string>;
  kekkeiMōra?: string;
  classification?: OneOrMany<string>;
  tailedBeast?: string;
  jinchūriki?: string[];
  occupation?: OneOrMany<string>;
  affiliation?: OneOrMany<string>;
  team?: OneOrMany<string>;
  partner?: OneOrMany<string>;
  clan?: OneOrMany<string>;
  titles?: string[];
}

export interface Rank {
  ninjaRank?: EraRecord;
  ninjaRegistration?: string;
}

export interface VoiceActors {
  japanese?: OneOrMany<string>;
  english?: OneOrMany<string>;
}

export interface Character {
  id: number;
  name: string;
  images: string[];
  debut: Debut;
  family: Record<string, string>;
  personal: PersonalBase;
  voiceActors: VoiceActors;
  jutsu?: string[];
  natureType?: string[];
  rank?: Rank;
  tools?: string[];
  uniqueTraits?: string[];
}

export interface CharactersResponse {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  total: number;
}
