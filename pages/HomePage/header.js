import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.hearder}>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/HomePage/group-2.svg" />
        <img className={styles.frameItem} alt="" src="/HomePage/group-1.svg" />
      </div>
      <div className={styles.quiSommeNousParent}>
        <div className={styles.quiSommeNous}>Qui somme nous ?</div>
        <div className={styles.quiSommeNous}>Nolosay app</div>
        <div className={styles.quiSommeNous}>Communautée</div>
        <div className={styles.quiSommeNous}>Questions fréquentes</div>
      </div>
      <div className={styles.jeMeConnecteParent}>
        <div className={styles.jeMeConnecte}>Je me connecte</div>
        <div className={styles.jeMinscritParent}>
          <div className={styles.jeMinscrit}>Je m’inscrit</div>
          <div className={styles.jeMinscrit}>:)</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
