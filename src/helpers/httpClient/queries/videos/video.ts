import UploadVideoJSON from "@global/types/httpClient/videos/video";
import { post } from "@helpers/httpClient/common";

interface UploadVideoProps {
  authorizationToken: string;
  artworkId: string;
  formData: FormData;
}

export async function uploadVideo({
  authorizationToken,
  artworkId,
  formData,
}: UploadVideoProps): Promise<UploadVideoJSON> {
  try {
    const url = process.env.NEXT_PUBLIC_PROD_VIDEO_API_URL;
    var finalUrl: any = url;

    if (
      process.env.NEXT_PUBLIC_ENV_MODE == "dev" &&
      process.env.NEXT_PUBLIC_DEV_API_URL
    ) {
      finalUrl = process.env.NEXT_PUBLIC_DEV_API_URL + process.env.NEXT_PUBLIC_VIDEO_API_PORT;
    }

    const response = await fetch(`${finalUrl}/upload/${artworkId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authorizationToken}`,
      },
      body: formData,
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
