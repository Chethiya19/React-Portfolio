import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'WardrobeX',
      description: 'A full-stack MERN E-commerce Web application for online shopping with cart, wishlist, and payment features.',
      link: 'https://github.com/Chethiya19/WardrobeX'
    },
    {
      title: 'Inventory Management System',
      description: 'Angular + Node.js + MySQL system for managing products, stock in/out, and reports , charts.',
      link: 'https://github.com/Chethiya19/Inventory-Management-System'
    },
    {
      title: 'Motor-Hub',
      description: "Vehicle Price Prediction Website using Springboot, React and Python Flask",
      link: 'https://github.com/Chethiya19/Motor-Hub'
    },
    {
      title: 'NITF-Website',
      description: "React + Springboot Website Like National Insurance Trust Fund Board's Website",
      link: 'https://github.com/Chethiya19/NITF-Website'
    },
    {
      title: 'Healthy-Life ',
      description: "Web application for food scheduling and ordering system using PHP",
      link: 'https://github.com/Chethiya19/Computing-Project-Healthy-Life'
    },
    {
      title: 'Lab-Appointment-System',
      description: 'Java Rest API webservice NetBeans MySQL.',
      link: 'https://github.com/Chethiya19/Lab-Appointment-System'
    },
    // {
    //   title: 'AI Chatbot',
    //   description: 'Flask-based AI/NLP chatbot integrated with a React frontend.',
    //   link: 'https://github.com/Chethiya19/Chatbot'
    // },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
