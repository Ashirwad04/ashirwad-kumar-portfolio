import "./Skill.css";

function Skill() {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-header">
        <h1>My Skills</h1>

        <div className="skills-line"></div>

        <p>
          A combination of technical expertise and creative abilities
          that helps me build impactful digital experiences and tell
          meaningful stories through technology and content creation.
        </p>
      </div>

      <div className="skills-grid">

        {/* Software Development */}

        <div className="skill-card">
          <div className="skill-icon">💻</div>

          <h2>Software Development</h2>

          <p className="skill-description">
            Building scalable web applications and delivering modern
            user experiences using industry-standard technologies.
          </p>

          <div className="skill-tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React.js</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>REST APIs</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>MySQL</span>
            <span>Responsive Design</span>
          </div>
        </div>

        {/* Zoho Development */}

        <div className="skill-card">
          <div className="skill-icon">🚀</div>

          <h2>Zoho Development</h2>

          <p className="skill-description">
            Creating business automation solutions, custom workflows,
            and scalable applications within the Zoho ecosystem.
          </p>

          <div className="skill-tags">
            <span>Zoho Creator</span>
            <span>Zoho CRM</span>
            <span>Deluge</span>
            <span>Workflow Automation</span>
            <span>Custom Functions</span>
            <span>Business Automation</span>
            <span>Integrations</span>
            <span>CRM Customization</span>
          </div>
        </div>

        {/* Creative Skills */}

        <div className="skill-card">
          <div className="skill-icon">📸</div>

          <h2>Photography & Videography</h2>

          <p className="skill-description">
            Capturing stories through photography, videography, travel
            experiences, and creative visual content creation.
          </p>

          <div className="skill-tags">
            <span>Photography</span>
            <span>Travel Photography</span>
            <span>Portrait Photography</span>
            <span>Street Photography</span>
            <span>Videography</span>
            <span>Video Editing</span>
            <span>Adobe Premiere Pro</span>
            <span>DaVinci Resolve</span>
            <span>CapCut</span>
            <span>Color Grading</span>
            <span>Content Creation</span>
            <span>Visual Storytelling</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skill;