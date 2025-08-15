import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          Hi, I'm Chethiya Senadheera, a BSc(Hons) Software Engineering graduate from Cardiff Metropolitan University. 
          I love building web applications, software applications, exploring AI & ML projects, and creating user-friendly designs.  
        </p>
        <p className="about-text">
          My skills include React, Angular, Node.js, Express, Java, Python, C#, MongoDB and MySql. I enjoy turning ideas into real-world applications and continuously learning new technologies.
        </p>
        <a href="#contact" className="btn-contact">Get in Touch</a>
      </div>
    </section>
  );
}
