import Link from "../../node_modules/next/link";

const styles: { [key: string]: string } = {
  mainDiv:
    "relative w-full bg-gray-300 px-14 py-14 text-white text-left font-poppins flex flex-row justify-between",
  smMainDiv: "sm:p-0 sm:justify-normal sm:flex-col",

  descriptionDiv:
    "flex flex-col items-start justify-evenly gap-y-[1rem]",
  smDescriptionDiv: "sm:scale-[0.6]",

  titleDesciptionDiv: "flex flex-row justify-start gap-2",

  titleLogo: "w-8 h-8",

  title: "w-32 h-8",

  descriptionText: "",

  informationsDiv: "informations flex flex-col items-start justify-evenly",
  smInformationsDiv: "sm:scale-[0.6]",

  informationsContentDivs: "flex items-center justify-start gap-2",

  aboutLink: "text-blue-400 hover:underline"
};

/* rework */
const FooterContainer: React.FC = () => {
  return (
    <div className={`mainDiv ${styles["mainDiv"]} ${styles["smMainDiv"]}`}>
      <div className={`descriptionDiv ${styles["descriptionDiv"]} ${styles["smDescriptionDiv"]}`}>
        <div className={`titleDesciptionDiv ${styles["titleDesciptionDiv"]}`}>
          <img
            className={`titleLogo ${styles["titleLogo"]}`}
            alt="NoLoSay logo"
            src="/images/logo/nologo.png"
          />
          <img
            className={`title ${styles["title"]}`}
            alt="NoLoSay title"
            src="/images/logo/nolosay-white.png"
          />
        </div>
        <p style={{maxWidth: "24rem"}} className={`descriptionText ${styles["descriptionText"]}`}>
          Nolosay est un groupe composé d'étudiants passionnés et déterminés à
          créer un changement positif dans la vie quotidienne des personnes
          sourdes ou malentendantes. Leur objectif est clair : rendre
          l'information et la communication accessibles à tous, en brisant les
          barrières linguistiques.
        </p>
        <p>© 2023 NOLOSAY. Tous droits réservés.</p>
      </div>
      <div className={`informationsDiv ${styles["informationsDiv"]} ${styles["smInformationsDiv"]}`}>
        <b>Informations</b>
        <p className="w-32">Mentions légales</p>
        <div
          className={`informationsContentDivs ${styles["informationsContentDivs"]}`}
        >
          <img
            className="w-4 h-4"
            alt="phone logo"
            src="/icon/full/communication--phone.png"
          />
          <p>02.97.67.80.87</p>
        </div>
        <div
          className={`informationsContentDivs ${styles["informationsContentDivs"]}`}
        >
          <img
            className="w-4 h-4"
            alt="mail logo"
            src="/icon/full/communication--mail.png"
          />
          <p>contact@nolosay.fr</p>
        </div>
        <Link href="/screen/about/About" as="/about" className={styles["aboutLink"]}>About</Link>
      </div>
    </div>
  );
};

export default FooterContainer;
