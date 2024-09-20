import ChangePasswordJSON from "@global/types/httpClient/account/ChangePassword";
import { post } from "@helpers/httpClient/common";

interface ChangePasswordProps {
  token: string | null;
  password: string;
}

export async function changePassword({
  token,
  password,
}: ChangePasswordProps): Promise<ChangePasswordJSON> {
  try {
    const response = await post({
      endpoint: "/auth/change-password",
      body: JSON.stringify({
        token,
        password,
      }),
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
