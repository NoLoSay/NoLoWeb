import React from "react";
import Layout from "../../../components/Layout";

const classes: { [key: string]: React.CSSProperties } = {
  translateButtonBox: {
    backgroundColor: "var(--colors-base-button)",
    borderRadius: "10px",
    display: "flex",
    gap: "10px",
    padding: "10px",
    position: "relative",
  },

  translateButton: {
    cursor: "pointer",
    backgroundColor: "var(--colors-base-button)",
    color: "var(--blackblack)",
    fontFamily: '"Poppins-Bold", Helvetica',
    fontSize: "15px",
    fontWeight: "400",
    letterSpacing: "0px",
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
    textAlign: "center",
  },

  mainDiv: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    display: "inline-flex",
    flexDirection: "column",
    gap: "38px",
    marginTop: "30px",
    position: "relative",
    width: "100%",
  },

  "oeuvre-a-traduire-overlap-group-wrapper": {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    height: "134px",
    overflow: "hidden",
    position: "relative",
    alignSelf: "center",
    width: "1280px",
  },

  "oeuvre-a-traduire-overlap-group": {
    borderRadius: "60px 20px 20px 60px",
    height: "692px",
    position: "relative",
    top: "-279px",
    width: "1289px",
  },

  "oeuvre-a-traduire-miroir-d'eau-chateau": {
    height: "134px",
    left: "0",
    objectFit: "cover",
    position: "absolute",
    top: "279px",
    width: "1280px",
  },

  "oeuvre-a-traduire-miroir-d'eau-chateau-2": {
    background:
      "linear-gradient(180deg, rgba(30, 48, 58, 0) 0%, rgb(30, 48, 58) 89.58%)",
    borderRadius: "60px 20px 20px 60px",
    height: "692px",
    left: "0",
    position: "absolute",
    top: "0",
    width: "1289px",
  },

  "oeuvre-a-traduire-div-wrapper": {
    alignItems: "flex-start",
    display: "inline-flex",
    flexDirection: "column",
    gap: "20px",
    left: "375px",
    position: "absolute",
    top: "313px",
  },

  "oeuvre-a-traduire-text-wrapper-3": {
    color: "var(--colors-base-white)",
    fontFamily: '"Poppins-Black", Helvetica',
    fontSize: "60px",
    fontWeight: "900",
    letterSpacing: "0",
    lineHeight: "65px",
    marginTop: "-1px",
    position: "relative",
    width: "675px",
  },

  "oeuvre-a-traduire-vector": {
    position: "absolute",
    alignSelf: "flex-start",
  },

  "oeuvre-a-traduire-img": {
    position: "absolute",
    alignSelf: "flex-end",
  },

  "oeuvre-a-traduire-frame-3": {
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    alignSelf: "center",
    width: "1280px",
  },

  "oeuvre-a-traduire-frame-4": {
    alignItems: "flex-start",
    display: "inline-flex",
    flex: "0 0 auto",
    flexDirection: "column",
    gap: "25px",
    position: "relative",
  },

  "oeuvre-a-traduire-text-wrapper-4": {
    color: "var(--colors-base-black)",
    fontFamily: '"Poppins-SemiBold", Helvetica',
    fontSize: "25px",
    fontWeight: "600",
    letterSpacing: "0",
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
    width: "fit-content",
  },

  "oeuvre-a-traduire-frame-5": {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    height: "445px",
    position: "relative",
    width: "375px",
  },

  "oeuvre-a-traduire-frame-wrapper": {
    alignItems: "flex-start",
    alignSelf: "stretch",
    backgroundColor: "var(--colors-base-white)",
    borderRadius: "10px",
    boxShadow: "var(--shadow-input)",
    display: "flex",
    flex: "1",
    flexDirection: "column",
    flexGrow: "1",
    gap: "10px",
    padding: "20px 15px",
    position: "relative",
    width: "100%",
  },

  "oeuvre-a-traduire-frame-6": {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flex: "1",
    flexGrow: "1",
    gap: "10px",
    position: "relative",
    width: "100%",
  },

  "oeuvre-a-traduire-frame-7": {
    alignItems: "center",
    display: "flex",
    flex: "1",
    flexGrow: "1",
    gap: "10px",
    position: "relative",
  },

  "oeuvre-a-traduire-connect-button-wrapper": {
    height: "115px",
    position: "relative",
    width: "113px",
  },

  "oeuvre-a-traduire-connect-button": {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    height: "108px",
    position: "relative",
    width: "113px",
  },

  "oeuvre-a-traduire-image": {
    alignSelf: "stretch",
    flex: "1",
    flexGrow: "1",
    objectFit: "cover",
    position: "relative",
    width: "100%",
  },

  "oeuvre-a-traduire-frame-8": {
    alignItems: "flex-start",
    display: "flex",
    flex: "1",
    flexDirection: "column",
    flexGrow: "1",
    gap: "10px",
    justifyContent: "center",
    position: "relative",
  },

  "oeuvre-a-traduire-frame-9": {
    alignItems: "flex-start",
    alignSelf: "stretch",
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    gap: "7px",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },

  "oeuvre-a-traduire-description": {
    color: "var(--colors-base-black)",
    fontFamily: '"Poppins-SemiBold", Helvetica',
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: "-0.17px",
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
    width: "204px",
  },

  "oeuvre-a-traduire-description-2": {
    alignSelf: "stretch",
    color: "var(--colors-base-black)",
    fontFamily: '"Poppins-SemiBold", Helvetica',
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: "-0.17px",
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
  },
};

