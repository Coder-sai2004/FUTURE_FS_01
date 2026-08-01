import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

// ASSETS
import profile from "./assets/ram.jpg";
import resume from "./assets/My  Resume.pdf";
import quizapp from "./assets/quizapp.png";
import crm from "./assets/crm.png";
import fakejob from "./assets/fakejob.png";
import resourceRecommendation from "./assets/resourceRecommendation.png";



/* ---------- NAVBAR ---------- */
function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  /* Load saved theme */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  /* Apply theme */
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="main-header">
        <div className="container nav-container">

          <div className="logo">
            Tanuku Ram Sai<span>.</span>
          </div>

          <nav className="main-nav">
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#coding">Achievements</a></li>
              <li><a href="#contact">Contact</a></li>

              {/* THEME TOGGLE */}
              <li className="theme-item">
                <button className="theme-toggle" onClick={toggleTheme}>
                  {theme === "dark" ? "☀️" : "🌙"}
                </button>
              </li>

            </ul>
          </nav>

          {/* MOBILE MENU ICON */}
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </div>

        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* MOBILE SIDEBAR */}
      <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>

        <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#coding" onClick={() => setMenuOpen(false)}>Achievements</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        {/* MOBILE THEME TOGGLE */}
        <button className="theme-toggle mobile-theme" onClick={toggleTheme}>
          {theme === "dark" ? "Switch to Light ☀️" : "Switch to Dark 🌙"}
        </button>

      </div>
    </>
  );
}


