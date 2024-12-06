import { useNavigate } from "node_modules/react-router-dom/dist/index";

interface NoVideoPlaceholderController {
  goToVideoCreation: () => void;
}

interface NoVideoPlaceholderControllerProps {
  artworkId: string;
}

export default function NoVideoPlaceholderController({
  artworkId,
}: NoVideoPlaceholderControllerProps): NoVideoPlaceholderController {
  const navigate = useNavigate();

  const goToVideoCreation = () => {
    navigate("/record", {
      state: {
        artworkId: artworkId,
      },
    });
  };

  return { goToVideoCreation };
}
