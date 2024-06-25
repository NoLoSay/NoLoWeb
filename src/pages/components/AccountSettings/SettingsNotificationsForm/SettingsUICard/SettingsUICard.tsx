const styles: { [key: string]: string } = {
  container_0:
    "flex flex-col font-bold p-3 outline-black outline-4 shadow-md rounded-lg w-full",
  container_1: "text-black",
  container_2: "text-gray-100",
};

type SettingsUICardProps = {
  title: string;
  description: string;
};

export default function SettingsUICard({
  title,
  description,
}: SettingsUICardProps) {
  return (
    <div className={`container_0 ${styles.container_0}`}>
      <p className={`container_1 ${styles.container_1}`}>{title}</p>
      <p className={`container_2 ${styles.container_2}`}>{description}</p>
    </div>
  );
}
