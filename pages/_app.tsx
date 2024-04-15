import React from "react";
import "../styles/global.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "../node_modules/react-router-dom/dist/index";
import Layout from "./components/Layout/Layout";
import Home from "./screen/home/Home";
import ConnectionScreen from "./screen/authenticationSection/connection/ConnectionScreen";
import SubscriptionScreen from "./screen/authenticationSection/subscription/SubscriptionScreen";
import ArtworkToTranslateSelectionScreen from "./screen/creationSection/artworkToTranslateSelectionSection/ArtworkToTranslateSelectionScreen";
import About from "./screen/about/About";
import ArtworksPage from "./screen/artworks/Artworks";
import ExhibitionsPage from "./screen/exhibitions/Exhibitions";
import VideoAccess from "./screen/videoAccess/VideoAccess";
import Location from "./screen/location/Location";
import Account from "./screen/account/Account";
import RecordVideo from "./screen/videoCaptureSection/RecordVideo";

const AppRouter = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Or render null or any other placeholder content
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/connection" element={<ConnectionScreen />} />
          <Route path="/subscription" element={<SubscriptionScreen />} />
          <Route path="/exhibitions" element={<ExhibitionsPage />} />
          <Route
            path="/tickets"
            element={<ArtworkToTranslateSelectionScreen />}
          />
          <Route path="/artworks" element={<ArtworksPage />} />
          <Route path="/videoAccess" element={<VideoAccess />} />
          <Route path="/location" element={<Location />} />
          <Route path="/account" element={<Account />} />
          <Route path="/record" element={<RecordVideo />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
