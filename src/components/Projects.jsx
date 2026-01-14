const projects = [
  {
    title: "CGTI & ALGI MoU",
    description:
      "CGTI and the Association of Lao Garment Industry signed an MoU to collaborate on garment sector training programs.",
  },
  {
    title: "Advanced Diploma in Energy & Sustainability",
    description:
      "A joint diploma program funded by USAID in collaboration with GGGI and TAFTAC.",
  },
  {
    title: "Upskilling Programme for 6,000 Students",
    description:
      "CGTI launched 23 courses nationwide to strengthen Cambodia’s workforce skills.",
  },
  {
    title: "Chinese Language Program",
    description:
      "CGTI and Guangdong Polytechnic launched Chinese classes for CGTI students.",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Notable Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 hover:border-primary transition"
            >
              <h3 className="font-semibold text-xl mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
