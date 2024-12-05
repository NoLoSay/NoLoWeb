import UploadVideoJSON from "@global/types/httpClient/videos/video";
import { post } from "@helpers/httpClient/common";

interface UploadVideoProps {
  authorizationToken: string;
  artworkId: string;
}

export async function uploadVideo({
  authorizationToken,
  artworkId,
}: UploadVideoProps): Promise<UploadVideoJSON> {
  try {
    const url = process.env.NEXT_PUBLIC_PROD_API_URL;
    const port = process.env.NEXT_PUBLIC_VIDEO_API_PORT;
    var finalUrl = url;

    if (
      process.env.NEXT_PUBLIC_ENV_MODE == "dev" &&
      process.env.NEXT_PUBLIC_DEV_API_URL
    ) {
      finalUrl = process.env.NEXT_PUBLIC_DEV_API_URL + port;
    }

    const response = await post({
      url: finalUrl,
      endpoint: `/upload/${artworkId}`,
      body: JSON.stringify({}),
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
