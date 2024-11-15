import ProfileJSON from "@global/types/httpClient/auth/Profile";
import RemoveProfileJSON from "@global/types/httpClient/auth/RemoveProfile";
import { deleteRequest, get } from "@helpers/httpClient/common";

interface getActiveProfileProps {
  authorizationToken: string;
}

export async function getActiveProfile({
  authorizationToken,
}: getActiveProfileProps): Promise<ProfileJSON> {
  try {
    const response = await get({
      endpoint: "/profiles/active",
      authorizationToken: authorizationToken
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return {
      json: {
        id: responseData.id,
        role: responseData.role,
        createdAt: responseData.createdAt,
      },
      status: response.status,
      message: responseData.message,
    };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

interface RemoveProfileProps {
  authorizationToken: string;
  profileId: string | null;
}

export async function removeProfile({
  authorizationToken,
  profileId,
}: RemoveProfileProps): Promise<RemoveProfileJSON> {
  try {
    const response = await deleteRequest({
      endpoint: `/profiles/${profileId}`,
      authorizationToken: authorizationToken
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return {
      status: response.status,
      message: responseData.message,
    };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}
