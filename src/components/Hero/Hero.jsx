import Header from "../Header/Header";
import './styles.scss'
import { FaPlay } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Hero() {
  return (
    <div className="hero-container">
      <Header />
      <div className="hero-left">
        <h1>
          Best Solution For Your <span className="business">Business</span> Startup
        </h1>
        <p>
        Pellentesque non pretium sem. Sed sit amet diam vitae tortor mattis tincidunt et at neque.
        </p>
        <div className="hero-buttons">
          <button className="get-started-button">
            Get Started
            <span className="arrow-icon">
              <MdKeyboardArrowRight />
            </span>
          </button>
          <button className="play-button">
            <FaPlay />
          </button>
        </div>
      </div>
      <div className="hero-right">

      </div>
    </div>
  )
}