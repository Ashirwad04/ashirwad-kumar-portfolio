import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-header">
        <h1>About Me</h1>
        <div className="underline"></div>
      </div>

      <div className="about-content">

        <div className="about-card">
          <h2>Hello, I'm Ashirwad Kumar 👋</h2>

          <p>
            I am a Software Engineer and Zoho Developer who enjoys
            building modern web applications and solving real-world
            problems through technology.
          </p>

          <p>
            My journey in software development started with curiosity
            and has grown into a passion for creating clean,
            user-friendly, and impactful digital experiences.
          </p>

          <p>
            Beyond coding, I am a passionate traveler who loves
            exploring new places, cultures, and experiences. I have
            traveled across multiple states in India and enjoy learning
            from every journey.
          </p>

          <p>
            I also enjoy photography, reading books, and playing chess.
            These hobbies help me stay creative, focused, and
            continuously curious about the world around me.
          </p>

          <p>
            My goal is to keep learning, keep building, and contribute
            to meaningful projects that make a positive impact.
          </p>
        </div>

        <div className="stats-container">

          <div className="stat-card">
            <h3>2+</h3>
            <p>Years Learning & Building</p>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <p>States Explored</p>
          </div>

          <div className="stat-card">
            <h3>50+</h3>
            <p>Projects & Experiments</p>
          </div>

          <div className="stat-card">
            <h3>∞</h3>
            <p>Curiosity to Learn</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;