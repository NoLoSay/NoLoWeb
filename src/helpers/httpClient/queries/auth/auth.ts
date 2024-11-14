import { Header } from "@global/types/httpClient/Header";
import SubscriptionJSON from "@global/types/httpClient/auth/Subscription";
import ConnectionJSON from "@global/types/httpClient/auth/Connection";
import { post } from "@helpers/httpClient/common";
import ForgotPasswordJSON from "@global/types/httpClient/auth/ForgotPassword";
import ChangePasswordJSON from "@global/types/httpClient/account/ChangePassword";

interface SubscribeProps {
  url?: string;
  email: string;
  username?: string;
  password: string;
  telNumber: string | null;
  headers?: Header;
}

interface ConnectProps {
  url?: string;
  formUsername: string;
  password: string;
  headers?: Header;
}

interface ForgotPasswordProps {
  email: string;
}

export async function subscribe({
  email,
  username,
  password,
  telNumber,
}: SubscribeProps): Promise<SubscriptionJSON> {
  try {
    const response = await post({
      endpoint: "/register",
      body: JSON.stringify({
        email,
        username,
        password,
        telNumber,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return {
      json: responseData,
      status: response.status,
      message: responseData.message,
    };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export async function connect({
  formUsername,
  password,
}: ConnectProps): Promise<ConnectionJSON> {
  try {
    const response = await post({
      endpoint: "/auth/login",
      body: JSON.stringify({
        username: formUsername,
        password,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return {
      json: {
        id: responseData.id,
        uuid: responseData.uuid,
        username: responseData.username,
        email: responseData.email,
        picture: responseData.picture,
        telNumber: responseData.telNumber,
        accessToken: responseData.accessToken,
        createdAt: responseData.createdAt,
      },
      status: response.status,
      message: responseData.message,
    };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export async function forgotPassword({
  email,
}: ForgotPasswordProps): Promise<ForgotPasswordJSON> {
  try {
    const response = await post({
      endpoint: "/auth/forgot-password",
      body: JSON.stringify({
        email: email,
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
