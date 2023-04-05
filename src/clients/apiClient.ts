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

export interface TripPlannerRequest {
  latitude: number;
  longitude: number;
}

export interface TripPlannerResponse {
  map: any;
  id: number;
  dateOfSighting: Date;
  locationLatitude: number;
  locationLongitude: number;
  photoImageURL: string;
  distance: number;
  numberOfWhales: number;
  whaleSpecies: WhaleSpecies;
}

export interface UserLeaderboardResponse {
  userName: string;
  numberOfWhaleSightings: number;
  likesReceived: number;
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

export async function createSighting(newSighting: NewSighting, encodedUsernamePassword: string): Promise<Response> {
  const response = await fetch(`${backendUrl}/sightings/submit`, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${encodedUsernamePassword}`,
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

export async function fetchIsAdmin(encodedUsernamePassword: string): Promise<boolean> {
  const response = await fetch(`${backendUrl}/login/admin`, {
    headers: {
      'Authorization': `Basic ${encodedUsernamePassword}`
    }
  });
  return response.ok;
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

export async function getLatLonFromLocation(location: string): Promise<TripPlannerRequest> {
  const response = await fetch(`https://geocode.maps.co/search?q=${location}`);
  if (!response.ok) {
    throw new Error(await response.json());
  }
  else {
    const responseJson = await response.json();
    let latlon: TripPlannerRequest = { latitude: responseJson[0].lat, longitude: responseJson[0].lon };
    return (latlon);
  }
}

export async function getTopFiveSightingsByLocation(latlon: TripPlannerRequest): Promise<TripPlannerResponse[]> {
  const response = await fetch(`${backendUrl}/plan-trip?lat=${latlon.latitude}&lon=${latlon.longitude}`)
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

export async function approveSighting(sightingId: number, encodedUsernamePassword: string): Promise<Response> {

  const response = await fetch(`${backendUrl}/sightings/approve/${sightingId}`, {
    method: "PATCH",
    headers: {
      "Authorization": `Basic ${encodedUsernamePassword}`,
      //"Content-Type": "application/json"
    },
  });
  if (!response.ok) {
    throw new Error(await response.json())
  } else {
    return (response);
  }
}

export async function rejectSighting(sightingId: number, encodedUsernamePassword: string): Promise<Response> {
  const response = await fetch(`${backendUrl}/sightings/reject/${sightingId}`, {
    method: "PATCH",
    headers: {
      "Authorization": `Basic ${encodedUsernamePassword}`,
      "Content-Type": "application/json"
    },
  });
  if (!response.ok) {
    throw new Error(await response.json());
  }
  else {
    return await (response);
  }
}
