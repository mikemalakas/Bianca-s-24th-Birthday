import { useRef, useState } from "react";

export default function Cake({ candleClick }) {
  const flameRef = useRef(null);
  const cakeRef = useRef(null);
  const fadeCandleFire = () => {
    const flame = flameRef.current;
    const cake = cakeRef.current;
    flame.style.animation = "fadeOut 0.5s forwards";
  };
  return (
    <>
      <section className="h-[100vh] flex flex-col justify-center items-center">
        <div className="mb-[150px]">
          <p className="text-center text-2xl font-fredoka text-[#E73a7f]">
            blow the candle
          </p>
          <div className="cake-body" ref={cakeRef}>
            <div className="layer f1">
              <div className="spot-group sg1">
                <div className="spot s1"></div>
                <div className="spot s2"></div>
                <div className="spot s3"></div>
              </div>
              <div className="spot-group sg2">
                <div className="spot s1"></div>
                <div className="spot s2"></div>
              </div>
            </div>
            <div className="layer f2">
              <div className="spot-group sg3">
                <div className="spot s1"></div>
                <div className="spot s2"></div>
              </div>
              <div className="spot-group sg4">
                <div className="spot s1"></div>
                <div className="spot s2"></div>
                <div className="spot s3"></div>
              </div>
            </div>
            <div className="layer f3">
              <div className="spot-group sg5">
                <div className="spot s1"></div>
                <div className="spot s2"></div>
                <div className="spot s3"></div>
              </div>
            </div>
            <div className="layer f4">
              <div className="drip-ctn">
                <div className="drip d1"></div>
                <div className="drip d2"></div>
                <div className="drip d3"></div>
                <div className="drip d4"></div>
                <div className="drip d5"></div>
                <div className="drip d6"></div>
                <div className="drip d7"></div>
                <div className="drip d8"></div>
                <div className="drip d9"></div>
                <div></div>
                <div
                  className="candle-ctn"
                  onClick={() => {
                    candleClick();
                    fadeCandleFire();
                  }}
                >
                  <div className="candle c1">
                    <div className="c-base"></div>
                    <div className="wick"></div>
                    <div className="flame" ref={flameRef}></div>
                    <div className="highlight"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
