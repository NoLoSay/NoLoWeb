module.exports = {
    async redirects() {
      return [
        {
          source: "/findlocation",
          destination: "/screen/findLocation/FindLocation",
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
          permanent: true
        },
        {
          source: "/connection",
          destination: "/screen/authenticationSection/connection/ConnectionScreen",
          permanent: true
        },
        {
          source: "/subscription",
          destination: "/screen/authenticationSection/subscription/SubscriptionScreen",
          permanent: true
        },
        {
          source: "/tickets",
          destination: "/screen/creationSection/artworkToTranslateSelectionSection/ArtworkToTranslateSelectionScreen",
          permanent: true
        },
        {
          source: "/record",
          destination: "/screen/videoCaptureSection/RecordVideo",
          permanent: true,
        },
        {
          source: "/about",
          destination: "/screen/about/About",
          permanent: true,
        },
      ];
    },
  };