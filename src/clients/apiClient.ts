
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
  ListOfLikers: string[]
}

export interface NewUser {
  username: string;
  password: string;
  userBio: string;
  profileImageUrl: string;
}

export interface NewSighting{
    dateOfSighting: Date;
    locationLatitude: number;
    locationLongitude: number;
    photoImageURL: string;
    numberOfWhales: number;
    description: string;
    whaleSpecies: string;
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
    }else{
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

export interface SpeciesSearch {
  tailType: number;
  size: number;
  colour: string;
}

export async function fetchSpeciesQuery(speciesSearch: SpeciesSearch): Promise<Response> {
  const response = await fetch(`${backendUrl}/species?TailType=${speciesSearch.tailType}&Size=${speciesSearch.size}&Colour=${speciesSearch.colour}`);
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

export async function isLikedByUser(sightingId: number): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    if (true) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

// export const getWhaleSightings = async (): Promise<NewSighting[]> => {
//   let response: Response;
//   response = await fetch(`https://${backendUrl}/sightings/`);
//   return response;
// }

export async function getWhaleSightings(): Promise<WhaleSighting[]> {
  return new Promise<WhaleSighting[]>((resolve, reject) => {
    const sightings = newSightings;
    if (sightings) {
      resolve(sightings);
    } else {
      reject("Failed to get sighting data");
    }
  });
}

const newSightings: WhaleSighting[] = [
  {
    Id: 0,
    DateOfSighting: "3rd June 2022",
    User:  {Id: 1,
    Username: "Paul354",
    UserBio: "Cool dude",
    ProfileImageUrl: "hello",
    UserType: 0},
    LocationLatitude: 51.5074,
    LocationLongitude: -0.1278,
    PhotoImageUrl: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    NumberOfWhales: 2,
    ApprovalStatus: 1,
    WhaleSpecies: {
      Id: 1,
      ImageUrl: "string",
      Name: "string",
      TailType: 1,
      TeethType: 1,
      WhaleSize: 0,
      Colour: "blue",
      Location: "Canada",
      Diet: "Seals",
    },
    ListOfLikers: ["username"]
  },
  {
    Id: 1,
    DateOfSighting: "3rd June 2022",
    User:  {Id: 2,
    Username: "Kate303",
    UserBio: "Cool Kate",
    ProfileImageUrl: "hello",
    UserType: 0},
    LocationLatitude: 51.5074,
    LocationLongitude: -0.1278,
    PhotoImageUrl: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    NumberOfWhales: 2,
    ApprovalStatus: 1,
    WhaleSpecies: {
      Id: 1,
      ImageUrl: "string",
      Name: "string",
      TailType: 1,
      TeethType: 1,
      WhaleSize: 0,
      Colour: "blue",
      Location: "Canada",
      Diet: "Seals",
    },
    ListOfLikers: ["paul", "username"]
  },
  {
    Id: 2,
    DateOfSighting: "3rd June 2022",
    User:  {Id: 3,
    Username: "Ricky424",
    UserBio: "Cool Kate",
    ProfileImageUrl: "hello",
    UserType: 0},
    LocationLatitude: 51.5074,
    LocationLongitude: -0.1278,
    PhotoImageUrl: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    NumberOfWhales: 2,
    ApprovalStatus: 1,
    WhaleSpecies: {
      Id: 1,
      ImageUrl: "string",
      Name: "string",
      TailType: 1,
      TeethType: 1,
      WhaleSize: 0,
      Colour: "blue",
      Location: "Canada",
      Diet: "Seals",
    },
    ListOfLikers: ["paul"]
  },
];
