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
      </div>
    </div>
  );
};

/* original */
// const FooterContainer: React.FC = () => {
//   return (
//     <div className="absolute bottom-[0px] left-[0px] w-[1920px] flex flex-col items-start justify-start text-left text-mini text-base-white font-poppins">
//       <div className="bg-gray-300 w-[1920px] flex flex-col items-center justify-start py-[70px] px-[120px] box-border gap-[41px]">
//         <div className="self-stretch flex flex-row items-start justify-between">
//           <div className="overflow-hidden flex flex-col items-start justify-start gap-[21px]">
//             <div className="flex flex-row items-center justify-start gap-[9.46px]">
//               <img
//                 className="relative w-[31.96px] h-[29.15px]"
//                 alt=""
//                 src="/images/logo/nologo.png"
//               />
//               <img
//                 className="relative w-[123.58px] h-[25.98px]"
//                 alt=""
//                 src="/images/logo/nolosay-white.png"
//               />
//             </div>
//             <div className="relative inline-block w-[502px]">
//               Nolosay est un groupe composé d'étudiants passionnés et déterminés à créer
//               un changement positif dans la vie quotidienne des personnes
//               sourdes ou malentendantes. Leur objectif est clair :
//               rendre l'information et la communication accessibles à tous,
//               en brisant les barrières linguistiques.
//             </div>
//           </div>
//           <div className="flex flex-row items-start justify-start gap-[70px]">
//             <div className="overflow-hidden flex flex-col items-start justify-start py-0 px-px gap-[16px]">
//               <b className="relative">Informations</b>
//               <div className="relative inline-block w-[130px]">
//                 Mentions légale
//               </div>
//               <div className="flex flex-row items-center justify-center gap-[6px]">
//                 <img
//                   className="relative w-4 h-4 overflow-hidden shrink-0"
//                   alt=""
//                   src="/icon/full/communication--phone.png"
//                 />
//                 <div className="relative">02.97.67.80.87</div>
//               </div>
//               <div className="flex flex-row items-center justify-center gap-[6px]">
//                 <img
//                   className="relative w-4 h-4 overflow-hidden shrink-0"
//                   alt=""
//                   src="/icon/full/communication--mail.png"
//                 />
//                 <div className="relative">contact@nolosay.fr</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="self-stretch flex flex-row items-center justify-between text-2xs text-gray-100">
//           <div className="relative">© 2023 NOLOSAY. Tous droits réservés.</div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default FooterContainer;
