import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vinyl from "../../assets/vinyl.svg";

export default function Spotify() {
  const SpotifyEmbed = ({ message, embedLink }) => {
    return (
      <>
        <div className="flex flex-col justify-between">
          <div className="h-[200px] md:h-[190px] flex items-center ">
            <p className="mb-5 text-3xl text-[#a52a5b] font-tangerine font-bold text-center w-full">
              {message}
            </p>
          </div>

          <div>
            <iframe
              style={{ borderRadius: "12px" }}
              src={embedLink}
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="md:h-[100vh] md:flex justify-center items-center p-2 md:p-10 flex-wrap">
      <h2
        className="text-[#e73a7f] text-3xl md:text-7xl font-fredoka text-center mb-5 "
        data-aos="fade-right"
      >
        Music that makes me thinks of you:
      </h2>
      <div className="md:grid md:grid-cols-3 gap-10">
        <div
          className="md:col-span-1 flex justify-center items-center"
          data-aos="fade-right"
        >
          <img
            src={Vinyl}
            className="vinyl w-[200px] md:w-full max-w-[400px] my-10 md:my-0"
            alt="vinyl"
          />
        </div>
        <div
          className="bg-[#ffb1d04d] md:col-span-2 w-full max-w-[750px]  max-h-[800px] h-[400px] md:h-auto rounded-xl p-5"
          id="spotify"
          data-aos="fade-up"
        >
          <Slider {...settings}>
            {/* baby blue eyes */}
            <SpotifyEmbed
              message="We always played A Rocket to the Moon on Discord, and it felt like fate when it played during our first meeting at Puregold."
              embedLink="https://open.spotify.com/embed/track/5j929KlzL6RcXeX2LD4dgl?utm_source=generator"
            />
            {/* all too well */}
            <SpotifyEmbed
              message="Every Taylor Swift song reminds me of you—my fangirl bubbie since day one."
              embedLink="https://open.spotify.com/embed/track/5enxwA8aAbwZbf5qCHORXi?utm_source=generator"
            />
            {/* earth angel */}
            <SpotifyEmbed
              message="You know I love old songs—and when you suggested this one, I instantly loved it because of its beautiful lyrics."
              embedLink="https://open.spotify.com/embed/track/3wV9nRDmRYEoaQYJ7EzSMG?utm_source=generator"
            />
            {/* the air that i breath */}
            <SpotifyEmbed
              message="I only discovered this song because you always played it on Discord. Now that I’ve really listened to the lyrics, I realized—I relate to it more than I expected."
              embedLink="https://open.spotify.com/embed/track/6rFJWfFHgzEg5Rey08SNrD?utm_source=generator"
            />
            {/* espresso */}
            <SpotifyEmbed
              message="You always play this song when you're riding on my motorcycle"
              embedLink="https://open.spotify.com/embed/track/2HRqTpkrJO5ggZyyK6NPWz?utm_source=generator"
            />
            {/* slipping through your fingers */}
            <SpotifyEmbed
              message="I’m always amazed by how deeply you miss and cherish your mom and grandma—it shows your beautiful heart."
              embedLink="https://open.spotify.com/embed/track/1QRKeAlaLqJUeCWMBRP20A?utm_source=generator"
            />
            {/* accidentally inlove */}
            <SpotifyEmbed
              message="This one’s the theme song from Shrek—and honestly, whenever I hear anything Shrek-related, you’re the only person I think of. Can't wait to watch Shrek 5 with you"
              embedLink="https://open.spotify.com/embed/track/3OltYYcLZUhvho5QoRbUNr?utm_source=generator"
            />
            {/* Makes me wonder */}
            <SpotifyEmbed
              message="You’ve been playing this song a lot lately—and you look so cute dancing to it HAHAH"
              embedLink="https://open.spotify.com/embed/track/3PNOYDruQplC92lNc7mE9W?utm_source=generator"
            />
            {/* yoasobi */}
            <SpotifyEmbed
              message="I was really touched when I saw you listening to this"
              embedLink="https://open.spotify.com/embed/track/3dPtXHP0oXQ4HCWHsOA9js?utm_source=generator"
            />
            {/* uptown girl */}
            <SpotifyEmbed
              message="I love our karaoke moments—just us, singing our hearts out, making memories I’ll never forget."
              embedLink="https://open.spotify.com/embed/track/5zA8vzDGqPl2AzZkEYQGKh?utm_source=generator"
            />
          </Slider>
        </div>
      </div>
    </section>
  );
}
