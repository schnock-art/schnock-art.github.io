export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.jpg  " alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/*<p className="section--title">About</p>*/}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          I am a Data Scientist and Machine Learning Engineer with a Master’s degree in Data and Information Science and over five years of experience working on analytics, machine learning, and data platforms for user-centric products. I have built scalable data systems and predictive models at Merkur Innovation Lab, driven product analytics and experimentation at Tiendanube, and currently work on computer vision and machine learning applications at Vapar. Earlier in my career, I worked as a Petroleum Engineer at Schlumberger, developing a strong engineering mindset through complex, real-world problems.
          </p>
          <p className="hero--section-description">
          Alongside my professional work, I explore algorithmic and generative art using Python, combining analytical thinking with creative expression.
          </p>
        </div>
      </div>
    </section>
  );
}
