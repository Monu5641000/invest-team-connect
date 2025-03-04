
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
}

const IdeaCard: React.FC<IdeaCardProps> = ({
  id,
  title,
  description,
  category,
  author,
  createdAt,
}) => {
  return (
    <Card className="overflow-hidden smooth-transition hover:shadow-subtle-lg opacity-0 animate-fade-up">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="mb-2">
            {category}
          </Badge>
          <time className="text-xs text-foreground/60">{createdAt}</time>
        </div>
        <CardTitle className="line-clamp-2 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 line-clamp-3 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="pt-4 flex justify-between items-center border-t">
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
