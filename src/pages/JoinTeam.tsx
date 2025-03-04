
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock idea details
const mockIdeas = {
  "1": {
    title: "AI-Powered Sustainable Agriculture Platform",
    author: "Sarah Chen",
    category: "AgTech",
  },
  "2": {
    title: "Decentralized Healthcare Marketplace",
    author: "Mark Johnson",
    category: "HealthTech",
  },
  "3": {
    title: "Virtual Reality Education Platform",
    author: "Priya Patel",
    category: "EdTech",
  },
  "4": {
    title: "Microplastic Filtering Water Bottle",
    author: "Alex Rivera",
    category: "CleanTech",
  },
  "5": {
    title: "AI-Driven Financial Advisory Service",
    author: "Jordan Smith",
    category: "FinTech",
  }
};

const JoinTeam = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get idea details or use fallback
  const idea = id && mockIdeas[id as keyof typeof mockIdeas] 
    ? mockIdeas[id as keyof typeof mockIdeas] 
    : { title: "This startup idea", author: "Idea owner", category: "Technology" };
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    experience: "",
    skills: "",
    motivation: "",
    linkedin: "",
    portfolio: "",
    availability: "",
    agreedToTerms: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreedToTerms: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success",
        description: "Your application has been submitted!",
      });
      navigate("/ideas");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10 opacity-0 animate-fade-up">
          <h1 className="text-3xl font-bold mb-2">Join the Team</h1>
          <p className="text-foreground/80 mb-2">
            Apply to join <span className="font-medium text-primary">{idea.title}</span>
          </p>
          <p className="text-sm text-foreground/60">
            by {idea.author} • {idea.category}
          </p>
        </div>
        
        <Card className="opacity-0 animate-fade-up animation-delay-100">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Your Qualifications</CardTitle>
              <CardDescription>
                Tell us about your skills and experience to see if you're a good fit for the team.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium">
                  Desired Role *
                </label>
                <Input
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="E.g., Full Stack Developer, UX Designer, Marketing Lead"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="experience" className="text-sm font-medium">
                  Years of Experience *
                </label>
                <Select
                  value={formData.experience}
                  onValueChange={(value) => handleSelectChange("experience", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="skills" className="text-sm font-medium">
                  Key Skills *
                </label>
                <Textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="List your relevant skills and technologies..."
                  rows={3}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="motivation" className="text-sm font-medium">
                  Why do you want to join this team? *
                </label>
                <Textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Explain your interest in this idea and what you can contribute..."
                  rows={4}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="linkedin" className="text-sm font-medium">
                  LinkedIn Profile
                </label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourusername"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="portfolio" className="text-sm font-medium">
                  Portfolio/GitHub URL
                </label>
                <Input
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://github.com/yourusername"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="availability" className="text-sm font-medium">
                  Availability *
                </label>
                <Select
                  value={formData.availability}
                  onValueChange={(value) => handleSelectChange("availability", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time (20+ hours/week)</SelectItem>
                    <SelectItem value="evenings-weekends">Evenings & Weekends</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={formData.agreedToTerms}
                  onCheckedChange={handleCheckboxChange}
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-foreground/80"
                >
                  I agree to the terms and conditions and understand that my application will be shared with the idea owner.
                </label>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={() => navigate("/ideas")}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting || !formData.agreedToTerms}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default JoinTeam;
