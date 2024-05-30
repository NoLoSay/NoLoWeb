import Link from "../../../node_modules/next/link";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import textData from "../../../public/text.json";

const styles: { [key: string]: string } = {
  mainDiv:
    "relative w-full bg-gray-300 px-14 py-14 text-white text-left font-poppins flex flex-row justify-between",
  smMainDiv: "sm:py-8 sm:justify-normal sm:flex-col sm:gap-8",

  descriptionDiv:
    "flex flex-col items-start justify-evenly gap-y-[1rem] flex-3",
  smDescriptionDiv: "sm:gap-6",

  titleDesciptionDiv: "flex flex-row justify-start gap-2",

  titleLogo: "w-8 h-8",

  title: "w-32 h-8",

  descriptionText: "",

  informationsDiv:
    "informations flex flex-col items-start justify-evenly flex-1",
  smInformationsDiv: "sm:gap-4",

  informationsContentDivs: "flex items-center justify-start gap-2",

  contactLink: "text-white",

  aboutLink:
    "text-base text-blue-400 hover:underline hover:cursor-pointer bg-transparent",
};

const FooterContainer: React.FC = () => {
  const navigate = useNavigate();

  function handleNavigation(link: string) {
    navigate(link);
  }

  return (
    <div className={`mainDiv ${styles["mainDiv"]} ${styles["smMainDiv"]}`}>
      <div
        className={`descriptionDiv ${styles["descriptionDiv"]} ${styles["smDescriptionDiv"]}`}
      >
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
        <p
          style={{}}
          className={`descriptionText ${styles["descriptionText"]}`}
        >
          {textData.page.global.footer.footerText}
        </p>
        <p>
          © 2022 - {new Date().getFullYear()} NOLOSAY. Tous droits réservés.
        </p>
      </div>
      <div
        className={`informationsDiv ${styles["informationsDiv"]} ${styles["smInformationsDiv"]}`}
      >
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
          <p>
            <Link href="tel:+330297678087" className={styles["contactLink"]}>
              +33 02.97.67.80.87
            </Link>
          </p>
        </div>
        <div
          className={`informationsContentDivs ${styles["informationsContentDivs"]}`}
        >
          <img
            className="w-4 h-4"
            alt="mail logo"
            src="/icon/full/communication--mail.png"
          />
          <Link href="to:contact@nolosay.fr" className={styles["contactLink"]}>
            contact@nolosay.fr
          </Link>
        </div>
        <button
          onClick={() => {
            handleNavigation("/about");
          }}
          className={styles["aboutLink"]}
        >
          À propos de nous
        </button>
      </div>
    </div>
  );
};

export default FooterContainer;
