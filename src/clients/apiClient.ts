export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export interface NewUser {
  username: string;
  password: string;
  userBio: string;
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
