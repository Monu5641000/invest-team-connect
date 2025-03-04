
import { useState } from "react";
import Navbar from "@/components/Navbar";
import IdeaCard from "@/components/IdeaCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data
const mockIdeas = [
  {
    id: "1",
    title: "AI-Powered Sustainable Agriculture Platform",
    description: "A platform that uses artificial intelligence to optimize crop yields while minimizing environmental impact. The system will analyze soil conditions, weather patterns, and historical data to provide farmers with actionable insights.",
    category: "AgTech",
    author: {
      name: "Sarah Chen",
      avatar: "",
    },
    createdAt: "2 days ago",
  },
  {
    id: "2",
    title: "Decentralized Healthcare Marketplace",
    description: "A blockchain-based platform connecting patients directly with healthcare providers, eliminating intermediaries and reducing costs while ensuring data privacy and security.",
    category: "HealthTech",
    author: {
      name: "Mark Johnson",
      avatar: "",
    },
    createdAt: "5 days ago",
  },
  {
    id: "3",
    title: "Virtual Reality Education Platform",
    description: "An immersive VR platform for educational institutions that transforms traditional learning materials into interactive 3D experiences, making complex concepts easier to understand.",
    category: "EdTech",
    author: {
      name: "Priya Patel",
      avatar: "",
    },
    createdAt: "1 week ago",
  },
  {
    id: "4",
    title: "Microplastic Filtering Water Bottle",
    description: "A reusable water bottle with an advanced filtration system that removes microplastics and other contaminants from drinking water, combining sustainability with health benefits.",
    category: "CleanTech",
    author: {
      name: "Alex Rivera",
      avatar: "",
    },
    createdAt: "2 weeks ago",
  },
  {
    id: "5",
    title: "AI-Driven Financial Advisory Service",
    description: "A platform that democratizes access to financial advice through AI-powered analysis, offering personalized investment strategies and financial planning for individuals at all income levels.",
    category: "FinTech",
    author: {
      name: "Jordan Smith",
      avatar: "",
    },
    createdAt: "3 weeks ago",
  },
  {
    id: "6",
    title: "Smart Home Energy Optimization System",
    description: "An IoT system that learns household energy usage patterns and automatically optimizes consumption, reducing electricity bills and carbon footprint without sacrificing comfort.",
    category: "CleanTech",
    author: {
      name: "Emma Wilson",
      avatar: "",
    },
    createdAt: "1 month ago",
  },
];

const Ideas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  
  const filteredIdeas = mockIdeas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "" || idea.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  const uniqueCategories = Array.from(new Set(mockIdeas.map(idea => idea.category)));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up">
          <h1 className="text-3xl font-bold mb-4">Discover Innovative Ideas</h1>
          <p className="text-foreground/80">
            Explore startup ideas from creative minds around the world. Join a team or invest in the next big thing.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-fade-up animation-delay-100">
          <div className="flex-1">
            <Input
              placeholder="Search ideas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-full sm:w-48">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {uniqueCategories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*:nth-child(1)]:animation-delay-200 [&>*:nth-child(2)]:animation-delay-300 [&>*:nth-child(3)]:animation-delay-400 [&>*:nth-child(4)]:animation-delay-500">
          {filteredIdeas.length > 0 ? (
            filteredIdeas.map(idea => (
              <IdeaCard
                key={idea.id}
                id={idea.id}
                title={idea.title}
                description={idea.description}
                category={idea.category}
                author={idea.author}
                createdAt={idea.createdAt}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-foreground/60">No ideas match your search criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Ideas;
