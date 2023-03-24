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