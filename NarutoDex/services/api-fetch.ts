import axios from "axios";

import type { CharactersResponse } from "../types/character-types";
import type { ClansResponse } from "../types/clan-types";
import type { VillagesResponse } from "../types/village-types";
import type { KekkeiGenkaiResponse } from "../types/kekkie-genkai-types";
import type { TailedBeastsResponse } from "../types/tailed-beast-types";
import type { TeamsResponse } from "../types/team-types";
import type { AkatsukiResponse } from "../types/akatsuki-types";
import type { KaraResponse } from "../types/kara-types";

const BASE_URL: string = "https://dattebayo-api.onrender.com";

type EndpointResponseMap = {
  characters: CharactersResponse;
  clans: ClansResponse;
  villages: VillagesResponse;
  "kekkei-genkai": KekkeiGenkaiResponse;
  "tailed-beasts": TailedBeastsResponse;
  teams: TeamsResponse;
  akatsuki: AkatsukiResponse;
  kara: KaraResponse;
};

export const getData = async <T extends keyof EndpointResponseMap>(
  endPoint: T,
  params?: { page?: number; limit?: number; name?: string }
): Promise<EndpointResponseMap[T]> => {
  try {
    const response = await axios.get(`${BASE_URL}/${endPoint}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getDataById = async (
  endPoint: string,
  id: string
): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/${endPoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};