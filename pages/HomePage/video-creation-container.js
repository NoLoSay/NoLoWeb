import styles from "./video-creation-container.module.css";

const VideoCreationContainer = () => {
  return (
    <div className={styles.pourCrerUneVidoRienDeParent}>
      <div className={styles.pourCrerUneContainer}>
        <p className={styles.pourCrerUne}>{`Pour créer une vidéo, `}</p>
        <p className={styles.pourCrerUne}>rien de plus simple !</p>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.appuieSurParent}>
          <div className={styles.appuieSur}>
            <ul className={styles.choisiUneOeuvre}>{`Appuie sur `}</ul>
          </div>
          <img
            className={styles.linearEssentionalUiAdd}
            alt=""
            src="/HomePage/linear--essentional-ui--add-square1.svg"
          />
          <div className={styles.puisSlectionneVido}>
            puis sélectionne “Vidéo à créer”
          </div>
        </div>
        <div className={styles.choisiUneOeuvreTraduireWrapper}>
          <div className={styles.choisiUneOeuvreContainer}>
            <ul className={styles.choisiUneOeuvre}>
              Choisi une oeuvre à traduire
            </ul>
          </div>
        </div>
        <div className={styles.choisiUneOeuvreTraduireWrapper}>
          <div className={styles.appuieSur}>
            <ul className={styles.choisiUneOeuvre}>
              Te voila prêt à débuter ta création !
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/HomePage/vector.svg" />
        <div className={styles.traduireUneOeuvre}>Traduire une oeuvre</div>
      </div>
    </div>
  );
};

export default VideoCreationContainer;
