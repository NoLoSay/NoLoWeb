import type { NextPage } from "next";

type Person = {
  name: string;
  image: string;
  role: string;
  description: string;
};

const people: Person[] = [
  {
    name: "Tom Duval-Mahé",
    image: "/images/people/tom.png",
    role: "Développeur Frontend",
    description:
      '"Je m\'occupe de la partie Front du projet principalement sur le web"',
  },
  {
    name: "Julien Lafargue",
    image: "/images/people/julien.png",
    role: "Chef de projet",
    description:
      "\"Je m'occupe de l'oganisation du projet et du dévelopement du site web\"",
  },
  {
    name: "Aurèle Nicolas",
    image: "/images/people/aurele.png",
    role: "Développeur Backend",
    description:
      '"Je m\'occupe du Back du projet notamment la partie administrateur"',
  },
  {
    name: "Quentin Camilleri",
    image: "/images/people/quentin.png",
    role: "Développeur Backend",
    description:
      '"Je m\'occupe de la partie Back du projet, principalement la base de données"',
  },
  {
    name: "Alexandre Tomasin",
    image: "/images/people/tomasin.png",
    role: "Développeur Frontend",
    description: '"Je m\'occupe de la partie Front web du projet"',
  },
  {
    name: "Johan Chrillesen",
    image: "/images/people/johan.png",
    role: "Lead-dev Frontend",
    description:
      "\"Je m'occupe de m'occupe de l'ensemble du développement de l'application mobile du projet\"",
  },
  {
    name: "Alexandre Laborde",
    image: "/images/people/laborde.png",
    role: "Développeur Frontend",
    description: '"Je m\'occupe du Front du projet sur la partie web"',
  },
  {
    name: "Ugo Boulestreau",
    image: "/images/people/ugo.png",
    role: "Développeur Dev-Ops",
    description:
      '"Je m\'occupe des parties Back, DevOps et Tests du projet. Je suis en charge aussi du maintient de la documentation à jour"',
  },
];

const styles: { [key: string]: string } = {
  cellDiv: "flex flex-col items-center w-full",
  imgDiv: "rounded-full mb-2",
  nameDiv: "text-lg font-black text-center text-black mb-2",
  roleDiv: " text-center text-black mb-2 ",
  descriptionDiv: "text-sm italic text-center text-black",

  containerDiv:
    "grid sm:grid-cols-2 grid-cols-4 gap-y-16 gap-x-16 w-full px-20",
  gridDiv: " ",
};

function GridCell({ name, image, role, description }: Person) {
  return (
    <div className={`cellDiv ${styles["cellDiv"]}`}>
      <img
        src={image}
        alt={`Profile Picture of ${name}`}
        className={`imgDiv ${styles["imgDiv"]}`}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p className={`nameDiv ${styles["nameDiv"]}`}>{name}</p>
      <p className={`roleDiv ${styles["roleDiv"]}`}>{role}</p>
      <p className={`descriptionDiv ${styles["descriptionDiv"]}`}>
        {description}
      </p>
    </div>
  );
}

const Container: NextPage = () => {
  return (
    <div className={`containerDiv ${styles["containerDiv"]}`}>
      {people.map(({ name, image, role, description }, index) => (
        <div key={index}>
          <GridCell
            name={name}
            image={image}
            role={role}
            description={description}
          />
        </div>
      ))}
    </div>
  );
};

export default Container;
