
export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const checkBackendConnection = async (): Promise<boolean> => {
  let response: Response;
  try {
    response = await fetch(`${backendUrl}/test`);
  } catch {
    return false;
  }
  
  return response.ok;


}

export async function fetchSpeciesQuery(tailType: number, size: number, colour: string ) {
  const response = await fetch(`https://localhost:7127/species?TailType=${tailType}&Size=${size}&Colour=${colour}`);
  return await response.json();
}
