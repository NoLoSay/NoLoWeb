import type { NextPage } from "next";

type Person = {
  name: string;
  image: string;
  role: string;
};

const people: Person[] = [
  {
    name: "Tom Duval-Mahé",
    image: "/images/people/tom.png",
    role: "Développeur Frontend",
  },
  {
    name: "Julien Lafargue",
    image: "/images/people/julien.png",
    role: "Chef de projet",
  },
  {
    name: "Aurèle Nicolas",
    image: "/images/people/aurele.png",
    role: "Développeur Backend",
  },
  {
    name: "Quentin Camilleri",
    image: "/images/people/quentin.png",
    role: "Développeur Backend",
  },
  {
    name: "Alexandre Tomasin",
    image: "/images/people/tomasin.png",
    role: "Développeur Frontend",
  },
  {
    name: "Johan Chrillesen",
    image: "/images/people/johan.png",
    role: "Lead-dev Frontend",
  },
  {
    name: "Alexandre Laborde",
    image: "/images/people/laborde.png",
    role: "Développeur Frontend",
  },
  {
    name: "Ugo Boulestreau",
    image: "/images/people/ugo.png",
    role: "Développeur Dev-Ops",
  },
];

function GridCell({ name, image, role }: Person) {
  return (
    <div className="flex flex-col items-center w-full">
      <img
        src={image}
        alt={`Profile Picture of ${name}`}
        className="rounded-full mb-2"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p className="text-center text-black mb-4">{name}</p>
      <p className="text-center text-black">{role}</p>
    </div>
  );
}

const Container: NextPage = () => {
  return (
    <div className="grid grid-cols-4 gap-y-16 w-full px-16">
      {people.map(({ name, image, role }, index) => (
        <div key={index} className="md:w-2/3 sm: 1/3">
          <GridCell name={name} image={image} role={role} />
        </div>
      ))}
    </div>
  );
};

export default Container;
