
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
  whaleSize: Size,
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
}

export interface NewUser {
  username: string;
  password: string;
  userBio: string;
  profileImageUrl: string;
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

export const checkBackendConnection = async (): Promise<boolean> => {
  let response: Response;
  try {
    response = await fetch(`${backendUrl}/test`);
  } catch {
    return false;
  }
  return response.ok;
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
  let response;
  if (speciesSearch.tailType == null && speciesSearch.colour == null && speciesSearch.colour == null) {
    response = await fetch(`${backendUrl}/species?TailType=&Size=&Colour=`);
  } else {
    response = await fetch(`${backendUrl}/species?TailType=${speciesSearch.tailType}&Size=${speciesSearch.size}&Colour=${speciesSearch.colour}`);
  }
  if (!response.ok) {
    throw new Error(await response.json());
  } else {
    return await response.json();
  }
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
