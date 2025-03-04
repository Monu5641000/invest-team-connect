import { useState } from "react";
import Navbar from "@/components/Navbar";
import IdeaCard from "@/components/IdeaCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data with more details and images
const mockIdeas = [
  {
    id: "1",
    title: "AI-Powered Sustainable Agriculture Platform",
    description: "A platform that uses artificial intelligence to optimize crop yields while minimizing environmental impact. The system will analyze soil conditions, weather patterns, and historical data to provide farmers with actionable insights.",
    category: "AgTech",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop",
    },
    createdAt: "2 days ago",
    fundingNeeded: "$250,000",
    requiredSkills: "Machine Learning Engineer, Backend Developer, AgTech Specialist",
    targetAudience: "Small to medium-sized farms, Agricultural cooperatives",
    problemStatement: "Traditional farming lacks precision in resource allocation, leading to waste and environmental damage.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
  },
  {
    id: "2",
    title: "Decentralized Healthcare Marketplace",
    description: "A blockchain-based platform connecting patients directly with healthcare providers, eliminating intermediaries and reducing costs while ensuring data privacy and security.",
    category: "HealthTech",
    author: {
      name: "Mark Johnson",
      avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop",
    },
    createdAt: "5 days ago",
    fundingNeeded: "$500,000",
    requiredSkills: "Blockchain Developer, UX Designer, Healthcare Consultant",
    targetAudience: "Patients, Independent healthcare providers",
    problemStatement: "Healthcare costs are inflated by middlemen, while patient data is often compromised.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop",
  },
  {
    id: "3",
    title: "Virtual Reality Education Platform",
    description: "An immersive VR platform for educational institutions that transforms traditional learning materials into interactive 3D experiences, making complex concepts easier to understand.",
    category: "EdTech",
    author: {
      name: "Priya Patel",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop",
    },
    createdAt: "1 week ago",
    fundingNeeded: "$350,000",
    requiredSkills: "VR Developer, 3D Modeler, Educational Content Designer",
    targetAudience: "K-12 schools, Universities, Online education platforms",
    problemStatement: "Abstract concepts are difficult to grasp through traditional teaching methods.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
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
    fundingNeeded: "$175,000",
    requiredSkills: "Material Scientist, Product Designer, Environmental Engineer",
    targetAudience: "Environmentally conscious consumers, Outdoor enthusiasts",
    problemStatement: "Microplastics are increasingly present in drinking water with potential health consequences.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
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
    fundingNeeded: "$400,000",
    requiredSkills: "AI Engineer, Financial Analyst, Full Stack Developer",
    targetAudience: "Middle-income individuals, Young professionals",
    problemStatement: "Quality financial advice is only accessible to the wealthy, leaving most people underserved.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
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
    fundingNeeded: "$300,000",
    requiredSkills: "IoT Developer, Machine Learning Specialist, Electrical Engineer",
    targetAudience: "Homeowners, Property management companies",
    problemStatement: "Households waste significant energy due to inefficient usage patterns and lack of smart controls.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
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
                <SelectItem value="all-categories">All Categories</SelectItem>
                {uniqueCategories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
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
                image={idea.image}
                fundingNeeded={idea.fundingNeeded}
                requiredSkills={idea.requiredSkills}
                targetAudience={idea.targetAudience}
                problemStatement={idea.problemStatement}
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
