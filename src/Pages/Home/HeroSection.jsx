import cvPdf from '../../data/CV Jan Gebert.pdf';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Data Scientist</span>{" "}
            <br />
            Data Engineer
            <br />
            Petroleum Engineer
            {/*<br />
            Artist*/}
          </h1>
          <p className="hero--section-description">
          I’m a Data Scientist and Machine Learning Engineer with a background in engineering and a Master’s degree in Data and Information Science.
          </p>

          <p className="hero--section-description">
          I currently work at VAPAR Innovation in Australia, where I design and deploy computer vision models and data pipelines, using user feedback and performance metrics to continuously improve machine learning systems.
          </p>

          <p className="hero--section-description">
          Previously, I worked at Merkur Innovation Lab in Graz, designing a data platform, ETL pipelines, and predictive models for a healthcare startup.
          </p>

          <p className="hero--section-description">
          Before that, at Tiendanube in Buenos Aires, I partnered closely with product teams to automate reporting, support A/B testing, and enable data-driven decision-making for an e-commerce platform at scale.
          </p>

          <p className="hero--section-description">
          Earlier in my career, I worked as a Petroleum Engineer at Schlumberger, developing a strong engineering foundation building predictive models.
          </p>

          <p className="hero--section-description">
          Alongside my professional work, I explore algorithmic and generative art using Python, combining analytical thinking with creativity and a strong interest in image-based systems.
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
