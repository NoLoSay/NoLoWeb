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
        source: "/connection",
        destination: "/screen/authenticationSection/connection/ConnectionScreen",
        permanent: true
      }
    ];
  },
};
