import Header from "../Header/Header";
import './styles.scss'

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
          <button className="get-started-button">Get Started {'>'}</button>
          <button className="play-button">{'>'}</button>
        </div>
      </div>
      <div className="hero-right">

      </div>
    </div>
  )
}