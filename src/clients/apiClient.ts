export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export interface NewUser {
  username: string;
  password: string;
  userBio: string;
  profileImageUrl: string;
}

export interface NewSighting{
    Id: number;
    dateOfSighting: Date;
    username: string;
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

// export const getWhaleSightings = async (): Promise<NewSighting[]> => {
//   let response: Response;
//   response = await fetch(`https://${backendUrl}/sightings/`);
//   return response;
// }

export async function getWhaleSightings(): Promise<NewSighting[]> {
  return new Promise<NewSighting[]>((resolve, reject) => {
    const sightings = newSightings;
    if (sightings) {
      resolve(sightings);
    } else {
      reject("Failed to get sighting data");
    }
  });
}

const newSightings: NewSighting[] = [
  {
    Id: 0,
    dateOfSighting: new Date('2022-01-01T00:00:00Z'),
    username: 'Paul34',
    locationLatitude: 51.5074,
    locationLongitude: -0.1278,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 2,
    description: 'Sighted two humpback whales near the coast of London.',
    whaleSpecies: 'Humpback Whale',
  },
  {
    Id: 1,
    dateOfSighting: new Date('2022-02-15T10:30:00Z'),
    username: 'Kirsty454',
    locationLatitude: 37.7749,
    locationLongitude: -122.4194,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 1,
    description: 'Sighted a gray whale swimming alone in San Francisco Bay.',
    whaleSpecies: 'Gray Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 1,
    dateOfSighting: new Date('2022-02-15T10:30:00Z'),
    username: 'Kirsty454',
    locationLatitude: 37.7749,
    locationLongitude: -122.4194,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 1,
    description: 'Sighted a gray whale swimming alone in San Francisco Bay.',
    whaleSpecies: 'Gray Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 1,
    dateOfSighting: new Date('2022-02-15T10:30:00Z'),
    username: 'Kirsty454',
    locationLatitude: 37.7749,
    locationLongitude: -122.4194,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 1,
    description: 'Sighted a gray whale swimming alone in San Francisco Bay.',
    whaleSpecies: 'Gray Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 1,
    dateOfSighting: new Date('2022-02-15T10:30:00Z'),
    username: 'Kirsty454',
    locationLatitude: 37.7749,
    locationLongitude: -122.4194,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 1,
    description: 'Sighted a gray whale swimming alone in San Francisco Bay.',
    whaleSpecies: 'Gray Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
  {
    Id: 2,
    dateOfSighting: new Date('2022-03-22T14:00:00Z'),
    username: 'Daniella312',
    locationLatitude: -33.8688,
    locationLongitude: 151.2093,
    photoImageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg',
    numberOfWhales: 5,
    description: 'Sighted a pod of five killer whales hunting near Sydney.',
    whaleSpecies: 'Killer Whale',
  },
];