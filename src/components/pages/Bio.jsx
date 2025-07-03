import beaHat from "../../assets/bea-hat.png";
import babyBea from "../../assets/babty-bea.png";
import { useState } from "react";

export default function Bio() {
  const [babyBeaVisible, setBabyBeaVisible] = useState(false);
  const handleClick = () => {
    if (babyBeaVisible) {
      setBabyBeaVisible(false);
    } else {
      setBabyBeaVisible(true);
    }
  };
  return (
    <>
      <section className="lg:h-[100vh] p-5 lg:flex items-center">
        <div className="h-[350px] md:h-auto ">
          {!babyBeaVisible && (
            <div
              className="w-full flex justify-center items-center relative"
              data-aos="fade-up"
            >
              <img
                src={beaHat}
                alt="Bianca Mari"
                onClick={handleClick}
                className="h-[350px] md:h-auto object-cover"
              />
            </div>
          )}

          {babyBeaVisible && (
            <div
              className="w-full flex justify-center items-center relative"
              data-aos="fade-up"
            >
              <img
                src={babyBea}
                alt="Baby Bianca Mari"
                onClick={handleClick}
                className="h-[350px] md:h-auto object-cover"
              />
            </div>
          )}
        </div>

        <div
          className="bg-[#ffb1d04d] w-full md:h-min rounded-xl p-5 mt-10 max-w-[900px]"
          data-aos="fade-right"
        >
          <p className="text-xl font-fredoka text-[#e73a7f]">
            <span className="font-bold mr-2">Name :</span>
            Bianca Mari M. Hernandez
          </p>
          <p className="text-xl font-fredoka text-[#e73a7f]">
            <span className="font-bold mr-2">Date of Birth :</span>
            July 7, 2001
          </p>
          <p className="text-xl font-fredoka text-[#e73a7f]">
            <span className="font-bold mr-2">Age :</span>
            24
          </p>
          <p className="text-xl font-fredoka text-[#e73a7f]">
            <span className="font-bold mr-2">Hobbies :</span>
            Walking, Tiktok
          </p>
          <p className="text-xl font-fredoka text-[#e73a7f]">
            <span className="font-bold mr-2">Favorite Book :</span>
            Love Rosie, Before the coffee gets cold
          </p>
          <p className="text-xl font-fredoka text-[#e73a7f]">
            <span className="font-bold mr-2">Favorite Color :</span>
            Pink, Purple
          </p>
          <p className="text-xl font-fredoka text-[#e73a7f]">
            <span className="font-bold mr-2">Favorite Artist :</span>
            Taylor Swift, Sabrina Carpenter
          </p>
          <p className="text-xl font-fredoka text-[#e73a7f]">
            <span className="font-bold mr-2">Favorite Movie/Show :</span>
            Shrek, Reply 1988
          </p>
          <p className="text-xl font-fredoka text-[#e73a7f]">
            <span className="font-bold mr-2">Favorite Food :</span>
            Seafood Boil, Kimchi, Mashroom, Buldak, Salmon Sashimi, Fruits &
            Vegies
          </p>
          <p className="text-xl font-fredoka text-[#e73a7f]">
            <span className="font-bold mr-2">Occupation :</span>
            Mike's wife
          </p>
        </div>
      </section>
    </>
  );
}
