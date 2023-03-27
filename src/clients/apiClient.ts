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
  Id: number,
  ImageUrl: string,
  Name: string,
  TailType: TailType,
  TeethType: TeethType,
  WhaleSize: Size,
  Colour: string,
  Location: string,
  Diet: string,

}

export interface User {
  Id: number,
  Username: string,
  UserBio: string,
  ProfileImageUrl: string,
  UserType: UserType
  //  public string? HashedPassword { get; set; }
  // List<WhaleSighting> WhaleSighting { get; set; }
}

export interface WhaleSighting {
  Id: number,
  DateOfSighting: string,
  LocationLatitude: number,
  LocationLongitude: number,
  PhotoImageUrl: string,
  NumberOfWhales: number,
  ApprovalStatus: ApprovalStatus,
  WhaleSpecies: WhaleSpecies,
  User: User,
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

export async function fetchSighting(sightingId: string | number): Promise<WhaleSighting> {
  const response = await fetch(`https://localhost:5001/sightings/${sightingId}`);
  return await response.json();
}