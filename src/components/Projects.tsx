
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "IoT Grid Monitoring System",
    description: "Led an 8.58M RMB R&D project implementing edge-AI solutions for power grid monitoring, reducing diagnostic delays by 30% using NodeMCU and AWS.",
    image: "https://images.unsplash.com/photo-1508807526679-697e5a1f5868?auto=format&fit=crop&q=80",
    demoUrl: "#",
    githubUrl: "#",
    technologies: ["Edge-AI", "NodeMCU", "AWS", "IEC 61850", "Power Diagnostics"]
  },
  {
    title: "MEMS Sensor Development",
    description: "Designed smart MEMS sensors for battery thermal runaway detection with 15% improved detection rates, deployed in smart building and automotive applications.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80",
    demoUrl: "#",
    githubUrl: "#",
    technologies: ["MEMS", "Thermal Sensors", "Battery Management", "Automotive Safety"]
  },
  {
    title: "National Grid Upgrade",
    description: "Managed installation of 33/11kV transformers (GE/ABB) and designed LV/MV distribution networks serving 250,000+ residents with SCADA monitoring for 15 substations.",
    image: "https://images.unsplash.com/photo-1551548021-174e7132f7d0?auto=format&fit=crop&q=80",
    demoUrl: "#",
    githubUrl: "#",
    technologies: ["SCADA", "GE/ABB Transformers", "EcoStruxure Grid", "IEC 61439"]
  },
  {
    title: "Industrial Control Systems",
    description: "Developed SCADA-ready control boards for water treatment plants compatible with Siemens S7-1200 and Schneider Modicon architectures, with ISO 13849 safety compliance.",
    image: "https://images.unsplash.com/photo-1507915600431-5292809c5ab7?auto=format&fit=crop&q=80",
    demoUrl: "#",
    githubUrl: "#",
    technologies: ["PCB Design", "Altium", "Siemens S7-1200", "ISO 13849", "Ladder Logic"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of innovative projects spanning IoT grid monitoring, MEMS sensor development, power systems, and industrial automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
