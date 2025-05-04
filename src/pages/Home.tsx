
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="section flex flex-col-reverse md:flex-row items-center gap-8 container mx-auto px-4">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            I am a Computer Science student specializing in Artificial Intelligence w/s Machine Learning.
          </p>
          <p className="text-muted-foreground">
            Passionate about deep learning, predictive modeling, and full-stack development. Recently, I worked on a project involving time series analysis and neural networks for marine conservation.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild>
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
            <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-primary/20">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Education</h2>
          <div className="glass-card p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-primary">SRM University</h3>
            <p className="text-muted-foreground">2022–Present</p>
            <p className="mt-2">B.Tech in Computer Science</p>
            <p className="text-muted-foreground">Expected Graduation: 2026</p>
            <p className="mt-4">
              Specializing in Artificial Intelligence and Machine Learning. Relevant coursework includes Deep Learning, Computer Vision, Natural Language Processing, and Data Structures & Algorithms.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Experience</h2>
        <div className="glass-card p-6 md:p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-primary">UI Path Automation</h3>
          <p className="text-muted-foreground">2023</p>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li>Developed automated workflows to streamline business processes</li>
            <li>Implemented RPA solutions for data extraction and processing</li>
            <li>Collaborated with cross-functional teams to identify automation opportunities</li>
          </ul>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <Button variant="outline" asChild>
              <Link to="/projects">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=300"
                  alt="Project 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary">Marine Conservation AI</h3>
                <p className="text-sm text-muted-foreground mb-4">Neural Networks & Time Series Analysis</p>
                <p className="line-clamp-3 mb-4">
                  Developed a predictive model using neural networks to analyze marine data and support conservation efforts.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            </div>
            <div className="glass-card overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=300"
                  alt="Project 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary">Predictive Analytics Dashboard</h3>
                <p className="text-sm text-muted-foreground mb-4">React & TensorFlow.js</p>
                <p className="line-clamp-3 mb-4">
                  A web-based dashboard that visualizes predictive models and provides real-time analytics.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            </div>
            <div className="glass-card overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&h=300"
                  alt="Project 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary">Full-Stack ML Application</h3>
                <p className="text-sm text-muted-foreground mb-4">Python, Flask & React</p>
                <p className="line-clamp-3 mb-4">
                  An end-to-end application that integrates machine learning models into a user-friendly interface.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
