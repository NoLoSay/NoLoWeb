import styles from "./card-container.module.css";

const CardContainer = () => {
  return (
    <div className={styles.sect1}>
      <div className={styles.miroirDEauChateauNantesPhParent}>
        <img
          className={styles.miroirDEauChateauNantesPhIcon}
          alt=""
          src="/HomePage/miroirdeauchateaunantes-photo-j-1@2x.png"
        />
        <div className={styles.miroirDEauChateauNantesPh} />
      </div>
      <div className={styles.nolosayTonAssistantDeVisiParent}>
        <div className={styles.nolosayTonAssistantContainer}>
          <p className={styles.nolosay}>{`Nolosay, `}</p>
          <p className={styles.tonAssistantDe}>
            ton assistant de visite 100% interactif !
          </p>
        </div>
        <div className={styles.appStoreParent}>
          <img className={styles.appStoreIcon} alt="" src="/HomePage/app-store.svg" />
          <img className={styles.appStoreIcon} alt="" src="/HomePage/google-play.svg" />
        </div>
      </div>
      <img className={styles.sect1Child} alt="" src="/HomePage/vector-60.svg" />
      <div className={styles.iphone13Pro}>
        <div className={styles.maskGroup}>
          <div className={styles.seCrerUnCompte8}>
            <img
              className={styles.b6936b24d8b9a6a9ffbb3f32f2Icon}
              alt=""
              src="/HomePage/50997b6936b24d8b9a6a9ffbb3f32f25-1-105-c-1@2x.png"
            />
            <div className={styles.iphoneXsHomeIndicator}>
              <div className={styles.line} />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.miroirDEauChateauNantesPhGroup}>
                <img
                  className={styles.miroirDEauChateauNantesPhIcon1}
                  alt=""
                  src="/HomePage/miroirdeauchateaunantes-photo-j-11@2x.png"
                />
                <img
                  className={styles.miroirDEauChateauNantesPhIcon2}
                  alt=""
                  src="/HomePage/miroirdeauchateaunantes-photo-j-2@2x.png"
                />
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.newWrapper}>
                    <div className={styles.new}>New</div>
                  </div>
                  <div className={styles.wheelchair1Parent}>
                    <img
                      className={styles.wheelchair1Icon}
                      alt=""
                      src="/HomePage/wheelchair-1.svg"
                    />
                    <img
                      className={styles.wheelchair1Icon}
                      alt=""
                      src="/HomePage/wheelchair-2.svg"
                    />
                    <img
                      className={styles.wheelchair1Icon}
                      alt=""
                      src="/HomePage/wheelchair-3.svg"
                    />
                  </div>
                </div>
                <div className={styles.chteauDesDucs}>
                  Château des Ducs de Bretagne
                </div>
                <div className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non risus. Suspendisse lectus tortor, dignissim sit amet,
                  adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
                  diam. Maecenas ligula massa, varius a, semper congue, euismod
                  non, mi.
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameParent2}>
                      <div className={styles.connectButtonWrapper}>
                        <div className={styles.connectButton}>
                          <img
                            className={styles.image17Icon}
                            alt=""
                            src="/HomePage/image-17@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.frameParent3}>
                        <div className={styles.descriptionWrapper}>
                          <div className={styles.description1}>
                            La tapisserie de Charles X
                          </div>
                        </div>
                        <div className={styles.description2}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/HomePage/group-28.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameParent2}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/HomePage/frame-23395@2x.png"
                      />
                      <div className={styles.frameParent3}>
                        <div className={styles.descriptionContainer}>
                          <div className={styles.description3}>
                            Chateau sur bois
                          </div>
                        </div>
                        <div className={styles.description2}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/HomePage/group-281.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.seCrerUnCompte8Inner}>
              <img className={styles.groupIcon} alt="" src="/HomePage/group-282.svg" />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
              <div className={styles.linearEssentionalUiHomParent}>
                <img
                  className={styles.linearEssentionalUiHom}
                  alt=""
                  src="/HomePage/linear--essentional-ui--home.svg"
                />
                <img
                  className={styles.linearEssentionalUiHom}
                  alt=""
                  src="/HomePage/linear--essentional-ui--add-square.svg"
                />
                <img
                  className={styles.linearSecurityQrCode}
                  alt=""
                  src="/HomePage/linear--security--qr-code.svg"
                />
                <img
                  className={styles.linearSecurityQrCode}
                  alt=""
                  src="/HomePage/linear--settings-fine-tuning--settings.svg"
                />
              </div>
            </div>
            <div className={styles.iphoneXBarsNavigationL}>
              <div className={styles.statusBar}>
                <img className={styles.frameIcon} alt="" src="/HomePage/group-281.svg" />
                <div className={styles.action}>
                  <div className={styles.time}>9:41</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.graphiteIcon} alt="" src="/HomePage/graphite@2x.png" />
      </div>
    </div>
  );
};

export default CardContainer;
