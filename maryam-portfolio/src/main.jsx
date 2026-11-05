import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const projects = [
  {
    number: '01',
    type: 'WEB DEVELOPMENT',
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio built with React to present my skills, projects and learning journey as a computer science student.',
    tags: ['React', 'JavaScript', 'CSS']
  },
  {
    number: '02',
    type: 'SOFTWARE PROJECT',
    title: 'Student Council Election System',
    description: 'A student election platform concept with digital ballots, candidate information and an administrator workflow.',
    tags: ['Web development', 'Firebase', 'Problem solving']
  },
  {
    number: '03',
    type: 'PROGRAMMING',
    title: 'Java Programming Exercises',
    description: 'A collection of programming exercises focused on logical thinking, algorithms, data structures and writing clean code.',
    tags: ['Java', 'Algorithms', 'OOP']
  }
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Maryam homepage">maryam<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a className="nav-contact" href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">COMPUTER SCIENCE STUDENT · DEVELOPER IN PROGRESS</p>
            <h1>Turning curiosity into <em>creative code.</em></h1>
            <p className="intro">Hi, I’m Maryam — a computer science student who enjoys building useful digital experiences, solving problems and learning how technology works.</p>
            <p>Successfully Deployed — Week 13!</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#contact">Get in touch</a>
            </div>
          </div>
          <div className="hero-card">
            <img src="/profile-art.svg" alt="Abstract illustration of a laptop, code symbols and a plant" />
            <div className="hero-card-caption">
              <span>CURRENTLY EXPLORING</span>
              <strong>Code. Creativity. Possibility.</strong>
            </div>
          </div>
          <div className="hero-index">MARYAM / PORTFOLIO 2026</div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-label"><span>01</span> ABOUT ME</div>
          <div className="about-content">
            <h2>Always learning.<br /><em>Always building.</em></h2>
            <p>I’m Maryam, a computer science student interested in software development, web technologies and solving real-world problems through technology.</p>
            <p>I enjoy taking an idea, breaking it into smaller problems and turning it into something people can use. I’m currently strengthening my programming foundations and exploring front-end development.</p>
          </div>
        </section>

        <section className="section work-section" id="projects">
          <div className="section-heading">
            <div className="section-label"><span>02</span> SELECTED WORK</div>
            <h2>Projects & experiments</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top"><span>{project.number}</span><span>{project.type}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-label"><span>03</span> MY TOOLKIT</div>
          <div>
            <h2>Skills & interests</h2>
            <p className="skills-intro">Technologies and areas I’m learning and practising.</p>
            <div className="skill-list">
              <span>HTML & CSS</span><span>JavaScript</span><span>React</span>
              <span>Java</span><span>Python</span><span>Git & GitHub</span>
              <span>Problem solving</span><span>Responsive design</span>
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>Have an idea?<br /><em>Let’s build it.</em></h2>
          <a className="button light" href="mailto:maryam@example.com">maryam@example.com <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home">maryam<span>.</span></a>
        <p>© 2026 Maryam. Built with React.</p>
        <div><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
