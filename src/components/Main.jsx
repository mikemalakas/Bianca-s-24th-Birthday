import Gallery from "./pages/Gallery";
import Greetings from "./pages/Greetings";
import Letter from "./pages/Letter";
import Spotify from "./pages/Spotify";
import Timer from "./pages/Timer";
import Bio from "./pages/Bio";
import Buddy from "./pages/Buddy";
import Heart from "./pages/Heart";

function Main() {
  return (
    <>
      <Greetings />
      <Bio />
      <Buddy />
      <Timer />
      <Gallery />
      <Spotify />
      <Heart />
      <Letter />
    </>
  );
}

export default Main;
