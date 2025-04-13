
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, image, demoUrl, githubUrl, technologies }: ProjectProps) => {
  return (
    <Card className="overflow-hidden hover-scale">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors"
        >
          <Github size={18} />
          <span>Code</span>
        </a>
        <a 
          href={demoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors"
        >
          <ExternalLink size={18} />
          <span>Live Demo</span>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
