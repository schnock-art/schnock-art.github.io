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
          I'm a versatile Data Scientist and Engineer with a flair for creative problem-solving 
          and a unique penchant for combining data science with artistic expression through algorithmic art created using Python.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/about-me.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
