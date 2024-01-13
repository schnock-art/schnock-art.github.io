import cvPdf from '../../data/CV Jan Gebert.pdf';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello! I'm Jan Gebert</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Data Scientist</span>{" "}
            <br />
            Data Engineer
            <br />
            Artist
          </h1>
          <p className="hero--section-description">
          I am a seasoned Data Scientist and Engineer with a notable tenure at Merkur Innovation Lab in Graz, Austria, where I excelled in data warehouse design, ETL processes, and predictive modeling. 
          </p>
          <p className="hero--section-description">
          Prior to this, at Tiendanube S.A. in Buenos Aires, I automated key reports and enhanced data-driven decision-making. 
          </p>
          <p className="hero--section-description">
          My career also includes impactful work as a Reservoir Engineer at Schlumberger, where I combined technical expertise with client relationship management.
          </p>
          <p className="hero--section-description">
          Complementing my technical skills, I explore the artistic realm of algorithmic art using Python, showcasing my unique blend of analytical and creative talents.
          </p>

          <a
            href={cvPdf}
            download="CV Jan Gebert"
            target="_blank"
            rel="noreferrer"
          >
        <button className="btn btn-primary">
          Download CV</button>
        </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/about-me.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