export const ArtworkToTranslateSelectionScreen = (): JSX.Element => {
  return (
    <div style={{ ...classes["mainDiv"] }} className="mainDiv">
      <div style={{ ...classes["oeuvre-a-traduire-overlap-group-wrapper"] }}>
        <div style={{ ...classes["oeuvre-a-traduire-overlap-group"] }}>
          <img
            style={{ ...classes["oeuvre-a-traduire-miroir-d'eau-chateau"] }}
            src="images/artworkToTranslateSelectionScreen/miroir-d'eau-château-nantes_photo.png"
            alt="Miroir d'eau chateau"
          />
          <div
            style={{
              ...classes["oeuvre-a-traduire-miroir-d'eau-chateau-2"],
            }}
          />
          <div style={{ ...classes["oeuvre-a-traduire-div-wrapper"] }}>
            <div style={{ ...classes["oeuvre-a-traduire-text-wrapper-3"] }}>
            Oeuvres à traduire
            </div>
          </div>
        </div>
      </div>
      <img
        style={{ ...classes["oeuvre-a-traduire-vector"] }}
        src="images/artworkToTranslateSelectionScreen/Vector 60.png"
        alt="Vector"
      />
      <img
        style={{ ...classes["oeuvre-a-traduire-img"] }}
        src="images/artworkToTranslateSelectionScreen/Vector 61.png"
        alt="Vector"
      />
      <div style={{ ...classes["oeuvre-a-traduire-frame-3"] }}>
        <div style={{ ...classes["oeuvre-a-traduire-frame-4"] }}>
          <div style={{ ...classes["oeuvre-a-traduire-text-wrapper-4"] }}>
            Chateau XXX
          </div>
          <div style={{ ...classes["oeuvre-a-traduire-frame-5"] }}>
            <div style={{ ...classes["oeuvre-a-traduire-frame-wrapper"] }}>
              <div style={{ ...classes["oeuvre-a-traduire-frame-6"] }}>
                <div style={{ ...classes["oeuvre-a-traduire-frame-7"] }}>
                  <div
                    style={{
                      ...classes["oeuvre-a-traduire-connect-button-wrapper"],
                    }}
                  >
                    <div
                      style={{
                        ...classes["oeuvre-a-traduire-connect-button"],
                      }}
                    >
                      <img
                        style={{ ...classes["oeuvre-a-traduire-image"] }}
                        src="images/artworkToTranslateSelectionScreen/image 17.png"
                        alt="château"
                      />
                    </div>
                  </div>
                  <div style={{ ...classes["oeuvre-a-traduire-frame-8"] }}>
                    <div style={{ ...classes["oeuvre-a-traduire-frame-9"] }}>
                      <p
                        style={{
                          ...classes["oeuvre-a-traduire-description"],
                        }}
                      >
                        La tapisserie de Charles X
                      </p>
                      <div
                        style={{
                          ...classes["translateButtonBox"],
                        }}
                        className="translateButtonBox"
                      >
                        <button
                          style={{
                            ...classes["translateButton"],
                          }}
                          onClick={() => {
                            return;
                          }}
                          className="translateButton"
                        >
                          Cliquer pour voir l'œuvre
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ ...classes["oeuvre-a-traduire-frame-wrapper"] }}>
              <div style={{ ...classes["oeuvre-a-traduire-frame-6"] }}>
                <div style={{ ...classes["oeuvre-a-traduire-frame-7"] }}>
                  <div
                    style={{
                      ...classes["oeuvre-a-traduire-connect-button-wrapper"],
                    }}
                  >
                    <div
                      style={{
                        ...classes["oeuvre-a-traduire-connect-button"],
                      }}
                    >
                      <img
                        style={{ ...classes["oeuvre-a-traduire-image"] }}
                        src="images/artworkToTranslateSelectionScreen/Frame 23395.png"
                        alt="château"
                      />
                    </div>
                  </div>
                  <div style={{ ...classes["oeuvre-a-traduire-frame-8"] }}>
                    <div style={{ ...classes["oeuvre-a-traduire-frame-9"] }}>
                      <div
                        style={{
                          ...classes["oeuvre-a-traduire-description-2"],
                        }}
                      >
                        Château sur bois
                      </div>
                      <div
                        style={{
                          ...classes["translateButtonBox"],
                        }}
                        className="translateButtonBox"
                      >
                        <button
                          style={{
                            ...classes["translateButton"],
                          }}
                          onClick={() => {
                            return;
                          }}
                          className="translateButton"
                        >
                          Cliquer pour voir l'œuvre
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ ...classes["oeuvre-a-traduire-frame-4"] }}>
          <div style={{ ...classes["oeuvre-a-traduire-text-wrapper-4"] }}>
            Chateau XXX
          </div>
          <div style={{ ...classes["oeuvre-a-traduire-frame-5"] }}>
            <div style={{ ...classes["oeuvre-a-traduire-frame-wrapper"] }}>
              <div style={{ ...classes["oeuvre-a-traduire-frame-6"] }}>
                <div style={{ ...classes["oeuvre-a-traduire-frame-7"] }}>
                  <div
                    style={{
                      ...classes["oeuvre-a-traduire-connect-button-wrapper"],
                    }}
                  >
                    <div
                      style={{
                        ...classes["oeuvre-a-traduire-connect-button"],
                      }}
                    >
                      <img
                        style={{ ...classes["oeuvre-a-traduire-image"] }}
                        src="images/artworkToTranslateSelectionScreen/image 17.png"
                        alt="tapisserie"
                      />
                    </div>
                  </div>
                  <div style={{ ...classes["oeuvre-a-traduire-frame-8"] }}>
                    <div style={{ ...classes["oeuvre-a-traduire-frame-9"] }}>
                      <p
                        style={{
                          ...classes["oeuvre-a-traduire-description"],
                        }}
                      >
                        La tapisserie de Charles X
                      </p>
                      <div
                        style={{
                          ...classes["translateButtonBox"],
                        }}
                        className="translateButtonBox"
                      >
                        <button
                          style={{
                            ...classes["translateButton"],
                          }}
                          onClick={() => {
                            return;
                          }}
                          className="translateButton"
                        >
                          Cliquer pour voir l'œuvre
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ ...classes["oeuvre-a-traduire-frame-wrapper"] }}>
              <div style={{ ...classes["oeuvre-a-traduire-frame-6"] }}>
                <div style={{ ...classes["oeuvre-a-traduire-frame-7"] }}>
                  <div
                    style={{
                      ...classes["oeuvre-a-traduire-connect-button-wrapper"],
                    }}
                  >
                    <div
                      style={{
                        ...classes["oeuvre-a-traduire-connect-button"],
                      }}
                    >
                      <img
                        style={{ ...classes["oeuvre-a-traduire-image"] }}
                        src="images/artworkToTranslateSelectionScreen/Frame 23395.png"
                        alt="château"
                      />
                    </div>
                  </div>
                  <div style={{ ...classes["oeuvre-a-traduire-frame-8"] }}>
                    <div style={{ ...classes["oeuvre-a-traduire-frame-9"] }}>
                      <div
                        style={{
                          ...classes["oeuvre-a-traduire-description-2"],
                        }}
                      >
                        Château sur bois
                      </div>
                      <div
                        style={{
                          ...classes["translateButtonBox"],
                        }}
                        className="translateButtonBox"
                      >
                        <button
                          style={{
                            ...classes["translateButton"],
                          }}
                          onClick={() => {
                            return;
                          }}
                          className="translateButton"
                        >
                          Cliquer pour voir l'œuvre
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ ...classes["oeuvre-a-traduire-frame-4"] }}>
          <div style={{ ...classes["oeuvre-a-traduire-text-wrapper-4"] }}>
            Chateau XXX
          </div>
          <div style={{ ...classes["oeuvre-a-traduire-frame-5"] }}>
            <div style={{ ...classes["oeuvre-a-traduire-frame-wrapper"] }}>
              <div style={{ ...classes["oeuvre-a-traduire-frame-6"] }}>
                <div style={{ ...classes["oeuvre-a-traduire-frame-7"] }}>
                  <div
                    style={{
                      ...classes["oeuvre-a-traduire-connect-button-wrapper"],
                    }}
                  >
                    <div
                      style={{
                        ...classes["oeuvre-a-traduire-connect-button"],
                      }}
                    >
                      <img
                        style={{ ...classes["oeuvre-a-traduire-image"] }}
                        src="images/artworkToTranslateSelectionScreen/image 17.png"
                        alt="tapisserie"
                      />
                    </div>
                  </div>
                  <div style={{ ...classes["oeuvre-a-traduire-frame-8"] }}>
                    <div style={{ ...classes["oeuvre-a-traduire-frame-9"] }}>
                      <p
                        style={{
                          ...classes["oeuvre-a-traduire-description"],
                        }}
                      >
                        La tapisserie de Charles X
                      </p>
                      <div
                        style={{
                          ...classes["translateButtonBox"],
                        }}
                        className="translateButtonBox"
                      >
                        <button
                          style={{
                            ...classes["translateButton"],
                          }}
                          onClick={() => {
                            return;
                          }}
                          className="translateButton"
                        >
                          Cliquer pour voir l'œuvre
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ ...classes["oeuvre-a-traduire-frame-wrapper"] }}>
              <div style={{ ...classes["oeuvre-a-traduire-frame-6"] }}>
                <div style={{ ...classes["oeuvre-a-traduire-frame-7"] }}>
                  <div
                    style={{
                      ...classes["oeuvre-a-traduire-connect-button-wrapper"],
                    }}
                  >
                    <div
                      style={{
                        ...classes["oeuvre-a-traduire-connect-button"],
                      }}
                    >
                      <img
                        style={{ ...classes["oeuvre-a-traduire-image"] }}
                        src="images/artworkToTranslateSelectionScreen/Frame 23395.png"
                        alt="château"
                      />
                    </div>
                  </div>
                  <div style={{ ...classes["oeuvre-a-traduire-frame-8"] }}>
                    <div style={{ ...classes["oeuvre-a-traduire-frame-9"] }}>
                      <div
                        style={{
                          ...classes["oeuvre-a-traduire-description-2"],
                        }}
                      >
                        Château sur bois
                      </div>
                      <div
                        style={{
                          ...classes["translateButtonBox"],
                        }}
                        className="translateButtonBox"
                      >
                        <button
                          style={{
                            ...classes["translateButton"],
                          }}
                          onClick={() => {
                            return;
                          }}
                          className="translateButton"
                        >
                          Cliquer pour voir l'œuvre
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ArtworkToTranslateSelectionScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default ArtworkToTranslateSelectionScreen;
