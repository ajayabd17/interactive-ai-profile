
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Marine Conservation AI",
    category: "Machine Learning",
    description:
      "Developed a deep learning model to analyze time series data collected from ocean sensors to predict marine life patterns. This project uses neural networks to help conservation efforts by forecasting potential areas of concern.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
    tags: ["Python", "TensorFlow", "Time Series Analysis", "Neural Networks"],
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    id: 2,
    title: "Predictive Analytics Dashboard",
    category: "Full Stack",
    description:
      "A comprehensive dashboard built with React and TensorFlow.js that allows users to visualize and interact with predictive models. Features include real-time data processing and customizable visualizations.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
    tags: ["React", "TensorFlow.js", "D3.js", "Node.js"],
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    id: 3,
    title: "Full-Stack ML Application",
    category: "Full Stack",
    description:
      "An end-to-end application that integrates machine learning models into a user-friendly interface. The backend is built with Flask and serves ML models created with scikit-learn and PyTorch.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    tags: ["Python", "Flask", "React", "PyTorch", "scikit-learn"],
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    id: 4,
    title: "Automated Data Pipeline",
    category: "Data Engineering",
    description:
      "Created an automated data pipeline using Apache Airflow to collect, process, and analyze large datasets. The pipeline includes data validation, transformation, and loading into a data warehouse.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800",
    tags: ["Apache Airflow", "Python", "SQL", "Docker"],
    github: "https://github.com",
    demo: null,
  },
  {
    id: 5,
    title: "NLP Sentiment Analysis Tool",
    category: "Machine Learning",
    description:
      "A natural language processing tool that analyzes sentiment in text data. Implemented using transformer models to achieve high accuracy in detecting emotions and sentiment in various contexts.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
    tags: ["NLP", "BERT", "Transformers", "Python"],
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    id: 6,
    title: "UI Path Automation Solutions",
    category: "Automation",
    description:
      "Developed several automation workflows using UI Path to streamline business processes. These solutions reduced manual work by 80% and improved accuracy in data handling tasks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
    tags: ["UI Path", "RPA", "Workflow Automation"],
    github: "https://github.com",
    demo: null,
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">My Projects</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mb-12">
        A showcase of my work spanning machine learning, full-stack development,
        and automation solutions. Each project represents a unique challenge and
        learning opportunity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="glass-card overflow-hidden group animate-fade-in"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button asChild variant="outline" className="flex-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
                {project.demo && (
                  <Button asChild className="flex-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
