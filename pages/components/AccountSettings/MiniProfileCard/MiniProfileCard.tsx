import testProfile from "../../../../stories/assets/testProfile.json"

const styles: { [key: string]: string } = {
  container_0: "relative flex flex-row items-center justify- space-x-2 text-black",
  container_1: "w-20 h-20 rounded-full",
  container_2: "flex flex-col pt-5",
  container_3: "flex flex-row text-2xl space-x-5",
  container_4: "font-bold",
  container_5: "text-neutral-500",
  container_6: "flex flex-row space-x-5"
};

type MiniProfileProps = {
  name: string;
  userId: string;
};

function MiniProfileCard({ name, userId }: MiniProfileProps) {
  return (
    <div className={`container_0 ${styles.container_0}`}>
      <img className={`container_1 ${styles.container_1}`} src={testProfile.profilePicturePath} />
      <div className={`container_2 ${styles.container_2}`}>
        <div className={`container_3 ${styles.container_3}`}>
          <p className={`container_4 ${styles.container_4}`}>{name}</p>
          <p className={`container_5 ${styles.container_5}`}>{"@" + userId}</p>
        </div>
        <div className={`container_6 ${styles.container_6}`}>
          <p>{`Lié au lieu suivant : Musée du Louvres`}</p>
        </div>
      </div>
    </div>
  )
}

export default MiniProfileCard;