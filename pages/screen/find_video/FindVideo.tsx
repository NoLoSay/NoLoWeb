import React from 'react';
import Layout from "../../components/Layout";
import SearchBar from "./SearchBar";

interface FindVideoProps {}

const styles: { [key: string]: string } = {
  mainDiv:"relative w-full flex flex-col items-center justify-center gap-y-5",
}

const FindVideo: React.FC<FindVideoProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
  return (
    <div className={`findVideodiv ${styles["mainDiv"]} `}>
      <SearchBar />
    </div>
  );
};

FindVideo.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default FindVideo;
