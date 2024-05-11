import React, { useState, useRef } from "react";
import Desert from "../../assets/video/Desert.mp4";
import Ancient from "../../assets/video/Ancient Egypt.mp4";
import tutankhamun from "../../assets/images/tutankhamun.png";
import cat from "../../assets/images/cat.png";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import "./Home.css";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayback = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="homeContainer">
      <div className="background">
        <video autoPlay muted loop src={Desert} type="video/mp4"></video>
      </div>

      <div className="homeContent">
        <div className="content">
          <h3>the ancient world</h3>
          <h1>
            discover the awe-inspiring pyramids of giza and ancient egypt's
          </h1>
        </div>
        <div className="btn">
          <button>
            <a href="#learn-more">learn more</a>
          </button>
        </div>
      </div>

      <div className="learnMore" id="learn-more">
        <div className="tenThings">
          <p>10 things</p>
          <h1>
            You probably didn't know about <span>ancient egypt</span>
          </h1>
        </div>
        <div className="info-tutankhamunImage">
          <div className="info">
            <h2>His original name was not Tutankhamun</h2>
            <p>
              Tutankhamun or Tutankhamen, was an ancient Egyptian pharaoh who
              ruled c.1332 – 1323 BC during the late Eighteenth Dynasty of
              ancient Egypt. Born Tutankhaten, he was likely a son of Akhenaten,
              thought to be the KV55 mummy. His mother was identified through
              DNA testing as The Younger Lady buried in KV35; she was a full
              sister of her husband.
            </p>
            <a href="https://en.wikipedia.org/wiki/Tutankhamun">Read more</a>
          </div>
          <img src={tutankhamun} alt="tutankhamun" />
        </div>
        <div className="info-catsImage">
          <img src={cat} alt="cat" />
          <div className="info">
            <h2>Cats were represented in religious practices</h2>
            <p>
              In ancient Egypt, cats were represented in social and religious
              scenes dating as early as 1980 BC. Several ancient Egyptian
              deities were depicted and sculptured with cat-like heads such as
              Mafdet, Bastet and Sekhmet, representing justice, fertility, and
              power, respectively. The deity Mut was also depicted as a cat and
              in the company of a cat.
            </p>
            <a href="https://en.wikipedia.org/wiki/Cats_in_ancient_Egypt">
              Read more
            </a>
          </div>
        </div>
        <div className="showMoreButton">
          <button className="btn">show more</button>
        </div>

        <div className="ancientCivilizationContainer">
          <div className="theAncientCivilization">
            <p>the ancient</p>
            <h1>
              Egyptian <span>civilization</span>
            </h1>
          </div>
          <div className="infoAncient">
            <div className="texts">
              <p>
                The ancient Egyptian civilization, famous for its pyramids,
                pharaohs, mummies and tombs, flourished for thousands of years.
                But what was its lasting impact?
              </p>
              <p>
                Watch the video below to learn how ancient Egypt contributed to
                modern-day society with its many cultural developments,
                particularly in language & mathematics.
              </p>
            </div>
            <div className="infoAncientVideo">
              <video ref={videoRef} src={Ancient} typeof="video/mp4"></video>
              <button onClick={togglePlayback}>
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>
          </div>
        </div>
        <div className="backInTime">
          <p>go back in time</p>
          <h1>
            With our top <span>experiences</span>
          </h1>
        </div>
        <div className="infoBackInTime">
          <p>
            Magnificent monuments, lush delta and with its long past. Welcoming
            story-loving people.
          </p>
        </div>
        <div className="backInTimeImages">
          <div className="images">
            <RiArrowLeftWideFill className="iconL" />
            <div className="img1">
              <div className="darkBackground"></div>
              <p>giza</p>
              <h2>red pyramid</h2>
            </div>
            <div className="img2">
              <div className="darkBackground"></div>
              <p>cairo</p>
              <h2>giza pyramid</h2>
            </div>
            <div className="img3">
              <div className="darkBackground"></div>
              <p>karnak</p>
              <h2>temple of karnak</h2>
            </div>
            <div className="img4">
              <div className="darkBackground"></div>
              <p>cairo</p>
              <h2>great sphinx</h2>
            </div>
            <RiArrowRightWideFill className="iconR" />
          </div>
        </div>
        <div className="sponsorsPartners">
          <div className="info">
            <p>thank you</p>
            <h1>
              To our Sponsors and Event <span>Partners</span>
            </h1>
          </div>
          <div className="back">
            <div className="darkBack"></div>
            <div className="logo1"></div>
            <div className="logo2"></div>
            <div className="logo3"></div>
            <div className="logo4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
