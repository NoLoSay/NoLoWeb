import React from "react";
import "@styles/global.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "../../node_modules/react-router-dom/dist/index";
import Layout from "@components/Layout/Layout";
import Home from "@screen/home/Home";
import ConnectionScreen from "@screen/authenticationSection/connection/ConnectionScreen";
import SubscriptionScreen from "@screen/authenticationSection/subscription/SubscriptionScreen";
import ArtworkToTranslateSelectionScreen from "@screen/creationSection/artworkToTranslateSelectionSection/ArtworkToTranslateSelectionScreen";
import About from "@screen/about/About";
import ArtworksPage from "@screen/artworks/Artworks";
import ExhibitionsPage from "@screen/exhibitions/Exhibitions";
import FindLocation from "@screen/findSite/FindSite";
import Location from "@screen/findExhibition/findExhibition";
import ShowArtwork from "@screen/findArtwork/findArtwork";
import VideoAccess from "@screen/videoAccess/VideoAccess";
import Account from "@screen/account/Account";
import RecordVideo from "@screen/videoCaptureSection/RecordVideo";
import AccountSettings from "@screen/accountSettings/AccountSettings";
import ArtworkModificationPage from "@screen/artworkmodificationPage/ArtworkModificationPage";
import { UserProvider } from "@global/contexts/UserProvider";
import Sites from "@screen/site/Sites";
import ExhibitionModificationPage from "@screen/exhibitionModificationPage/exhibitionModificationPage";
import SiteModificationPage from "@screen/siteModificationPage/SiteModificationPage";
import ChangePassword from "@screen/authenticationSection/ChangePassword/ChangePassword";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import ArtistModificationPage from "@screen/artistModificationPage/ArtistModificationPage";
import ArtistPage from "@screen/artist/Artist";
import MyVideos from "@screen/myvideos/MyVideos";


const AppRouter = (): JSX.Element => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Or render null or any other placeholder content
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  })

  return (
    <div>
      <Head>
        <link rel="icon" href="/images/logo/nologo.png" />
      </Head>
      <UserProvider>
       <QueryClientProvider client={queryClient}>
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
              <Route path="/places/artworks" element={<ArtworksPage />} />
              <Route path="/account/artworks" element={<ArtworksPage />} />

              <Route path="/videoAccess" element={<VideoAccess />} />
              <Route path="/location" element={<Location />} />
              <Route path="/account" element={<Account />} />
              <Route path="/myvideos" element={<MyVideos />} />

              <Route path="/changePassword" element={<ChangePassword />} />

              <Route path="/artists" element={<ArtistPage />} />
              <Route path="/artists/artists-modification-page" element={<ArtistModificationPage />} />
              <Route path="/artistModification" element={<ArtistModificationPage/>} />

              <Route path="/places" element={<Sites />} />
              <Route
                path="/places/modificationPlace"
                element={<SiteModificationPage />}
              />

              <Route path="/places/exhibitions" element={<ExhibitionsPage />} />
              <Route
                path="/places/exhibitions/exhibition-modification-page"
                element={<ExhibitionModificationPage />}
              />

                <Route
                  path="/places/exhibitions/artworks"
                  element={<ArtworksPage />}
                />
                <Route
                  path="/places/exhibitions/artworks/artworkModification"
                  element={<ArtworkModificationPage />}
                />

              <Route path="/accountSettings" element={<AccountSettings />} />
              <Route path="/record" element={<RecordVideo />} />
              <Route path="/findlocation" element={<FindLocation />} />
              <Route path="/showartwork" element={<ShowArtwork />} />
            </Routes>
          </Layout>
        </Router>
        </QueryClientProvider>
      </UserProvider>
    </div>
  );
};

export default AppRouter;
