import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface FindVideoProps {}

const ImageSlider: React.FC<FindVideoProps> & {} = () => {
  const settings = {
    dots: true,
    speed: 700,
    slideToShow: 1,
    slideToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    autoplay: true,
  };

  const bannerImages: string[] = [
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/4d/46/f6/lisbon-district.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/33/ff/49/central-portugal.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/4d/43/e4/mannheim.jpg",
    "https://www.mallofistanbul.com.tr/assets/images/frontend/moi/MOI_Hakkimizda-1280x250.jpg",
  ];

  const styles = {
    container:
      "max-w-[1280px] max-h-[250px] border rounded-lg overflow-hidden p-0 relative",
  };

  return (
    <div className={`container ${styles["container"]}`}>
      <Slider {...settings}>
        {bannerImages.map((image, index) => (
          <img src={image} alt="" key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
