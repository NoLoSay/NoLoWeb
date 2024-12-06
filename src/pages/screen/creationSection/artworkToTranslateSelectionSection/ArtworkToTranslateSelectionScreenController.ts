import { UserContext } from "@global/contexts/UserProvider";
import { get } from "@helpers/httpClient/common";
import { useContext, useEffect, useState } from "react";

interface ArtworkToTranslateSelectionScreenController {
  error: any;
  data: any;
}

interface ArtworkToTranslateSelectionScreenControllerProps {}

export default function ArtworkToTranslateSelectionScreenController({}: ArtworkToTranslateSelectionScreenControllerProps): ArtworkToTranslateSelectionScreenController {
  const [error, setError] = useState<string>();
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await get({
          endpoint: "/items",
          authorizationToken: user.accessToken,
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setData(responseData);
      } catch (error: any) {
        if (error.message) {
          setError(error.message);
        } else {
          setError(error);
        }
      }
    };

    getTickets();
  }, []);

  return { error, data };
}
