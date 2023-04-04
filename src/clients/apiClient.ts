export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export enum ApprovalStatus {
  Pending,
  Approved,
  Deleted,
}

export enum UserType {
  Member,
  Admin
}

export enum TeethType {
  Toothed,
  Baleen,
}

export enum TailType {
  Bifurcated,
  NonBifurcated,
}

export enum Size {
  Small0To5m,
  Medium5To10m,
  Large10To20m,
  VeryLargeOver20m,
}

export interface WhaleSpecies {
  id: number,
  imageUrl: string,
  name: string,
  tailType: TailType,
  teethType: TeethType,
  size: Size,
  colour: string,
  location: string,
  diet: string,
}

export interface User {
  id: number,
  username: string,
  userBio: string,
  profileImageUrl: string,
  userType: UserType
}

export interface WhaleSighting {
  id: number,
  dateOfSighting: string,
  locationLatitude: number,
  locationLongitude: number,
  photoImageURL: string,
  numberOfWhales: number,
  description: string;
  approvalStatus: ApprovalStatus,
  whaleSpecies: WhaleSpecies,
  user: User,
  likedBy: string[],
}

export interface NewUser {
  username: string;
  password: string;
  userBio: string;
  profileImageUrl: string;
  userType: number;
}

export interface NewSighting {
  dateOfSighting: Date;
  locationLatitude: number;
  locationLongitude: number;
  photoImageURL: string;
  numberOfWhales: number;
  description: string;
  whaleSpecies: string;
}

export interface NewLike {
  whaleSightingId: number;
}

export interface SpeciesSearch {
  tailType: number | null;
  size: number | null;
  colour: string | null;
}

export interface UserLeaderboardResponse{
  userName: string;
  numberOfWhaleSightings: number;
  likesReceived: number;
}

export interface WhaleSightingSearch {
  whaleSpecies: string | null;
  colour: string | null;
  tailType: number | null;
  whaleSize: number | null; 
  maxLatitude: number | null; 
  minLatitude: number | null; 
  maxLongitude: number | null; 
  minLongitude: number | null; 
}

export const checkBackendConnection = async (): Promise<boolean> => {
  let response: Response;
  try {
    response = await fetch(`${backendUrl}/test`);
  } catch {
    return false;
  }
  return response.ok;
}

export async function fetchSightingById(sightingId: number): Promise<WhaleSighting> {
  const response = await fetch(`${backendUrl}/sightings/${sightingId}`);
  if (!response.ok) {
    throw new Error(await response.json());
  }
  else {
    return await response.json();
  }
}

export async function createSighting(newSighting: NewSighting): Promise<Response> {
  const response = await fetch(`https://${backendUrl}/sightings/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newSighting),
  });

  if (!response.ok) {
    throw new Error(await response.json())
  } else {
    return response;
  }
}

export async function fetchLogin(encodedUsernamePassword: string): Promise<void> {
	const response = await fetch(`${backendUrl}/login`, {
		headers: {
			'Authorization': `Basic ${encodedUsernamePassword}`
		}
	});
	if (!response.ok) {
		throw new Error(JSON.stringify(await response.json()));
	}
}

export async function createNewUser(newUser: NewUser): Promise<Response> {
	const response = await fetch(`${backendUrl}/users/create`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(newUser),
	});
	if (!response.ok) {
		throw new Error(await response.json());
	}
	else {
		return response;
	}
}

export async function fetchSpeciesQuery(speciesSearch: SpeciesSearch): Promise<WhaleSpecies[]> {
  const tailType = speciesSearch.tailType == null ? "" : "speciesSearch.tailType";
  const colour = speciesSearch.colour == null ? "" : "speciesSearch.colour";
  const size = speciesSearch.size == null ? "" : "speciesSearch.size";
  const response = await fetch(`${backendUrl}/species?TailType=${tailType}&Size=${size}&Colour=${colour}`);
  if (!response.ok) {
    throw new Error(await response.json());
  } else {
    return await response.json();
  }
}

export async function deleteLike(likeId: number): Promise<Response> {
  const response = await fetch(`${backendUrl}/likes/delete/${likeId}`);
  if (!response.ok) {
    throw new Error(await response.json());
  }
  else {
    return response;
  }
}

export async function fetchFilterQuery(whaleSightingSearch: WhaleSightingSearch): Promise<WhaleSighting[]> {
  const whaleSpecies = whaleSightingSearch.whaleSpecies == null ? "" : "whaleSightingSearch.size";
  const colour = whaleSightingSearch.colour == null ? "" : "whaleSightingSearch.colour";
  const tailType = whaleSightingSearch.tailType == null ? "" : "whaleSightingSearch.tailType";
  const size = whaleSightingSearch.whaleSize == null ? "" : "whaleSightingSearch.size";
  const maxLatitude = whaleSightingSearch.maxLatitude == null ? "" : "whaleSightingSearch.size";
  const minLatitude = whaleSightingSearch.minLatitude == null ? "" : "whaleSightingSearch.size";
  const maxLongitude = whaleSightingSearch.maxLongitude == null ? "" : "whaleSightingSearch.size";
  const minLongitude = whaleSightingSearch.minLongitude == null ? "" : "whaleSightingSearch.size";
  
  const response = await fetch(`${backendUrl}/sightings/search?WhaleSpecies=${whaleSpecies}&Colour=${colour}&TailType=${tailType}&Size=${size}&MaxLatitude=${maxLatitude}&MinLatitude=${minLatitude}&MaxLongitude=${maxLongitude}&MinLongitude=${minLongitude}`);
  if (!response.ok) {
    throw new Error(await response.json());
  } else {
    return await response.json();
  }
}
export async function fetchAllApprovedSightings(): Promise<WhaleSighting[]> {
  const response = await fetch(`${backendUrl}/sightings`);
  if (!response.ok) {
    throw new Error(await response.json());
  }
  else {
    return await response.json();
  }
}

export async function getPendingSightings(): Promise<WhaleSighting[]> {
  const response = await fetch(`${backendUrl}/sightings/pending`);
  if (!response.ok) {
    throw new Error(await response.json());
  }
  else {
    return await response.json();
  }
}

export async function createLike(newLike: NewLike): Promise<Response> {
  const response = await fetch(`${backendUrl}/likes/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newLike),
  });
  if (!response.ok) {
    throw new Error(await response.json());
  }
  else {
    return await response.json();
  }
}

export async function fetchAllWhaleSpecies(): Promise<string[]> {
  const response = await fetch(`${backendUrl}/species/species-list`);
  if (!response.ok) {
    throw new Error(await response.json());
  }
  else {
    return await response.json();
  }
}

export async function fetchLeaderboard(): Promise<UserLeaderboardResponse[]> {
  const response = await fetch(`${backendUrl}/users/leaderboard`);
  if (!response.ok) {
    throw new Error(await response.json());
  }
  else {
    return await response.json();
  }
}

export function fetchIsAdmin() : boolean {
  return true;
}