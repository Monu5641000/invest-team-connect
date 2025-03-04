
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock idea details
const mockIdeas = {
  "1": {
    title: "AI-Powered Sustainable Agriculture Platform",
    author: "Sarah Chen",
    category: "AgTech",
    description: "A platform that uses artificial intelligence to optimize crop yields while minimizing environmental impact. The system will analyze soil conditions, weather patterns, and historical data to provide farmers with actionable insights.",
    fundingGoal: 150000,
    currentFunding: 65000,
    backers: 12,
    projections: [
      { month: "Jan", revenue: 0 },
      { month: "Feb", revenue: 0 },
      { month: "Mar", revenue: 5000 },
      { month: "Apr", revenue: 12000 },
      { month: "May", revenue: 25000 },
      { month: "Jun", revenue: 40000 },
      { month: "Jul", revenue: 65000 },
      { month: "Aug", revenue: 95000 },
      { month: "Sep", revenue: 135000 },
      { month: "Oct", revenue: 185000 },
      { month: "Nov", revenue: 245000 },
      { month: "Dec", revenue: 315000 },
    ],
    valuation: 1500000,
    equity: 10
  },
  "2": {
    title: "Decentralized Healthcare Marketplace",
    author: "Mark Johnson",
    category: "HealthTech",
    description: "A blockchain-based platform connecting patients directly with healthcare providers, eliminating intermediaries and reducing costs while ensuring data privacy and security.",
    fundingGoal: 250000,
    currentFunding: 125000,
    backers: 18,
    projections: [
      { month: "Jan", revenue: 0 },
      { month: "Feb", revenue: 0 },
      { month: "Mar", revenue: 8000 },
      { month: "Apr", revenue: 20000 },
      { month: "May", revenue: 45000 },
      { month: "Jun", revenue: 75000 },
      { month: "Jul", revenue: 110000 },
      { month: "Aug", revenue: 155000 },
      { month: "Sep", revenue: 210000 },
      { month: "Oct", revenue: 280000 },
      { month: "Nov", revenue: 360000 },
      { month: "Dec", revenue: 450000 },
    ],
    valuation: 2500000,
    equity: 12
  },
  "3": {
    title: "Virtual Reality Education Platform",
    author: "Priya Patel",
    category: "EdTech",
    description: "An immersive VR platform for educational institutions that transforms traditional learning materials into interactive 3D experiences, making complex concepts easier to understand.",
    fundingGoal: 200000,
    currentFunding: 85000,
    backers: 15,
    projections: [
      { month: "Jan", revenue: 0 },
      { month: "Feb", revenue: 0 },
      { month: "Mar", revenue: 7000 },
      { month: "Apr", revenue: 18000 },
      { month: "May", revenue: 35000 },
      { month: "Jun", revenue: 60000 },
      { month: "Jul", revenue: 90000 },
      { month: "Aug", revenue: 125000 },
      { month: "Sep", revenue: 170000 },
      { month: "Oct", revenue: 225000 },
      { month: "Nov", revenue: 290000 },
      { month: "Dec", revenue: 365000 },
    ],
    valuation: 2000000,
    equity: 10
  }
};

