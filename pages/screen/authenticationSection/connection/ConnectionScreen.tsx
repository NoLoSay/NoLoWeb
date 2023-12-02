import React, { CSSProperties } from "react";
import Layout from "../../../components/Layout";
// import { EyeClosed } from "./EyeClosed";
// import { Lock } from "./Lock";
// import { MentionSquare } from "./MentionSquare";
// import { SocialButton } from "./SocialButton";

const classes: { [key: string]: CSSProperties } = {
  frame: {
    alignItems: "center",
    display: "inline-flex",
    flexDirection: "column",
    gap: "50px",
    justifyContent: "center",
    padding: "50px 0px",
    position: "relative",
  },

  div: {
    alignItems: "center",
    backgroundColor: "var(--colors-gray-100)",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    height: "660px",
    padding: "40px",
    position: "relative",
    width: "660px",
  },

  "div-2": {
    alignItems: "center",
    display: "inline-flex",
    flex: "0 0 auto",
    flexDirection: "column",
    gap: "15px",
    position: "relative",
  },

  "black-logo": {
    height: "101.89px",
    position: "relative",
    width: "110px",
  },

  "div-3": {
    alignItems: "center",
    display: "inline-flex",
    flex: "0 0 auto",
    flexDirection: "column",
    position: "relative",
  },

  "text-wrapper": {
    color: "var(--colors-base-black)",
    fontFamily: '"Poppins-Bold", Helvetica',
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "0",
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
    width: "fit-content",
  },

  "text-wrapper-2": {
    color: "#646464",
    fontFamily: '"Poppins-Regular", Helvetica',
    fontSize: "14px",
    fontWeight: "400",
    letterSpacing: "0",
    lineHeight: "normal",
    position: "relative",
    width: "fit-content",
  },

  "div-4": {
    alignItems: "center",
    display: "inline-flex",
    flex: "0 0 auto",
    flexDirection: "column",
    gap: "26px",
    position: "relative",
  },

  "div-5": {
    alignItems: "flex-start",
    display: "inline-flex",
    flex: "0 0 auto",
    flexDirection: "column",
    gap: "20px",
    position: "relative",
  },

  "div-6": {
    alignItems: "center",
    backgroundColor: "var(--colors-gray-50)",
    borderRadius: "10px",
    display: "flex",
    flex: "0 0 auto",
    gap: "20px",
    padding: "14px 15px",
    position: "relative",
    width: "350px",
  },

  "icon-instance-node": {
    height: "18px !important",
    position: "relative",
    width: "18px !important",
  },

  "text-wrapper-3": {
    color: "#000000",
    flex: "1",
    fontFamily: '"Poppins-Regular", Helvetica',
    fontSize: "12px",
    fontWeight: "400",
    letterSpacing: "0",
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
  },

  "text-wrapper-4": {
    alignSelf: "stretch",
    color: "#000000",
    flex: "1",
    fontFamily: '"Poppins-Regular", Helvetica',
    fontSize: "12px",
    fontWeight: "400",
    letterSpacing: "0",
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
  },

  "s-inscrire-wrapper": {
    alignItems: "center",
    backgroundColor: "var(--colors-yellow-300)",
    borderRadius: "12px",
    boxShadow: "var(--yellow)",
    display: "flex",
    flex: "0 0 auto",
    gap: "10px",
    padding: "10px",
    position: "relative",
    width: "230px",
  },

  "s-inscrire": {
    color: "#000000",
    flex: "1",
    fontFamily: '"Poppins-SemiBold", Helvetica',
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "0",
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
    textAlign: "center",
  },

  "other-connexions": {
    alignItems: "center",
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    gap: "19px",
    position: "relative",
    width: "350px",
  },

  "div-7": {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flex: "0 0 auto",
    justifyContent: "space-between",
    padding: "0px 25px",
    position: "relative",
    width: "100%",
  },

  line: {
    height: "1px",
    objectFit: "cover",
    position: "relative",
    width: "101px",
  },

  "text-wrapper-5": {
    color: "#000000",
    fontFamily: '"Poppins-Light", Helvetica',
    fontSize: "12px",
    fontWeight: "300",
    letterSpacing: "0",
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
    width: "fit-content",
  },

  group: {
    height: "36px",
    position: "relative",
    width: "174.84px",
  },

  "social-button-instance": {
    borderRadius: "10px !important",
    left: "133px !important",
    position: "absolute",
    top: "0 !important",
    width: "42px !important",
  },

  "design-component-instance-node": {
    height: "24px !important",
    width: "24px !important",
  },

  "social-button-2": {
    height: "28px !important",
    marginLeft: "-1.19px !important",
    marginRight: "-1.19px !important",
    position: "relative",
    width: "28px !important",
  },

  "social-button-3": {
    borderRadius: "10px !important",
    left: "0 !important",
    position: "absolute",
    top: "0 !important",
    width: "42px !important",
  },

  "social-button-4": {
    borderRadius: "10px !important",
    left: "67px !important",
    position: "absolute",
    top: "0 !important",
    width: "42px !important",
  },

  "social-button-5": {
    height: "28px !important",
    marginLeft: "-1.19px !important",
    marginRight: "-1.19px !important",
    width: "28px !important",
  },

  "pas-de-compte-créer": {
    color: "var(--colors-gray-300)",
    fontFamily: '"Poppins-Regular", Helvetica',
    fontSize: "13px",
    fontWeight: "400",
    letterSpacing: "0",
    lineHeight: "normal",
    position: "relative",
    textAlign: "center",
    width: "fit-content",
  },

  span: {
    color: "#1e303a",
    fontFamily: '"Poppins-Regular", Helvetica',
    fontSize: "13px",
    fontWeight: "400",
    letterSpacing: "0",
  },

  "text-wrapper-6": {
    fontFamily: '"Poppins-Bold", Helvetica',
    fontWeight: "700",
  },

  "div-8": {
    alignItems: "center",
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    gap: "20px",
    padding: "80px 243px",
    position: "relative",
    width: "1440px",
  },

  "div-wrapper": {
    alignItems: "center",
    display: "inline-flex",
    flex: "0 0 auto",
    flexDirection: "column",
    gap: "3px",
    justifyContent: "center",
    position: "relative",
  },

  "text-wrapper-7": {
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

  "div-9": {
    alignItems: "flex-start",
    alignSelf: "stretch",
    display: "flex",
    flex: "0 0 auto",
    gap: "21px",
    position: "relative",
    width: "100%",
  },

  rectangle: {
    backgroundColor: "var(--colors-gray-50)",
    borderRadius: "10px",
    flex: "1",
    flexGrow: "1",
    height: "119px",
    position: "relative",
  },

  "div-10": {
    alignItems: "flex-start",
    backgroundColor: "var(--colors-gray-300)",
    borderRadius: "20px",
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    padding: "50px 162px",
    position: "relative",
    width: "1280px",
  },

  "text-wrapper-8": {
    alignSelf: "stretch",
    color: "var(--colors-yellow-300)",
    fontFamily: '"Poppins-SemiBold", Helvetica',
    fontSize: "25px",
    fontWeight: "600",
    letterSpacing: "0",
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
  },

  "div-11": {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flex: "0 0 auto",
    gap: "20px",
    position: "relative",
    width: "100%",
  },

  "frame-wrapper": {
    alignItems: "flex-start",
    backgroundColor: "var(--colors-base-white)",
    borderRadius: "20px",
    display: "flex",
    flex: "1",
    flexDirection: "column",
    flexGrow: "1",
    gap: "10px",
    padding: "20px",
    position: "relative",
  },

  "div-12": {
    alignItems: "flex-start",
    alignSelf: "stretch",
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    gap: "16px",
    position: "relative",
    width: "100%",
  },

  "div-13": {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flex: "0 0 auto",
    gap: "16px",
    position: "relative",
    width: "100%",
  },

  ellipse: {
    height: "60px",
    objectFit: "cover",
    position: "relative",
    width: "60px",
  },

  "div-14": {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    gap: "8px",
    position: "relative",
  },

  "text-wrapper-9": {
    alignSelf: "stretch",
    color: "var(--colors-base-black)",
    fontFamily: '"Poppins-SemiBold", Helvetica',
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: "0",
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
  },

  img: {
    flex: "0 0 auto",
    position: "relative",
  },

  p: {
    alignSelf: "stretch",
    color: "var(--colors-base-black)",
    fontFamily: '"Poppins-Italic", Helvetica',
    fontSize: "15px",
    fontStyle: "italic",
    fontWeight: "400",
    letterSpacing: "0",
    lineHeight: "normal",
    position: "relative",
  },

  "frame-wrapper-2": {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },

  "div-15": {
    alignItems: "flex-start",
    display: "inline-flex",
    flex: "0 0 auto",
    gap: "16px",
    position: "relative",
  },

  "vectorName=-wrapper": {
    backgroundColor: "var(--colors-gray-100)",
    borderRadius: "15.5px",
    height: "31px",
    position: "relative",
    width: "31px",
  },

  vector: {
    height: "14px",
    left: "11px",
    position: "absolute",
    top: "9px",
    width: "8px",
  },

  "img-wrapper": {
    backgroundColor: "var(--colors-blue-color)",
    borderRadius: "15.5px",
    height: "31px",
    position: "relative",
    width: "31px",
  },

  "vector-2": {
    height: "14px",
    left: "12px",
    position: "absolute",
    top: "9px",
    width: "8px",
  },

  image: {
    height: "105px",
    left: "1013px",
    objectFit: "cover",
    position: "absolute",
    top: "-27px",
    width: "105px",
  },
};

export const ConnectionScreen = (): JSX.Element => {
  return (
    <div style={{ ...classes["frame"] }}>
      <div style={{ ...classes["div"] }}>
        <div style={{ ...classes["div-2"] }}>
          <img
            style={{ ...classes["black-logo"] }}
            alt="Black logo"
            src="black-logo-3.png"
          />
          <div style={{ ...classes["div-3"] }}>
            <div style={{ ...classes["text-wrapper"] }}>Se connecter</div>
            <div style={{ ...classes["text-wrapper-2"] }}>
              Connecte-toi pour continuer
            </div>
          </div>
        </div>
        <div style={{ ...classes["div-4"] }}>
          <div style={{ ...classes["div-5"] }}>
            <div style={{ ...classes["div-6"] }}>
              {/* <MentionSquare style={{...classes['icon-instance-node']}}/> */}
              <div style={{ ...classes["text-wrapper-3"] }}>
                exemple@gmail.com
              </div>
            </div>
            <div style={{ ...classes["div-6"] }}>
              {/* <Lock style={{...classes['icon-instance-node']}}/> */}
              <div style={{ ...classes["text-wrapper-4"] }}>************</div>
              {/* <EyeClosed style={{...classes['icon-instance-node']}}/> */}
            </div>
          </div>
          <div style={{ ...classes["s-inscrire-wrapper"] }}>
            <div style={{ ...classes["s-inscrire"] }}>Me connecter</div>
          </div>
        </div>
        <div style={{ ...classes["other-connexions"] }}>
          <div style={{ ...classes["div-7"] }}>
            <img style={{ ...classes["line"] }} alt="Line" src="line-4.svg" />
            <div style={{ ...classes["text-wrapper-5"] }}>ou avec</div>
            <img style={{ ...classes["line"] }} alt="Line" src="line-5.svg" />
          </div>
          <div style={{ ...classes["group"] }}>
            {/* <SocialButton
              style={{...classes['social-button-instance']}}
              concreteComponentNodePlatformFacebookClassName="design-component-instance-node"
              concreteComponentNodeSubtract="subtract-2.svg"
              label={false}
              social="facebook"
              state="pressed"
              theme="brand"
            />
            <SocialButton
              style={{...classes['social-button-3']}}
              companyLogosColor="#FDC80F"
              companyLogosStyleOverrideClassName="social-button-2"
              label={false}
              social="google"
              state="pressed"
              theme="brand"
            />
            <SocialButton
              style={{...classes['social-button-4']}}
              concreteComponentNodePlatformFacebookClassName="social-button-5"
              concreteComponentNodeUnion="union-2.svg"
              label={false}
              social="apple"
              state="pressed"
              theme="brand"
            /> */}
          </div>
        </div>
        <p style={{ ...classes["pas-de-compte-créer"] }}>
          <span style={{ ...classes["span"] }}>Pas de compte ? </span>
          <span style={{ ...classes["text-wrapper-6"] }}>Créer un compte</span>
        </p>
      </div>
      <div style={{ ...classes["div-8"] }}>
        <div style={{ ...classes["div-wrapper"] }}>
          <div style={{ ...classes["text-wrapper-7"] }}>
            Une communauté engagée
          </div>
        </div>
        <div style={{ ...classes["div-9"] }}>
          <div style={{ ...classes["rectangle"] }} />
          <div style={{ ...classes["rectangle"] }} />
          <div style={{ ...classes["rectangle"] }} />
          <div style={{ ...classes["rectangle"] }} />
          <div style={{ ...classes["rectangle"] }} />
          <div style={{ ...classes["rectangle"] }} />
        </div>
      </div>
      <div style={{ ...classes["div-10"] }}>
        <div style={{ ...classes["text-wrapper-8"] }}>
          Avis de la communauté
        </div>
        <div style={{ ...classes["div-11"] }}>
          <div style={{ ...classes["frame-wrapper"] }}>
            <div style={{ ...classes["div-12"] }}>
              <div style={{ ...classes["div-13"] }}>
                <img
                  style={{ ...classes["ellipse"] }}
                  alt="Ellipse"
                  src="ellipse-748.png"
                />
                <div style={{ ...classes["div-14"] }}>
                  <div style={{ ...classes["text-wrapper-9"] }}>
                    Jaylon Vaccaro
                  </div>
                  <img
                    style={{ ...classes["img"] }}
                    alt="Frame"
                    src="frame-74.svg"
                  />
                </div>
              </div>
              <p style={{ ...classes["p"] }}>
                The majority have suffered alteration in some form, by injected
                humour, or randomised words which don
              </p>
            </div>
          </div>
          <div style={{ ...classes["frame-wrapper"] }}>
            <div style={{ ...classes["div-12"] }}>
              <div style={{ ...classes["div-13"] }}>
                <img
                  style={{ ...classes["ellipse"] }}
                  alt="Ellipse"
                  src="image.png"
                />
                <div style={{ ...classes["div-14"] }}>
                  <div style={{ ...classes["text-wrapper-9"] }}>
                    Jaylon Vaccaro
                  </div>
                  <img
                    style={{ ...classes["img"] }}
                    alt="Frame"
                    src="image.svg"
                  />
                </div>
              </div>
              <p style={{ ...classes["p"] }}>
                The majority have suffered alteration in some form, by injected
                humour, or randomised words which don
              </p>
            </div>
          </div>
          <div style={{ ...classes["frame-wrapper"] }}>
            <div style={{ ...classes["div-12"] }}>
              <div style={{ ...classes["div-13"] }}>
                <img
                  style={{ ...classes["ellipse"] }}
                  alt="Ellipse"
                  src="ellipse-748-2.png"
                />
                <div style={{ ...classes["div-14"] }}>
                  <div style={{ ...classes["text-wrapper-9"] }}>
                    Jaylon Vaccaro
                  </div>
                  <img
                    style={{ ...classes["img"] }}
                    alt="Frame"
                    src="frame-74-2.svg"
                  />
                </div>
              </div>
              <p style={{ ...classes["p"] }}>
                The majority have suffered alteration in some form, by injected
                humour, or randomised words which don
              </p>
            </div>
          </div>
        </div>
        <div style={{ ...classes["frame-wrapper-2"] }}>
          <div style={{ ...classes["div-15"] }}>
            <div style={{ ...classes["vector-wrapper"] }}>
              <img
                style={{ ...classes["vector"] }}
                alt="Vector"
                src="vector-63.svg"
              />
            </div>
            <div style={{ ...classes["img-wrapper"] }}>
              <img
                style={{ ...classes["vector-2"] }}
                alt="Vector"
                src="vector-63-2.svg"
              />
            </div>
          </div>
        </div>
        <img style={{ ...classes["image"] }} alt="Image" src="image-18.png" />
      </div>
    </div>
  );
};

ConnectionScreen.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ConnectionScreen;
