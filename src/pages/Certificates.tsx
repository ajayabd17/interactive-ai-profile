
import { Button } from "@/components/ui/button";

const certificates = [
  {
    id: 1,
    title: "Deep Learning Specialization",
    organization: "Coursera - DeepLearning.AI",
    date: "January 2023",
    description:
      "Completed the 5-course specialization covering neural networks, convolutional networks, sequence models, and more.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600",
    credential: "https://coursera.org",
  },
  {
    id: 2,
    title: "TensorFlow Developer Certificate",
    organization: "Google",
    date: "March 2023",
    description:
      "Earned Google's TensorFlow Developer Certificate demonstrating proficiency in building TensorFlow models.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600",
    credential: "https://tensorflow.org",
  },
  {
    id: 3,
    title: "UiPath RPA Developer Advanced",
    organization: "UiPath",
    date: "June 2023",
    description:
      "Advanced certification in Robotic Process Automation using the UiPath platform.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600",
    credential: "https://uipath.com",
  },
  {
    id: 4,
    title: "AWS Machine Learning Specialty",
    organization: "Amazon Web Services",
    date: "August 2023",
    description:
      "Validated expertise in designing, implementing, and maintaining machine learning solutions on AWS.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600",
    credential: "https://aws.amazon.com",
  },
  {
    id: 5,
    title: "Full-Stack Web Development",
    organization: "Meta",
    date: "October 2023",
    description:
      "Comprehensive course covering modern web development with React, Node.js, and database integration.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600",
    credential: "https://meta.com",
  },
  {
    id: 6,
    title: "Data Science Professional Certificate",
    organization: "IBM",
    date: "December 2023",
    description:
      "Completed 10-course program covering data science methodology, Python, SQL, visualization, and machine learning.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600",
    credential: "https://ibm.com",
  },
];

const Certificates = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">My Certificates</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mb-12">
        A collection of my professional certifications and completed courses in
        machine learning, data science, and software development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform duration-300 animate-fade-in"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-primary mb-1">
                {certificate.title}
              </h3>
              <div className="flex items-center justify-between mb-3 text-sm">
                <span>{certificate.organization}</span>
                <span className="text-muted-foreground">{certificate.date}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {certificate.description}
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a
                  href={certificate.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Credential
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
