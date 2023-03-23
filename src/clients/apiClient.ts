export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export interface NewUser {
  Username: string;
  Password: string;
  UserBio: string;
  profileImageUrl: string;
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

export async function createNewUser(newUser: NewUser) {
  let response: Response;
  try{
   response = await fetch(`https://localhost:5173/users/create`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser),
   });
  }
  catch {
    return false;
  }
  if (!response.ok) {
      throw new Error(await response.json())
  }
}