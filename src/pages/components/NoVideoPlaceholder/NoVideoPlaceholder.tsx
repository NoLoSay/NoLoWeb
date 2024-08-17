import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { ButtonBase } from "@mui/material";

const styles: { [key: string]: string } = {
  container_0: "flex flex-row text-black max-w-lg",
  container_1: "flex flex-col space-y-5 justify-center",
  container_2: "font-sans text-2xl",
  container_3: "font-sans text-2xl",
  container_4: "flex flex-col justify-evenly px-10",
};

const NoVideoPlaceholder = () => {
  return (
    <div className={`container_0 ${styles.container_0}`}>
      <div className={`container_1 ${styles.container_1}`}>
        <div>
          <p className={`container_2 ${styles.container_2}`}></p>
        </div>
        <div>
          <p className={`container_3 ${styles.container_3}`}></p>
        </div>
      </div>
      <div className={`container_4 ${styles.container_4}`}>
        <ButtonBase disableRipple>
          <AddBoxOutlinedIcon sx={{ fontSize: 60, color: "#f5d442" }} />
        </ButtonBase>
        <ButtonBase disableRipple>
          <StarBorderRoundedIcon sx={{ fontSize: 60, color: "#f5d442" }} />
        </ButtonBase>
      </div>
    </div>
  );
};

export default NoVideoPlaceholder;
