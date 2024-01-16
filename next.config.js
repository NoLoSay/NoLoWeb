module.exports = {
    async redirects() {
      return [
        {
          source: "/about",
          destination: "/screen/about/About",
          permanent: true,
        },
        {
          source: "/home",
          destination: "/screen/home/Home",
          permanent: true,
        },
        {
          source: "/videoAccess",
          destination: "/screen/videoAccess/VideoAccess",
          permanent: true,
        },
        {
          source: "/location",
          destination: "/screen/location/Location",
          permanent: true,
        },
        {
          source: "/account",
          destination: "/screen/account/Account",
          permanent: true,
        },
      ];
    },
  };