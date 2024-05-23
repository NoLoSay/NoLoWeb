
type SettingsUICardProps = {
  title: string;
  description: string;
}

export default function SettingsUICard({title, description}: SettingsUICardProps) {
  return (
    <div className="flex flex-col font-bold p-3 outline-black outline-4 shadow-md rounded-lg w-full">
      <p className="text-black">{title}</p>
      <p className="text-gray-100">{description}</p>
    </div>
  )
}