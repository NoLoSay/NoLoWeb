import React from 'react';
import "../styles/global.css";
import Head from "next/head";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./screen/home/Home";
import About from "./screen/about/About";
import ArtworksPage from "./screen/artworks/Artworks";
import ExhibitionsPage from "./screen/exhibitions/Exhibitions";

const AppRouter = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Or render null or any other placeholder content
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exhibitions" element={<ExhibitionsPage />} />
          <Route path="/artworks" element={<ArtworksPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;