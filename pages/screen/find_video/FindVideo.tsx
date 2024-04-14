import Layout from "../../components/Layout";
import React, { useState }  from 'react';
import ImageSlider from "./Views/List/ImageSlider";
import PlaceList from './Views/List/PlaceList';
import Map from'./Views/Map/Map';
import FilterPage from "./Views/List/Filter";
import SearchBar from "./Views/SearchBar";

const DEFAULT_CENTER: [number, number] = [47.216671, -1.55];
const DEFAULT_WIDTH = 400;
const DEFAULT_HEIGHT = 500;

interface FindVideoProps {}

const styles: { [key: string]: string } = {
  mainDiv:"flex justify-center items-center pt-4 ",

  mapButton: "cursor-pointer pt-1.5 px-2.5 pb-[7px] bg-base-white rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-yellow-300 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-goldenrod",
  mapButtonText: "relative text-2xs tracking-[-0.08px] leading-[16px] font-poppins text-yellow-300 text-left",
  mapIcon: "h-[31px] w-[31px] relative overflow-hidden shrink-0",
}

const FindVideo: React.FC<FindVideoProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
  const [currentDiv, setCurrentDiv] = useState<'ListView' | 'MapView'>('ListView');
    const [buttonText, setButtonText] = useState('Voir la carte');
    const [buttonIcon, setButtonIcon] = useState('/icon/search/MapIcon.png');

    const toggleDiv = () => {
        console.log('Toggle Div function called');
        setCurrentDiv(currentDiv === 'ListView' ? 'MapView' : 'ListView');
        if (currentDiv === 'ListView') {
            setButtonText('Voir la liste');
            setButtonIcon('/icon/search/ListIcon.png');
          } else {
            setButtonText('Voir la carte');
            setButtonIcon('/icon/search/MapIcon.png');
          }
      };   
  return (
    <div>
      <div className={`findVideodiv ${styles["mainDiv"]} `}>
        <div>
          <SearchBar>
              <div>
                <button className={styles.mapButton} onClick={toggleDiv}>
                    <div className={styles.mapButtonText}>
                        {buttonText}
                    </div>
                    <img
                        className={styles.mapIcon}
                        alt=""
                        src={buttonIcon}
                    />
                </button>
              </div>
            </SearchBar>
          {currentDiv === 'ListView' && (
            <div className="pt-10">
              <ImageSlider/>
              <FilterPage />
              <PlaceList/>
            </div>
          )}
          {currentDiv === 'MapView' && (
            <div className="pt-4 pb-4">
              <Map width={DEFAULT_WIDTH} height={DEFAULT_HEIGHT} center={DEFAULT_CENTER}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FindVideo.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default FindVideo;
