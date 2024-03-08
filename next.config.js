module.exports = {
    async redirects() {
      return [
        {
          source: "/findvideo",
          destination: "/screen/find_video/FindVideo",
          permanent: true,
        },
        {
          source: "/home",
          destination: "/screen/home/Home",
          permanent: true,
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