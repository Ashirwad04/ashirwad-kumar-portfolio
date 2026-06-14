import "./Education.css";

function Education() {
  return (
    <section id="education" className="education-section">

      <div className="education-header">
        <h1>Education</h1>

        <div className="education-line"></div>

        <p>
          My academic journey has provided a strong foundation in
          technology, problem-solving, and continuous learning.
        </p>
      </div>

      <div className="timeline">

        {/* Graduation */}

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-date">
              2019 - 2023
            </span>

            <h2>
              Bachelor of Technology
            </h2>

            <h3>
              Kalinga Institute of Industrial Technology
            </h3>

            <p>
              Specialized in Computer Science & Engineering,
              gaining knowledge in software development,
              programming, databases, web technologies,
              and modern software engineering practices.
            </p>
          </div>
        </div>

        {/* Intermediate */}

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-date">
              2018 - 2019
            </span>

            <h2>
              Intermediate Education
            </h2>

            <h3>
              S.B.A.N College
            </h3>

            <p>
              Studied Physics, Chemistry, and Mathematics,
              building strong analytical and logical
              problem-solving skills.
            </p>
          </div>
        </div>

        {/* Matriculation */}

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-date">
              2016 - 2018
            </span>

            <h2>
              Matriculation
            </h2>

            <h3>
              Maharishi Vidya Mandir
            </h3>

            <p>
              Developed a strong academic foundation and
              cultivated curiosity, discipline, and a
              passion for learning.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}


export default Education;