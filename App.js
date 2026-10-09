
import React from "react";
import "./App.css";

const skills = [
  { icon: "☕", name: "Java" },
  { icon: "🌱", name: "Spring Boot" },
  { icon: "⚛️", name: "React.js" },
  { icon: "🌐", name: "HTML & CSS" },
  { icon: "📜", name: "JavaScript" },
  { icon: "🗄️", name: "MySQL" },
  { icon: "🔗", name: "REST APIs" },
  { icon: "🛠️", name: "Git & GitHub" },
];

const projects = [
  {
    icon: "🛒",
    name: "GroceryX",
    description:
      "A modern grocery shopping frontend featuring product listings, category filters, cart functionality and personalized recommendations.",
    technologies: "React.js • JavaScript • CSS",
  },
  {
    icon: "👨‍💼",
    name: "Employee Payroll System",
    description:
      "An employee management project concept for employee details, attendance tracking, salary records and leave management.",
    technologies: "Java • JSP • MySQL",
  },
  {
    icon: "🌱",
    name: "CarbonX",
    description:
      "A carbon credit marketplace project concept featuring emission calculations, blockchain integration and AI-powered capabilities.",
    technologies: "Blockchain • AI • Web Development",
  },
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          Tanaya<span></span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="welcome">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm <span>Tanaya Jadhav</span>
            </h1>

            <h2>Java Developer | Software Developer</h2>

            <p className="description">
              I am passionate about software development,
              web technologies and problem-solving. I enjoy
              building practical applications using Java
              and modern frontend technologies while
              continuously improving my technical skills.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">
                Explore My Projects
              </a>

              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/tanaya-jadhav-5b50b4293"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/tanayasuniljadhav"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-circle">
              <div className="profile-icon">TJ</div>
            </div>

            <div className="floating-card">
              💻 Full stack Developer
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <p className="section-label">GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <p className="section-text">
            Hello! I am Tanaya Sunil Jadhav, an aspiring
            software developer interested in Java development,
            web application development and modern technologies.
            I enjoy learning programming concepts, developing
            practical projects and improving my problem-solving
            skills. My goal is to grow as a software developer
            and contribute to meaningful projects.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">💡</div>
              <h3>Problem Solving</h3>
              <p>
                Developing logical thinking and writing
                effective code.
              </p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h3>Continuous Learning</h3>
              <p>
                Exploring technologies and improving
                technical knowledge.
              </p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🤝</div>
              <h3>Teamwork</h3>
              <p>
                Collaborating on projects and sharing ideas
                to solve problems.
              </p>
            </div>
          </div>
        </section>

        <section
          className="section skills-section"
          id="skills"
        >
          <p className="section-label">MY TECHNICAL EXPERTISE</p>

          <h2>
            Technical <span>Skills</span>
          </h2>

          <p className="section-text">
            Technologies I work with while learning
            and developing software applications.
          </p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <span>{skill.icon}</span>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="section-label">MY RECENT WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p className="section-text">
            A selection of projects and application concepts
            that demonstrate my interest in software development.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.name}
              >
                <div className="project-icon">
                  {project.icon}
                </div>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tags">
                  {project.technologies}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section contact-section"
          id="contact"
        >
          <p className="section-label">LET'S CONNECT</p>

          <h2>
            Contact <span>Me</span>
          </h2>

          <p className="section-text">
            I am interested in Java Developer and Software
            Developer opportunities. Feel free to reach out
            for professional opportunities, collaborations
            and project discussions.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>

              <a href="mailto:tanaya.sunil.jadhav@gmail.com">
                tanaya.sunil.jadhav@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>

              <a href="tel:+919892816191">
                +91 98928 16191
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>

              <a
                href="https://www.linkedin.com/in/tanaya-jadhav-5b50b4293"
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn Profile ↗
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💻</div>
              <h3>GitHub</h3>

              <a
                href="https://github.com/tanayasuniljadhav"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Profile ↗
              </a>
            </div>
          </div>

          <a
            className="btn primary-btn email-btn"
            href="mailto:tanaya.sunil.jadhav@gmail.com"
          >
            ✉ Send Me an Email
          </a>
        </section>
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} Tanaya Jadhav.
          Built with React.
        </p>

        <a href="#home">Back to Top ↑</a>
      </footer>
    </div>
  );
}

export default App;

