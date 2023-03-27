
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
