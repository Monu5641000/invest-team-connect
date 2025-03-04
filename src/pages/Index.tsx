
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 opacity-0 animate-fade-in animation-delay-100">
              Turn Ideas Into Reality
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-up animation-delay-200">
              Where Great Ideas Find Teams and Funding
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-300">
              Ideaflow connects innovators with talented teammates and investors. Post your startup idea, build your dream team, and secure the funding you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-up animation-delay-400">
              <Link to="/ideas">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Ideas
                </Button>
              </Link>
              <Link to="/post-idea">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Share Your Idea
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-up">How It Works</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-100">
              A simple three-step process to bring your ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="glass-panel p-6 rounded-xl opacity-0 animate-fade-up animation-delay-200">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6 mx-auto">
                1
              </div>
              <h3 className="text-xl font-medium mb-3 text-center">Post Your Idea</h3>
              <p className="text-foreground/80 text-center">
                Share your startup concept with our community. Describe your vision, goals, and what you're looking for.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl opacity-0 animate-fade-up animation-delay-300">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6 mx-auto">
                2
              </div>
              <h3 className="text-xl font-medium mb-3 text-center">Build Your Team</h3>
              <p className="text-foreground/80 text-center">
                Review applications from talented individuals who want to join your startup and build your dream team.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl opacity-0 animate-fade-up animation-delay-400">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6 mx-auto">
                3
              </div>
              <h3 className="text-xl font-medium mb-3 text-center">Secure Funding</h3>
              <p className="text-foreground/80 text-center">
                Connect with investors who believe in your vision and are ready to help turn your idea into reality.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="neo-blur p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Launch Your Startup?</h2>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Join our community of innovators, entrepreneurs, and investors today.
            </p>
            <Link to="/post-idea">
              <Button size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-foreground/60 text-sm">
                © 2023 Ideaflow. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/60 hover:text-foreground text-sm">
                Terms
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground text-sm">
                Privacy
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
