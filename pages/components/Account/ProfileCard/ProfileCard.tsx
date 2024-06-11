import { ButtonBase, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const styles: { [key: string]: string } = {
  container_0: "relative flex flex-row m-5 p-5 items-center justify-start",
  container_1: "w-20 h-20 rounded-full",
  container_2: "flex flex-col flex-grow mx-5 space-y-2",
  container_3: "text-sky-600",
  container_4: "text-lg font-bold my-2",
  container_5: "absolute top-0 right-0 m-2",
};

type ProfileProps = {
  profilePicturePath?: string;
  fullName?: string;
  email?: string;
  phone?: string;
};

function ProfileCard({
  profilePicturePath,
  fullName,
  email,
  phone,
}: ProfileProps) {
  return (
    <Paper className={`container_0 ${styles.container_0}`}>
      <img
        className={`container_1 ${styles.container_1}`}
        src={profilePicturePath}
        alt="Photo de profile"
      />
      <div className={`container_2 ${styles.container_2}`}>
        <p className={`container_3 ${styles.container_3}`}>Identification</p>
        <p className={`container_4 ${styles.container_4}`}>{fullName}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <ButtonBase className={`container_5 ${styles.container_5}`}>
        <EditIcon />
      </ButtonBase>
    </Paper>
  );
}

export default ProfileCard;
