import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cam from "../../assets/cam.svg";
import gallery1 from "../../assets/gallery (1).webp";
import gallery2 from "../../assets/gallery (2).webp";
import gallery3 from "../../assets/gallery (3).webp";
import gallery4 from "../../assets/gallery (4).webp";
import gallery5 from "../../assets/gallery (5).webp";
import gallery6 from "../../assets/gallery (6).webp";
import gallery7 from "../../assets/gallery (7).webp";
import gallery8 from "../../assets/gallery (8).webp";
import gallery9 from "../../assets/gallery (9).webp";
import gallery10 from "../../assets/gallery (10).webp";
import gallery12 from "../../assets/gallery (12).webp";

export default function Gallery() {
  const [isFilmStripOpen, setFilmStripOpen] = useState(false);
  const cameraRef = useRef(null);

  const handleCameraClick = () => {
    setFilmStripOpen(true);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 500,
    cssEase: "ease",
    lazyLoad: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="h-[100vh] overflow-x-hidden">
        {isFilmStripOpen && (
          <div class="filmStrip-wrapper">
            <div
              className="flex justify-center"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="film-strip w-full max-h-min">
                <Slider {...settings}>
                  <div className="film-frame">
                    <img src={gallery1} alt="gallery1"></img>
                  </div>
                  <div className="film-frame">
                    <img src={gallery2} alt="image2"></img>
                  </div>
                  <div className="film-frame">
                    <img src={gallery3} alt="image3"></img>
                  </div>
                  <div className="film-frame">
                    <img src={gallery4} alt="iamge4"></img>
                  </div>
                  <div className="film-frame">
                    <img src={gallery5} alt="image5"></img>
                  </div>
                  <div className="film-frame">
                    <img src={gallery6} alt="image5"></img>
                  </div>
                  <div className="film-frame">
                    <img src={gallery7} alt="image5"></img>
                  </div>
                  <div className="film-frame">
                    <img src={gallery8} alt="image5"></img>
                  </div>
                  <div className="film-frame">
                    <img src={gallery9} alt="image5"></img>
                  </div>
                  <div className="film-frame">
                    <img src={gallery10} alt="image5"></img>
                  </div>
                  <div className="film-frame">
                    <img src={gallery12} alt="image5"></img>
                  </div>
                </Slider>
              </div>
            </div>

            <div data-aos="fade-up">
              <p className="text-3xl text-[#a52a5b] font-tangerine font-bold text-center mt-10 p-5">
                Unforgettable moments with you — being with you always makes me
                so happy.
              </p>

              <p
                className="text-center text-[#a52a5b] text-fredoka mt-10 underline cursor-pointer"
                onClick={() => setFilmStripOpen(false)}
              >
                close
              </p>
            </div>
          </div>
        )}

        {!isFilmStripOpen && (
          <div
            className="flex flex-col justify-center items-center w-full h-full"
            ref={cameraRef}
            data-aos="fade-up"
          >
            <p className=" text-center text-2xl text-[#e73a7f] font-fredoka">
              click me
            </p>
            <div className="relative inline-block" onClick={handleCameraClick}>
              <img src={Cam} id="camera" alt="camera" width="200px" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
