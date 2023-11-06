import styles from "./contact-form.module.css";

const ContactForm = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.companyParent}>
          <div className={styles.company}>
            <div className={styles.groupParent}>
              <img className={styles.frameChild} alt="" src="/HomePage/group-21.svg" />
              <img className={styles.frameItem} alt="" src="/HomePage/group-11.svg" />
            </div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius.
            </div>
          </div>
          <div className={styles.column4Parent}>
            <div className={styles.column4}>
              <b className={styles.title}>À propos de nous</b>
              <div className={styles.title}>Services</div>
              <div className={styles.title}>Savoir faire</div>
              <div className={styles.title}>Nouveautés</div>
            </div>
            <div className={styles.column4}>
              <b className={styles.title}>À propos de nous</b>
              <div className={styles.title}>Services</div>
              <div className={styles.title}>Savoir faire</div>
              <div className={styles.title}>Nouveautés</div>
            </div>
            <div className={styles.column4}>
              <b className={styles.title}>Informations</b>
              <div className={styles.list6}>Mentions légale</div>
              <div className={styles.communicationPhoneParent}>
                <img
                  className={styles.communicationPhone}
                  alt=""
                  src="/HomePage/communication--phone.svg"
                />
                <div className={styles.title}>02.97.67.80.87</div>
              </div>
              <div className={styles.communicationPhoneParent}>
                <img
                  className={styles.communicationPhone}
                  alt=""
                  src="/HomePage/communication--mail.svg"
                />
                <div className={styles.title}>contact@nolosay.fr</div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.lineIcon} alt="" src="/HomePage/line.svg" />
        <div className={styles.copyrightWrapper}>
          <div className={styles.title}>
            © 2023 NOLOSAY. Tous droits réservés.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
