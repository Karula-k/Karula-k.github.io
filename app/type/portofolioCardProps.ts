export interface PortfolioCardProps {
  projectName: string;
  projectDate: string;
  projectDescription: string;
  image: string;
  techStack: string[];
  githubLink: string | null;
  liveDemoLink: string | null;
  isNDA?: boolean;  
  type: string;
}
