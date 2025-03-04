
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  "FinTech",
  "HealthTech",
  "EdTech",
  "CleanTech",
  "AgTech",
  "AI/ML",
  "Blockchain",
  "SaaS",
  "E-commerce",
  "Other"
];

const PostIdea = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    problemStatement: "",
    targetAudience: "",
    requiredSkills: "",
    fundingNeeded: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your idea has been posted successfully!");
      navigate("/ideas");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10 opacity-0 animate-fade-up">
          <h1 className="text-3xl font-bold mb-2">Share Your Startup Idea</h1>
          <p className="text-foreground/80">
            Tell us about your concept and connect with potential team members and investors.
          </p>
        </div>
        
        <Card className="opacity-0 animate-fade-up animation-delay-100">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Idea Details</CardTitle>
              <CardDescription>
                Provide comprehensive information to attract the right people to your idea.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Idea Title *
                </label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="E.g., AI-Powered Healthcare Assistant"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Category *
                </label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => handleSelectChange("category", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Idea Description *
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Provide a detailed description of your idea..."
                  rows={5}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="problemStatement" className="text-sm font-medium">
                  Problem Statement *
                </label>
                <Textarea
                  id="problemStatement"
                  name="problemStatement"
                  value={formData.problemStatement}
                  onChange={handleChange}
                  placeholder="What problem does your idea solve?"
                  rows={3}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="targetAudience" className="text-sm font-medium">
                  Target Audience/Market *
                </label>
                <Input
                  id="targetAudience"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  placeholder="Who will benefit from your solution?"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="requiredSkills" className="text-sm font-medium">
                  Required Team Skills *
                </label>
                <Input
                  id="requiredSkills"
                  name="requiredSkills"
                  value={formData.requiredSkills}
                  onChange={handleChange}
                  placeholder="E.g., Full Stack Developer, UI/UX Designer, Marketing"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="fundingNeeded" className="text-sm font-medium">
                  Funding Needed (Estimated)
                </label>
                <Input
                  id="fundingNeeded"
                  name="fundingNeeded"
                  value={formData.fundingNeeded}
                  onChange={handleChange}
                  placeholder="E.g., $50,000 for MVP development"
                />
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Posting..." : "Post Idea"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default PostIdea;
