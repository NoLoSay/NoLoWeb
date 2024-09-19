// module.exports = {
//     async redirects() {
//       return [
//         {
//           source: "/findvideo",
//           destination: "/screen/find_video/FindVideo",
//           permanent: true,
//         },
//         {
//           source: "/home",
//           destination: "/screen/home/Home",
//           permanent: true,
//         },
//         {
//           source: "/videoAccess",
//           destination: "/screen/videoAccess/VideoAccess",
//           permanent: true,
//         },
//         {
//           source: "/location",
//           destination: "/screen/location/Location",
//           permanent: true,
//         },
//         {
//           source: "/account",
//           destination: "/screen/account/Account",
//           permanent: true
//         },
//         {
//           source: "/connection",
//           destination: "/screen/authenticationSection/connection/ConnectionScreen",
//           permanent: true
//         },
//         {
//           source: "/subscription",
//           destination: "/screen/authenticationSection/subscription/SubscriptionScreen",
//           permanent: true
//         },
//         {
//           source: "/tickets",
//           destination: "/screen/creationSection/artworkToTranslateSelectionSection/ArtworkToTranslateSelectionScreen",
//           permanent: true
//         },
//         {
//           source: "/record",
//           destination: "/screen/videoCaptureSection/RecordVideo",
//           permanent: true,
//         },
//         {
//           source: "/about",
//           destination: "/screen/about/About",
//           permanent: true,
//         },
//       ];
//     },
//   };

const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'src/pages/components');
    config.resolve.alias['@screen'] = path.join(__dirname, 'src/pages/screen');
    config.resolve.alias['@helpers'] = path.join(__dirname, 'src/helpers');
    config.resolve.alias['@global'] = path.join(__dirname, 'src/global');
    config.resolve.alias['@stories'] = path.join(__dirname, 'stories');
    config.resolve.alias['@tests'] = path.join(__dirname, 'tests');
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
    return config;
  },
};

