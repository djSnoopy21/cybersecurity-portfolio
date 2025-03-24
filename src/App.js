import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));

    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href')?.substring(1);
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    const anchors = document.querySelectorAll('nav ul li a');
    anchors.forEach((anchor) => anchor.addEventListener('click', handleScroll));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleScroll));
    };
  }, []);

  return (
    <div className="App">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto+Mono:wght@400;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .App {
          padding-bottom: 4rem; /* Added to prevent footer overlap */
        }

        body {
          font-family: 'Roboto Mono', monospace;
          background: #0d0d1a;
          color: #e0e0e0;
          line-height: 1.6;
          min-height: 100vh;
          overflow-x: hidden;
          background-image: linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1));
        }

        nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(13, 13, 26, 0.9);
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          border-bottom: 2px solid #ff00ff;
          box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
        }

        nav .logo {
          font-family: 'Orbitron', sans-serif;
          font-size: 2rem;
          color: #00ffff;
          text-shadow: 0 0 10px #00ffff;
        }

        nav ul {
          display: flex;
          list-style: none;
        }

        nav ul li {
          margin-left: 2rem;
        }

        nav ul li a {
          color: #e0e0e0;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        nav ul li a:hover {
          color: #ff00ff;
          text-shadow: 0 0 15px #ff00ff;
        }

        header {
          padding: 10rem 2rem 6rem;
          text-align: center;
          background: linear-gradient(to bottom, rgba(13, 13, 26, 0.9), transparent);
        }

        header h1 {
          font-family: 'Orbitron', sans-serif;
          font-size: 4rem;
          color: #00ffff;
          text-shadow: 0 0 20px #00ffff, 0 0 40px #ff00ff;
          animation: glitch 2s infinite;
        }

        header p {
          font-size: 1.6rem;
          color: #ff00ff;
          text-shadow: 0 0 10px #ff00ff;
          animation: fadeIn 2s ease-in-out;
        }

        .card {
          max-width: 1000px;
          margin: 3rem auto;
          background: rgba(20, 20, 40, 0.8);
          padding: 3rem;
          border: 2px solid #00ffff;
          border-radius: 10px;
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 0 50px rgba(0, 255, 255, 0.8);
        }

        h2 {
          font-family: 'Orbitron', sans-serif;
          color: #00ffff;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          text-shadow: 0 0 15px #00ffff;
          position: relative;
        }

        h2::before {
          content: '';
          width: 80px;
          height: 3px;
          background: #ff00ff;
          position: absolute;
          bottom: -10px;
          left: 0;
          box-shadow: 0 0 10px #ff00ff;
        }

        ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          list-style: none;
        }

        ul li {
          background: rgba(0, 255, 255, 0.1);
          padding: 1.2rem;
          border: 1px solid #ff00ff;
          border-radius: 8px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
        }

        ul li:hover {
          transform: scale(1.05);
          background: rgba(255, 0, 255, 0.2);
          color: #00ffff;
          box-shadow: 0 0 25px rgba(0, 255, 255, 0.7);
        }

        h3 {
          font-size: 1.8rem;
          color: #ff00ff;
          margin-top: 2rem;
          text-shadow: 0 0 10px #ff00ff;
        }

        h4 {
          font-size: 1.4rem;
          color: #00ffff;
          margin-top: 1.5rem;
          text-shadow: 0 0 5px #00ffff;
        }

        p {
          color: #b0b0d0;
        }

        footer {
          background: #0d0d1a;
          color: #00ffff;
          text-align: center;
          padding: 2rem;
          border-top: 2px solid #ff00ff;
          box-shadow: 0 -5px 20px rgba(255, 0, 255, 0.3);
          position: relative;
          width: 100%;
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(2px, 2px); }
          100% { transform: translate(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }

        @media (max-width: 768px) {
          header h1 { font-size: 3rem; }
          header p { font-size: 1.3rem; }
          .card { margin: 2rem 1rem; padding: 2rem; }
          ul { grid-template-columns: 1fr; }
          nav { flex-direction: column; }
          nav ul { margin-top: 1rem; }
          nav ul li { margin: 0.5rem 1rem; }
        }
      `}</style>

      <nav>
        <div className="logo">Dibyajyoti Pati</div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header>
        <div>
          <h1>Dibyajyoti Pati</h1>
          <p>Junior Consultant | Cybersecurity | IGA & IAM Specialist</p>
        </div>
      </header>

      <section id="about" className="card">
        <h2>About Me</h2>
        <p>
          As a Junior Consultant in Cybersecurity and Identity & Access Management (IAM), I specialize in securing identities and streamlining access management through Identity Administration, Authentication, and Authorization (IAAA). With expertise in Saviynt, One Identity, and Microsoft Entra ID, I design and implement scalable security solutions to safeguard organizations against evolving cyber threats. Leveraging SQL, Java, and PowerShell, I develop automation-driven approaches that enhance cybersecurity, compliance, and risk mitigation.
        </p>
      </section>

      <section id="skills" className="card">
        <h2>Key Skills</h2>
        <ul>
          {[
            'Cybersecurity & Identity Protection',
            'IAM & IGA Security Solutions',
            'Identity Administration, Authentication & Authorization (IAAA)',
            'Saviynt | One Identity | Microsoft Entra ID',
            'SQL | Java | PowerShell | Automation',
            'Risk & Threat Management',
            'Single Sign-On (SSO) | Multi-Factor Authentication (MFA)',
            'Role-Based Access Control (RBAC) | Governance & Compliance',
          ].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section id="experience" className="card">
        <h2>Experience</h2>
        <h3>Junior Consultant – IGA/IAM & Cybersecurity</h3>
        <p><strong>SecurIAG Ltd</strong> | Feb 2024 – Present</p>
        <p>I specialize in Identity & Access Management (IAM) and Identity Governance & Administration (IGA) to enhance security, streamline identity lifecycle processes, and ensure compliance.</p>
        <h4>Key Responsibilities:</h4>
        <ul>
          {[
            'Deployed Saviynt, configuring connectors, workflows, and custom rules for identity lifecycle management.',
            'Implemented Role-Based Access Control (RBAC) for improved security and compliance.',
            'Automated Joiner-Mover-Leaver (JML) processes using SQL, Java, and PowerShell.',
            'Configured MFA solutions (SMS OTP, Email MFA, OneLogin Protect) to strengthen access security.',
            'Generated weekly security & compliance reports using Out-of-the-Box (OOB) monitoring.',
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h4>Achievements:</h4>
        <ul>
          {[
            'Strengthened security with PAM, MFA, and SSO, reducing unauthorized access risks.',
            'Improved user lifecycle management with automated workflows.',
            'Ensured compliance through audit support and governance enforcement.',
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="card">
        <h2>Contact Me</h2>
        <p><img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email Icon"
                style="height: 14px; vertical-align: middle; margin-right: 4px;" /> <a
                href="mailto:dibyajyotipati1998@gmail.com"
                style="color: #0B3D91; text-decoration: none;">dibyajyotipati1998@gmail.com</a></p>
        <p>Phone: +91 7008846982</p>
        <p>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/dibyajyoti-pati-21dec1998" style={{ color: '#00ffff', textDecoration: 'none' }}>
            linkedin.com/in/dibyajyoti-pati
          </a>
        </p>
      </section>

      <footer>
        <p>© 2025 Dibyajyoti Pati. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;