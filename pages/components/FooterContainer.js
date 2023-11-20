const FooterContainer = () => {
  return (
    <div className="absolute bottom-[0px] left-[0px] w-[1920px] flex flex-col items-start justify-start text-left text-mini text-base-white font-poppins">
      <div className="bg-gray-300 w-[1920px] flex flex-col items-center justify-start py-[70px] px-[120px] box-border gap-[41px]">
        <div className="self-stretch flex flex-row items-start justify-between">
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[21px]">
            <div className="flex flex-row items-center justify-start gap-[9.46px]">
              <img
                className="relative w-[31.96px] h-[29.15px]"
                alt=""
                src="/images/logo/nologo.png"
              />
              <img
                className="relative w-[123.58px] h-[25.98px]"
                alt=""
                src="/images/logo/nolosay-white.png"
              />
            </div>
            <div className="relative inline-block w-[502px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[70px]">
            <div className="overflow-hidden flex flex-col items-start justify-start py-0 px-px gap-[16px]">
              <b className="relative">Informations</b>
              <div className="relative inline-block w-[130px]">
                Mentions légale
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon/full/communication--phone.png"
                />
                <div className="relative">02.97.67.80.87</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon/full/communication--mail.png"
                />
                <div className="relative">contact@nolosay.fr</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between text-2xs text-gray-100">
          <div className="relative">© 2023 NOLOSAY. Tous droits réservés.</div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
