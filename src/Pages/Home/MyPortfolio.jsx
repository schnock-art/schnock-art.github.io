import portfolio from "../../data/portfolio.json";
import { SocialIcon } from 'react-social-icons'
import "../../App.css";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          {/*<p className="sub--title">Recent Projects</p>*/}
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
        <a href="https://github.com/schnock-art" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-github">
            <SocialIcon className="social-icon" url="https://github.com/schnock-art" />
            Visit My GitHub
          </button>
        </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {portfolio?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                View on Github
                <SocialIcon url={item.link} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
