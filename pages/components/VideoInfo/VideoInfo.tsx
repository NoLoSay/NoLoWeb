import React from 'react';

const styles: { [key: string]: string } = {
  container_0: " space-y-3 font-bold ml-10",
  container_1: "text-line",
  container_2: "space-y-5 max-w-lg my-5",
  container_3: "flex items-center justify-between ",
  container_4: "flex h-80 w-96 rounded-lg shadow-lg"
};

export type SpecInfos = {
  [key: string]: string;
};

type VideoProps = {
  artImage?: string;
  spec?: SpecInfos;
  description?: string;
};

const Spec = ({ specInfos }: { specInfos: SpecInfos }) => {
  return (
    <div className={`container_0 ${styles.container_0}`}>
      {Object.entries(specInfos).map(([key, value]) => (
        <div key={key} className={`container_1 ${styles.container_1}`}>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

const VideoInfo = ({artImage, spec = {}, description} : VideoProps) => {
  return (
    <div className={`container_2 ${styles.container_2}`}>
      <div className={`container_3 ${styles.container_3}`}>
        <img src={artImage} alt="Image" className={`container_4 ${styles.container_4}`}/>
        <Spec specInfos={spec} />
      </div>
      <div>{description}</div>
    </div>
  );
};

export default VideoInfo;
