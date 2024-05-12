import { Paper } from "@mui/material";
import testProfile from "../../../stories/assets/testProfile.json"

type MiniProfileProps = {
  name: string;
  userId: string;
};

function MiniProfileCard({ name, userId }: MiniProfileProps) {
  return (
    <div className="relative flex flex-row items-center justify- space-x-2 text-black">
      <img className="w-20 h-20 rounded-full" src={testProfile.profilePicturePath} />
      <div className="flex flex-col pt-5">
        <div className="flex flex-row text-2xl space-x-5">
          <p className="font-bold">{name}</p>
          <p className="text-neutral-500">{"@" + userId}</p>
        </div>
        <div className="flex flex-row space-x-5">
          <p>{`Lié au lieu suivant : Musée du Louvres`}</p>
        </div>
      </div>
    </div>
  )
}

export default MiniProfileCard;