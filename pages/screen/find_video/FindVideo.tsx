import React from 'react';
import Layout from "../../components/Layout";
import ImageSlider from "./Views/List/ImageSlider";
import SearchBar from "./SearchBar";
import PlaceList from './Views/List/PlaceList';

interface FindVideoProps {}

const FindVideo: React.FC<FindVideoProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
  return (
    <div className="absolute top-[120px] left-[0px] flex flex-col items-center justify-center">
      <SearchBar />
    </div>
  );
};

FindVideo.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default FindVideo;
