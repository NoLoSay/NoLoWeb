import Header from "./HomePage/header";
import CardContainer from "./HomePage/card-container";
import VideoCreationContainer from "./HomePage/video-creation-container";
import ContactForm from "./HomePage/contact-form";
import styles from "./index.module.css";

export default function Home() {
  return (
    <nav className={styles.hearderParent}>
      <Header />
      <div className={styles.sect1Parent}>
        <CardContainer />
        <div className={styles.frameParent}>
          <VideoCreationContainer />
          <img className={styles.frameChild} alt="" src="/HomePage/frame-29.svg" />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.captureDecran20231015AParent}>
            <img
              className={styles.captureDecran20231015A}
              alt=""
              src="/HomePage/capture-decran-20231015-a-1555-1@2x.png"
            />
            <div className={styles.millionsDePersonnesUtilisenParent}>
              <div className={styles.millionsDePersonnes}>
                5,5 millions de personnes utilisent déjà Nolosay au quotidien.
              </div>
              <div className={styles.accdez1000}>
                Accèdez à +1000 vidéos traduites en langue des signe
              </div>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
              Suspendisse lectus tortor.
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </nav>
  );
};
