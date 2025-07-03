import { useState } from "react";
import foodBuddy from "../../assets/food_buddy.webp";
import walkingBuddy from "../../assets/walking_buddy.webp";
import movieBuddy from "../../assets/movie_buddy.webp";
import sleepBuddy from "../../assets/sleep_buddy.webp";
export default function Buddy() {
  const [selected, setSelected] = useState("food");

  const buttonStyle = (type) =>
    `cursor-pointer px-4 py-2 transition duration-200 ${
      selected === type ? "font-bold underline" : ""
    }`;

  const CardImg = ({ message, img }) => {
    return (
      <>
        <div className="w-full flex flex-col items-center justify-center">
          <img
            data-aos="fade-up"
            src={img}
            alt="yes"
            className="img-border-wave object-cover w-[500px]"
          />

          <p
            className=" text-[#a52a5b] font-tangerine text-3xl font-bold mt-5"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            {message}
          </p>
        </div>
      </>
    );
  };

  return (
    <section className="p-5 pt-20">
      <h2
        className="text-[#e73a7f] text-3xl md:text-7xl font-fredoka text-center mb-5"
        data-aos="fade-right"
      >
        My Forever Buddy in :
      </h2>

      <div
        className="flex w-auto justify-center gap-2 text-[#a52a5b] font-fredoka"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <button
          className={buttonStyle("food")}
          onClick={() => setSelected("food")}
        >
          Food
        </button>
        <button
          className={buttonStyle("movie")}
          onClick={() => setSelected("movie")}
        >
          Movie
        </button>
        <button
          className={buttonStyle("walking")}
          onClick={() => setSelected("walking")}
        >
          Walking
        </button>
        <button
          className={buttonStyle("sleep")}
          onClick={() => setSelected("sleep")}
        >
          Sleep
        </button>
      </div>

      <div className="mt-5 text-center text-xl text-[#a52a5b]">
        {selected === "food" && (
          <CardImg
            message="Eating something new and cooking something new—it’s always fun, delicious, and full of love with you."
            img={foodBuddy}
          />
        )}
        {selected === "movie" && (
          <CardImg
            message="From watching on Brave to our late-night marathons, rating movies together, and our love for cinema dates—every moment feels extra special with you"
            img={movieBuddy}
          />
        )}
        {selected === "walking" && (
          <CardImg
            message="Morning walks, endless talks, forever memories."
            img={walkingBuddy}
          />
        )}
        {selected === "sleep" && (
          <CardImg
            message="Falling asleep beside you feels like peace—you're my safe haven, my calm after every storm."
            img={sleepBuddy}
          />
        )}
      </div>
    </section>
  );
}
