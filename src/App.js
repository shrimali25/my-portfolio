import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <h1>DHRUVITA SHRIMALI</h1>
        <p className="subtitle">Data Analyst & AI Data Annotator</p>
        <div className="contact-bar">
          [cite_start]<span><i className="fas fa-map-marker-alt"></i> Ahmedabad, Gujarat</span> [cite: 3]
          [cite_start]<span><i className="fas fa-phone"></i> 9723677967</span> [cite: 2]
          [cite_start]<span><i className="fas fa-envelope"></i> shrimalidruvita2526@gmail.com</span> [cite: 2]
        </div>
        <div className="links">
          [cite_start]<a href="https://linkedin.com/in/shrimali-dhruvita-012850267" target="_blank" rel="noreferrer" className="btn">LinkedIn</a> [cite: 2]
          [cite_start]<a href="https://shrimali-dhruvita-c1gdnq2.gamma.site/" target="_blank" rel="noreferrer" className="btn outline">View Gamma Portfolio</a> [cite: 3]
        </div>
      </header>

      <main className="content">
        {/* Professional Summary */}
        <section className="section">
          <h2>Professional Summary</h2>
          [cite_start]<p>Detail-oriented Data Analyst and AI Data Annotator with hands-on experience in multi-domain annotation projects including human body joint/skeleton labeling, image height-width validation, and medical data labeling[cite: 5]. [cite_start]Skilled in ensuring high-accuracy datasets (>95%) for AI/ML model training[cite: 6, 20].</p>
        </section>

        {/* Technical Skills */}
        <section className="section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Data & BI</h3>
              [cite_start]<p>Power BI, Tableau, SQL, Data Visualization, Data Cleaning [cite: 9]</p>
            </div>
            <div className="skill-card">
              <h3>Programming</h3>
              [cite_start]<p>Python (Pandas, NumPy, Matplotlib), ReactJS, PHP, MySQL [cite: 10, 11, 12]</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="section">
          <h2>Experience</h2>
          <div className="timeline-item">
            <h4>Data Annotator Intern | Al Shalp (AI) Company</h4>
            [cite_start]<p className="date">Dec 2024 – Oct 2025 [cite: 19]</p>
            <ul>
              [cite_start]<li>Worked on multi‑domain annotation projects: Image annotation, QA, Transcription[cite: 20].</li>
              [cite_start]<li>Performed quality checks (QC) to maintain accuracy levels above 95%[cite: 20].</li>
            </ul>
          </div>
          <div className="timeline-item">
            <h4>Human Resources Intern | Oracle HR System</h4>
            [cite_start]<p className="date">Jul 2024 – Sep 2024 [cite: 17]</p>
            <ul>
              [cite_start]<li>Managed HR data entry, document verification, and employee records[cite: 18].</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="section">
          <h2>Key Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h4>ChefGPT – AI Recipe Generator</h4>
              [cite_start]<p>Developed using Gemini 2.0 Flash API and Python[cite: 24]. [cite_start]Implemented Pydantic for data validation[cite: 25].</p>
            </div>
            <div className="project-card">
              <h4>Power BI & Tableau Dashboards</h4>
              [cite_start]<p>Built interactive dashboards for Sales & Mutual Funds analysis[cite: 26].</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Dhruvita Shrimali | B.Sc. [cite_start]IT (Data Management) [cite: 22]</p>
      </footer>
    </div>
  );
}

export default App;