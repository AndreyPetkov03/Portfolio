export interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export interface ProjectData {
  id: number;
  image: string;
  title: string;
  description: string;
  tooltipType: 'portfolio' | 'intranet' | 'gallery' | 'weatherApp' | 'robloxGame' | 'cryptoCasino' | 'gymcoachAI' | 'webappteck' | 'unityGame' | 'comingSoon';
  className?: string;
  githubLink?: string;
  liveLink?: string;
  imageFit?: 'cover' | 'contain';
}

export interface TooltipItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface ProjectTooltipProps {
  type: 'portfolio' | 'intranet' | 'gallery' | 'weatherApp' | 'robloxGame' | 'cryptoCasino' | 'gymcoachAI' | 'webappteck' | 'unityGame' | 'comingSoon';
}

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  stack: TooltipItem[];
  className?: string;
  githubLink?: string;
  liveLink?: string;
  imageFit?: 'cover' | 'contain';
}

export interface ExperienceItem {
  title: string;
  description: string;
  content: React.ReactNode;
}