const Investment = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState(5000);
  
  // Get idea details or use fallback
  const idea = id && mockIdeas[id as keyof typeof mockIdeas] 
    ? mockIdeas[id as keyof typeof mockIdeas] 
    : { 
        title: "Example Startup", 
        author: "Founder", 
        category: "Technology", 
        description: "This is an example startup description.",
        fundingGoal: 100000,
        currentFunding: 50000,
        backers: 10,
        projections: Array(12).fill(0).map((_, i) => ({ month: `Month ${i+1}`, revenue: i * 10000 })),
        valuation: 1000000,
        equity: 10
      };
  
  const progressPercentage = (idea.currentFunding / idea.fundingGoal) * 100;
  const equityPercentage = (investmentAmount / idea.valuation) * 100;
  
  const handleInvest = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Investment of $${investmentAmount.toLocaleString()} submitted!`);
      navigate("/ideas");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8 opacity-0 animate-fade-up">
          <h1 className="text-3xl font-bold">{idea.title}</h1>
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-sm text-foreground/60">by {idea.author}</p>
            <div className="h-1 w-1 rounded-full bg-foreground/20"></div>
            <p className="text-sm text-foreground/60">{idea.category}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="opacity-0 animate-fade-up animation-delay-100">
              <Tabs defaultValue="overview">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle>Investment Opportunity</CardTitle>
                    <TabsList>
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="financials">Financials</TabsTrigger>
                      <TabsTrigger value="team">Team</TabsTrigger>
                    </TabsList>
                  </div>
                  <CardDescription>
                    Current valuation: ${(idea.valuation / 1000000).toFixed(1)}M
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <TabsContent value="overview" className="mt-0">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">About the Idea</h3>
                        <p className="text-foreground/80">{idea.description}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Market Opportunity</h3>
                        <p className="text-foreground/80">
                          The global market for {idea.category} solutions is projected to reach $XXB by 2028, 
                          with a CAGR of XX%. This startup is positioned to capture a significant market share 
                          by offering innovative solutions to key industry challenges.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Competitive Advantage</h3>
                        <ul className="space-y-2 text-foreground/80 list-disc pl-5">
                          <li>Proprietary technology with patent-pending status</li>
                          <li>First-mover advantage in an emerging market segment</li>
                          <li>Experienced founding team with industry expertise</li>
                          <li>Scalable business model with multiple revenue streams</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="financials" className="mt-0">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Projected Revenue (Year 1)</h3>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                              data={idea.projections}
                              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="month" />
                              <YAxis />
                              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                              <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-secondary/30 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-foreground/60">Break-Even Point</h4>
                          <p className="text-xl font-medium">Month 8</p>
                        </div>
                        
                        <div className="bg-secondary/30 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-foreground/60">Year 1 Revenue</h4>
                          <p className="text-xl font-medium">${(idea.projections[11].revenue * 1.5).toLocaleString()}</p>
                        </div>
                        
                        <div className="bg-secondary/30 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-foreground/60">Projected ROI</h4>
                          <p className="text-xl font-medium">2.4x (3 years)</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="team" className="mt-0">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-medium">
                            {idea.author.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-lg font-medium">{idea.author}</h3>
                            <p className="text-sm text-foreground/60 mb-2">Founder & CEO</p>
                            <p className="text-sm text-foreground/80">
                              10+ years of experience in {idea.category}. Previously led product development at Fortune 500 companies.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-medium">
                            CT
                          </div>
                          <div>
                            <h3 className="text-lg font-medium">Chris Taylor</h3>
                            <p className="text-sm text-foreground/60 mb-2">CTO</p>
                            <p className="text-sm text-foreground/80">
                              Former senior engineer at Google. Expert in scalable systems and machine learning.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-medium">
                            JW
                          </div>
                          <div>
                            <h3 className="text-lg font-medium">Jamie Wong</h3>
                            <p className="text-sm text-foreground/60 mb-2">CMO</p>
                            <p className="text-sm text-foreground/80">
                              15 years in growth marketing for startups. Led campaigns that drove millions in revenue.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-medium">
                            KR
                          </div>
                          <div>
                            <h3 className="text-lg font-medium">Kira Rodriguez</h3>
                            <p className="text-sm text-foreground/60 mb-2">Head of Operations</p>
                            <p className="text-sm text-foreground/80">
                              Former operations lead at successful Series B startup. Expert in process optimization.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Advisors</h3>
                        <p className="text-foreground/80">
                          The team is supported by industry advisors from leading companies in the {idea.category} space, 
                          including executives from Fortune 500 companies and successful entrepreneurs.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </CardContent>
              </Tabs>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="opacity-0 animate-fade-up animation-delay-200">
              <CardHeader>
                <CardTitle>Investment</CardTitle>
                <CardDescription>
                  Funding progress: ${idea.currentFunding.toLocaleString()} of ${idea.fundingGoal.toLocaleString()}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-full rounded-full" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm text-foreground/60">
                  <span>{progressPercentage.toFixed(0)}% Funded</span>
                  <span>{idea.backers} Backers</span>
                </div>
                
                <div className="pt-4">
                  <label htmlFor="amount" className="text-sm font-medium">
                    Investment Amount
                  </label>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-foreground/60">$</span>
                    <Input 
                      id="amount"
                      type="number" 
                      min="1000"
                      max="1000000"
                      step="1000"
                      value={investmentAmount} 
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="flex-1"
                    />
                  </div>
                </div>
                
                <div className="pt-1">
                  <Slider 
                    defaultValue={[5000]} 
                    max={100000}
                    step={1000}
                    min={1000}
                    value={[investmentAmount]}
                    onValueChange={([value]) => setInvestmentAmount(value)}
                  />
                  <div className="flex justify-between text-xs text-foreground/60 mt-1">
                    <span>$1,000</span>
                    <span>$100,000</span>
                  </div>
                </div>
                
                <div className="bg-secondary/30 p-4 rounded-lg mt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Equity Received:</span>
                    <span className="font-medium">{equityPercentage.toFixed(3)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Valuation Cap:</span>
                    <span className="font-medium">${(idea.valuation / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handleInvest}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Invest Now"}
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="opacity-0 animate-fade-up animation-delay-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Key Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/70">Funding Round:</span>
                  <span className="font-medium">Seed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/70">Minimum Investment:</span>
                  <span className="font-medium">$1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/70">Total Equity Offered:</span>
                  <span className="font-medium">{idea.equity}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/70">Est. Exit Timeline:</span>
                  <span className="font-medium">4-6 years</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Investment;
