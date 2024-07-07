import React from "react";
import "../styles/global.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "../node_modules/react-router-dom/dist/index";
import Layout from "./components/Layout/Layout";
import Home from "./screen/home/Home";
import ConnectionScreen from "./screen/authentificationSection/connection/ConnectionScreen";
import SubscriptionScreen from "./screen/authentificationSection/subscription/SubscriptionScreen";
import ArtworkToTranslateSelectionScreen from "./screen/creationSection/artworkToTranslateSelectionSection/ArtworkToTranslateSelectionScreen";
import About from "./screen/about/About";
import ArtworksPage from "./screen/artworks/Artworks";
import ExhibitionsPage from "./screen/exhibitions/Exhibitions";
import FindLocation from "./screen/findLocation/FindLocation";
import Location from "./screen/location/Location";
import ShowArtwork from "./screen/location/Artwork/Artwork";
import VideoAccess from "./screen/videoAccess/VideoAccess";
import Account from "./screen/account/Account";
import RecordVideo from "./screen/videoCaptureSection/RecordVideo";
import AccountSettings from "./screen/accountSettings/AccountSettings";
import ArtworkModificationPage from "./screen/artworkmodificationPage/ArtworkModificationPage";
import { UserProvider } from "../contexts/UserProvider";
import Sites from "./screen/site/Sites";
import ExhibitionModificationPage from "./screen/exhibitionModificationPage/exhibitionModificationPage";
import SiteModificationPage from "./screen/siteModificationPage/SiteModificationPage";
import ArtistPage from "./screen/artist/Artist";
import ArtistModificationPage from "./screen/artistModificationPage/ArtistModificationPage";

const AppRouter = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Or render null or any other placeholder content
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/images/logo/nologo.png" />
      </Head>
      <UserProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/connection" element={<ConnectionScreen />} />
              <Route path="/subscription" element={<SubscriptionScreen />} />

              <Route
                path="/tickets"
                element={<ArtworkToTranslateSelectionScreen />}
              />
              <Route
                path="/artworkmodifications"
                element={<ArtworkModificationPage />}
              />
              <Route path="/artworks" element={<ArtworksPage />} />
              <Route path="/videoAccess" element={<VideoAccess />} />
              <Route path="/location" element={<Location />} />
              <Route path="/account" element={<Account />} />

              <Route path="/places" element={<Sites />} />
              <Route path="/places/place-modifiaction-page" element={<SiteModificationPage />} />

              <Route path="/artists" element={<ArtistPage />} />
              <Route path="/artists/artists-modification-page" element={<ArtistModificationPage />} />

              <Route path="/places/exhibitions" element={<ExhibitionsPage />} />
              <Route path="/places/exhibitions/exhibition-modification-page" element={<ExhibitionModificationPage/>} />

              <Route
                path="/places/exhibitions/artworks"
                element={<ArtworksPage />}
              />
              <Route path="/places/exhibitions/artworks/artwork-modification-page" element={<ArtworkModificationPage />} />

              <Route path="/accountSettings" element={<AccountSettings />} />
              <Route path="/record" element={<RecordVideo />} />
              <Route path="/findlocation" element={<FindLocation />} />
              <Route path="/showartwork" element={<ShowArtwork />} />
            </Routes>
          </Layout>
        </Router>
      </UserProvider>
    </div>
  );
};

export default AppRouter;
