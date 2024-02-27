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
      ];
    },
  };