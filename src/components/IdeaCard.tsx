
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface IdeaCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
  createdAt: string;
  image?: string;
  fundingNeeded?: string;
  requiredSkills?: string;
  targetAudience?: string;
  problemStatement?: string;
}

const IdeaCard: React.FC<IdeaCardProps> = ({
  id,
  title,
  description,
  category,
  author,
  createdAt,
  image,
  fundingNeeded,
  requiredSkills,
  targetAudience,
  problemStatement,
}) => {
  return (
    <Card className="overflow-hidden smooth-transition hover:shadow-subtle-lg opacity-0 animate-fade-up flex flex-col h-full">
      {image && (
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
              {category}
            </Badge>
          </div>
        </div>
      )}
      
      <CardHeader className={`pb-3 ${image ? 'pt-4' : ''}`}>
        <div className="flex justify-between items-start">
          {!image && (
            <Badge variant="outline" className="mb-2">
              {category}
            </Badge>
          )}
          <time className="text-xs text-foreground/60 ml-auto">{createdAt}</time>
        </div>
        <CardTitle className="line-clamp-2 text-xl">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-foreground/80 line-clamp-3 text-sm mb-4">{description}</p>
        
        {(fundingNeeded || requiredSkills || targetAudience) && (
          <div className="grid grid-cols-1 gap-2 mt-3 text-xs">
            {fundingNeeded && (
              <div className="flex items-center gap-2">
                <span className="font-medium">Funding:</span>
                <span className="text-foreground/80">{fundingNeeded}</span>
              </div>
            )}
            {targetAudience && (
              <div className="flex items-center gap-2">
                <span className="font-medium">Target:</span>
                <span className="text-foreground/80 line-clamp-1">{targetAudience}</span>
              </div>
            )}
            {requiredSkills && (
              <div className="flex items-center gap-2">
                <span className="font-medium">Skills:</span>
                <span className="text-foreground/80 line-clamp-1">{requiredSkills}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-4 flex justify-between items-center border-t mt-auto">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{author.name}</span>
        </div>
        <div className="flex space-x-2">
          <Link to={`/join-team/${id}`}>
            <Button variant="outline" size="sm">
              Join Team
            </Button>
          </Link>
          <Link to={`/investment/${id}`}>
            <Button size="sm">
              Invest
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default IdeaCard;
