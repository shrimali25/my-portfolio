import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      {/* --- Navigation --- */}
      <nav className="navbar">
        <div className="nav-logo">DHRUVITA<span>.</span></div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
        <a href="mailto:shrimalidruvita2526@gmail.com" className="nav-cta">Hire Me</a>
      </nav>

      {/* --- Hero Section --- */}
      <header className="hero-section" id="about">
        <div className="hero-content">
          <span className="welcome-tag">Ready for New Challenges</span>
          <h1>Dhruvita Shrimali</h1>
          <h2>Expert in <span className="highlight">Data Analysis</span> & <span className="highlight">AI Annotation</span></h2>
          <p>
            B.Sc. IT graduate with a focus on Data Management. Specialized in high-precision AI workflows, 
            interactive dashboards, and full-stack web development.
          </p>
          <div className="hero-btns">
            <a href="https://linkedin.com/in/shrimali-dhruvita-012850267" target="_blank" rel="noreferrer" className="btn-primary">LinkedIn</a>
            <a href="https://github.com/shrimali25/chef" target="_blank" rel="noreferrer" className="btn-secondary">ChefGPT GitHub</a>
          </div>
        </div>
      </header>

      <div className="main-wrapper">
        
        {/* --- Key Metrics Section --- */}
        <section className="stats-strip">
          <div className="stat-item"><strong>95%+</strong><span>QC Accuracy </span></div>
          <div className="stat-item"><strong>7.8</strong><span>B.Sc. IT </span></div>
          <div className="stat-item"><strong>3+</strong><span>Professional Internships </span></div>
        </section>

        {/* --- Professional Experience --- */}
        <section className="section" id="experience">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-card current">
              <span className="status-tag">Most Recent</span>
              <h3>Data Annotator Intern</h3>
              <p className="company">Al Shalp (AI) Company | Dec 2024 – Oct 2025 </p>
              <ul>
                <li>Worked on multi‑domain projects: Image annotation, QA, and Transcription.</li>
                <li>Ensured precision for advanced machine learning systems.</li>
                <li>Performed quality checks (QC) to maintain accuracy levels above 95%.</li>
              </ul>
            </div>

            <div className="timeline-card">
              <h3>Human Resources Intern</h3>
              <p className="company">Oracle HR System | Jul 2024 – Sep 2024 </p>
              <ul>
                <li>Managed HR data entry, document verification, and employee records.</li>
                <li>Assisted with onboarding workflows and HR operations.</li>
                <li>Handled confidential data with strict compliance.</li>
              </ul>
            </div>

            <div className="timeline-card">
              <h3>Data Annotator Intern</h3>
              <p className="company">Shalp (AI) | Mar 2024 – May 2024 </p>
              <ul>
                <li>Processed medical datasets and ensured accuracy for AI/ML training.</li>
                <li>Annotated large-scale structured and unstructured datasets.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Technical Toolkit --- */}
        <section className="section" id="skills">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-container">
            <div className="skill-group">
              <h4>Analysis & BI </h4>
              <div className="skill-tags">
                <span>Power BI</span> <span>Tableau</span> <span>SQL</span> <span>Data Cleaning</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Programming & Databases </h4>
              <div className="skill-tags">
                <span>Python</span> <span>Pandas/NumPy</span> <span>MySQL</span> <span>Matplotlib</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>AI Annotation Specialties </h4>
              <div className="skill-tags">
                <span>Skeleton Labeling</span> <span>Medical Data</span> <span>PDF Verification</span> <span>Audio Transcription</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Tools & Web </h4>
              <div className="skill-tags">
                <span>ReactJS</span> <span>Git</span> <span>Jupyter Notebook</span> <span>AWS Basics</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section className="section" id="projects">
          <h2 className="section-title">Key Projects</h2>
          <div className="project-grid">
            <div className="project-display-card">
              <div className="project-info">
                <span className="proj-type">AI / Python </span>
                <h3>ChefGPT – AI Recipe Generator</h3>
                <p>Developed using Gemini 2.0 Flash API with secure Python backend and Pydantic validation.</p>
                <a href="https://github.com/shrimali25/chef" target="_blank" rel="noreferrer" className="proj-link">GitHub Source →</a>
              </div>
            </div>

            <div className="project-display-card">
              <div className="project-info">
                <span className="proj-type">Data Viz </span>
                <h3>Sales & Mutual Fund Dashboards</h3>
                <p>Interactive Power BI and Tableau dashboards for KPI analysis and trend identification.</p>
                <span className="proj-link">BI Visualization</span>
              </div>
            </div>

            <div className="project-display-card">
              <div className="project-info">
                <span className="proj-type">Web Dev</span>
                <h3>Dynamic PHP Website</h3>
                <p>Developed a secure website featuring user authentication and MySQL database operations.</p>
                <span className="proj-link">Full-Stack Project</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- Certifications --- */}
        <section className="section">
          <h2 className="section-title">Certifications</h2>
          <div className="cert-list">
            <p>• Data Visualization with Power BI – <strong>Great Learning</strong> </p>
            <p>• Internship Certificate – <strong>Shalp AIData LLP</strong></p>
            <p>• Summer Trainee – <strong>Tata Capital Housing Finance Ltd.</strong> </p>
          </div>
        </section>

      </div>

      <footer className="footer">
        <div className="footer-content">
          <h2>Let's build something impactful.</h2>
          <p>Email: <a href="mailto:shrimalidruvita2526@gmail.com">shrimalidruvita2526@gmail.com</a></p>
          <p>Phone: 9723677967 [cite: 2]</p>
          <div className="footer-line"></div>
          <p className="copyright">© 2025 Dhruvita Shrimali | B.Sc. IT (7.8 CGPA) </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