/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="hero" className="full-width hero-section">
      <div className="container hero-wrapper hidden">

        <div className="hero-left">

          <h4 className="intro">Hello, I'm</h4>

          <h1 className="hero-name">
            Tanuku <span>Ram Sai</span>
          </h1>

          <h2 className="gradient-text">
            Full Stack Developer (MERN) | Python (DSA)
          </h2>

          <p className="subtitle">
            I’m a passionate CSE student with hands-on experience in MERN stack development and strong programming skills in Python and Java. I enjoy building scalable web applications,
            developing RESTful APIs, and solving complex problems through data structures and algorithms.
          </p>

          <div className="hero-buttons">

            <a href={resume} className="btn primary">
              View My Resume
            </a>

            <a href="#contact" className="btn dark">
              Get In Touch
            </a>

          </div>

          <div className="social-icons">

            <a href="https://github.com/Coder-sai2004" target="_blank">
              <i className="fab fa-github"></i>
            </a>

            <a href="https://linkedin.com" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="mailto:dcmeramsai003@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>

          </div>

        </div>

        <div className="hero-right">
          <div className="profile-wrapper">
            <img src={profile} alt="profile" />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="full-width">
      <div className="container hidden">

        <h2 className="section-title">About Me</h2>

        <div className="about-content">

          {/* WHO I AM */}
          <div className="about-block">
            <h3>👨‍💻 Who I Am</h3>
            <p className="about-main">Tanuku Ram Sai</p>
          </div>

          {/* ROLE */}
          <div className="about-block">
            <h3>🚀 Role</h3>
            <p>
              Final Year CSE Student | Full-Stack Developer | Problem Solver
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="about-block">
            <h3>📈 Experience Journey</h3>
            <ul>
              <li>Built full-stack MERN applications</li>
              <li>Solved 1000+ DSA problems across platforms</li>
              <li>Started my journey as a developer and continuously improving</li>
            </ul>
          </div>

          {/* AVAILABILITY */}
          <div className="about-block">
            <h3>🤝 Availability</h3>
            <p className="availability">
              ✓ Open to internships and collaboration opportunities
            </p>
            <span className="scroll-note">
              Scroll down to explore more...
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
/* ---------- SKILLS ---------- */
function Skills() {
  const skills = [
    {
      title: "Languages",
      icon: "fas fa-code",
      items: ["Python", "Java", "JavaScript"]
    },
    {
      title: "Web Development",
      icon: "fas fa-laptop-code",
      items: ["Flask", "React.js", "Node.js", "Express.js", "HTML", "CSS"]
    },
    {
      title: "AI & Machine Learning",
      icon: "fas fa-brain",
      items: ["Machine Learning", "TF-IDF", "Scikit-learn", "Gemini API"]
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      items: ["PostgreSQL", "SQLAlchemy", "MongoDB", "MongoDB Atlas", "SQL"]
    },
    {
      title: "API & Tools",
      icon: "fas fa-tools",
      items: ["REST APIs", "Git", "GitHub", "VS Code"]
    },
    {
      title: "Core Concepts",
      icon: "fas fa-cogs",
      items: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Operating Systems",
        "Computer Networks"
      ]
    }
  ];

  return (
    <section id="skills" className="full-width">
      <div className="container hidden">

        <h2 className="section-title">My Skills</h2>

        <div className="skills-wrapper">
          {skills.map((skill, index) => (
            <div key={index} className="skills-box">

              <i className={`${skill.icon} skills-icon`}></i>

              <h3>{skill.title}</h3>

              <div className="skills-tags">
                {skill.items.map((item, i) => (
                  <span key={i} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  return (
    <section id="projects" className="full-width">
      <div className="container hidden">
        <h2 className="section-title">Projects</h2>

        <div className="projects-container">

          {/* PROJECT 1 */}
          <div className="project-row">
            <div className="project-left">
              <h3>Fake Job Detection System</h3>

              <p className="project-desc">
                An AI-powered job verification platform that detects fraudulent job postings using Machine Learning, NLP, website analysis, and social media credibility checks.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>Flask</span>
                <span>Scikit-Learn</span>
                <span>Gemini AI</span>
              </div>

              <div className="project-buttons">
                <a
                  href="https://github.com/Coder-sai2004/Fake_Job_Detection" target="_blank" rel="noreferrer"
                >
                  View Code
                </a>

                <a
                  href="https://fake-job-detection-iuxn.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="outline"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project-right">
              <img src={fakejob} alt="Fake Job Detection System" />
            </div>
          </div>



          {/* PROJECT 2 */}
          <div className="project-row">
            <div className="project-left">
              <h3>Personalized Academic Resource Recommendation Platform</h3>

              <p className="project-desc">
                An AI-powered learning platform that analyzes syllabus PDFs using NLP, extracts academic topics, and automatically recommends relevant YouTube videos, articles, and study resources. Features user authentication, resource tracking, and personalized learning support.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>Flask</span>
                <span>NLP</span>
                <span>SQLAlchemy</span>
                <span>Gemini AI</span>
              </div>

              <div className="project-buttons">
                <a
                  href="https://github.com/Coder-sai2004/Personalized_Academic_Resource_Recommendation_System"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>

                <a
                  href="https://personalized-academic-resource.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="outline"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project-right">
              <img src={resourceRecommendation} alt="project" />
            </div>
          </div>


          {/* PROJECT 3 */}
          <div className="project-row">
            <div className="project-left">
              <h3>Quiz Application</h3>

              <p className="project-desc">
                A full-stack MERN quiz platform with secure authentication, dynamic quiz generation, and performance analytics dashboard.
              </p>

              <div className="project-tech">
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>React.js</span>
                <span>Node.js</span>
              </div>

              <div className="project-buttons">
                <a href="https://github.com/Coder-sai2004/Quiz_App" target="_blank" rel="noreferrer">
                  View Code
                </a>

                <a href="https://basic-quizz-app.netlify.app/" target="_blank" rel="noreferrer" className="outline">
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project-right">
              <img src={quizapp} alt="project" />
            </div>
          </div>



        </div>

      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */
function Experience() {
  return (
    <section id="experience" className="full-width">
      <div className="container hidden">
        <h2 className="section-title">Experience</h2>

        <div className="experience-container">

          {/* EXPERIENCE 1 */}
          <div className="experience-card">

            <div className="exp-top">
              <h3>MERN Stack Developer – Trainee</h3>
              <span className="exp-date">May 2025 – July 2025</span>
            </div>

            <h4 className="exp-company">@ Aims Technologies</h4>

            <ul className="exp-points">
              <li>Built responsive full-stack applications using MongoDB, Express.js, React.js, and Node.js</li>
              <li>Developed REST APIs and collaborated through Git/GitHub</li>
              <li>Worked on deployment and testing in a development environment</li>
            </ul>

          </div>

          {/* EXPERIENCE 2 */}
          <div className="experience-card">

            <div className="exp-top">
              <h3>Software Trainee Intern</h3>
              <span className="exp-date">Nov 2023 – May 2024</span>
            </div>

            <h4 className="exp-company">@ HQL Edu Tech Pvt. Ltd.</h4>

            <ul className="exp-points">
              <li>Worked on C++ and Java modules and resolved critical bugs</li>
              <li>Improved application stability through debugging and testing</li>
              <li>Participated in code reviews and team collaboration</li>
            </ul>

          </div>

          {/* EXPERIENCE 3 */}
          <div className="experience-card">

            <div className="exp-top">
              <h3>Machine Learning Intern</h3>
              <span className="exp-date">May 2026 – July 2026</span>
            </div>

            <h4 className="exp-company">@ VedXlence, Hyderabad</h4>

            <ul className="exp-points">
              <li>Built and evaluated machine learning models using Python, Scikit-learn, and TensorFlow/Keras.</li>
              <li>Applied data preprocessing, feature engineering, model evaluation, and hyperparameter tuning.</li>
              <li>Developed and deployed end-to-end ML applications using Flask and NLP concepts.</li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- CODING ---------- */
function Coding() {
  return (
    <section id="coding" className="full-width">
      <div className="container hidden">
        <h2 className="section-title">Achievements & Coding </h2>

        <div className="coding-container">

          <div className="coding-card">
            <h3>LeetCode</h3>
            <p className="rating">1527</p>
            <span>400+ Problems Solved</span>
          </div>

          <div className="coding-card">
            <h3>CodeChef</h3>
            <p className="rating">1417</p>
            <span>500+ Problems • 2★</span>
          </div>

          <div className="coding-card">
            <h3>GeeksforGeeks</h3>
            <p className="rating">—</p>
            <span>400+ Problems Solved</span>
          </div>

          <div className="coding-card">
            <h3>HackerRank</h3>
            <p className="rating">★</p>
            <span>5★ Python • 3★ Problem Solving</span>
          </div>

          <div className="coding-card">
            <h3>Codeforces</h3>
            <p className="rating">833</p>
            <span>Newbie</span>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_cr5b5fe", "template_9ae8tho", e.target, "86yP0-wOUmLIwVStF")
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send"));
  };

  return (
    <section id="contact" className="full-width">
      <div className="container hidden">
        <h2 className="section-title">Contact</h2>
        <p className="contact-subtext">
          I’m currently seeking new opportunities and would love to connect with you.
          Whether you have a question, collaboration idea, or opportunity, feel free to reach out!
        </p>

        <form onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

function Links() {
  return (
    <section className="connect-section">
      <div className="connect-container">

        <div className="connect-block">
          <p className="connect-label">// coding_profiles</p>
          <h3>Competitive Platforms</h3>

          <div className="connect-links">
            <a href="https://leetcode.com/u/Tanuku_Ram_Sai/">LeetCode</a>
            <a href="https://www.geeksforgeeks.org/profile/dcmeram9sj6">GeeksforGeeks</a>
            <a href="https://codeforces.com/profile/Tanuku_Ram_Sai">CodeForces</a>
            <a href="https://www.codechef.com/users/ramsai_003">CodeChef</a>
            <a href="https://www.hackerrank.com/profile/dcmeramsai0031">HackerRank</a>
          </div>
        </div>

        <div className="connect-block">
          <p className="connect-label">// connect</p>
          <h3>Social Links</h3>

          <div className="social-icons">
            <a href="https://github.com/Coder-sai2004"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/tanuku-ram-sai-509172339/"><i className="fab fa-linkedin"></i></a>
            <a href="dcmeramsai003@gmail.com"><i className="fas fa-envelope"></i></a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <p>© 2026 Tanuku Ram Sai</p>
      </div>
    </footer>
  );
}

/* ---------- APP ---------- */
export default function App() {
  useEffect(() => {
    document.title = "Tanuku Ram Sai Portfolio";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Coding />
      <Contact />
      <Links />
      <Footer />
    </>
  );
}