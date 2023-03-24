export const backendUrl = import.meta.env.VITE_BACKEND_URL;

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

export interface Login {
  id: number;
  username: string;
  isLoggedIn: boolean;
}

export async function fetchLogin(encodedUsernamePassword: string): Promise<Login> {
  const response = await fetch(`https://localhost:7127/login`, {
      headers: {
          'Authorization': `Basic ${encodedUsernamePassword}`
      }
  });
  return await response.json();
}