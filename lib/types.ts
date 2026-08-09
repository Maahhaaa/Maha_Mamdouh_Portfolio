export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string;
  solution: string;
  category: string;
  status: string;
  date: string;
  github: string;
  liveDemo: string;
  previewUrl: string | null;
  color: string;
  tags: string[];
}
