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
  tooltipType: 'portfolio' | 'intranet' | 'gallery' | 'weatherApp' | 'robloxGame';
  className?: string;
  link?: string;
}

export interface TooltipItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface ProjectTooltipProps {
  type: 'portfolio' | 'intranet' | 'gallery' | 'weatherApp' | 'robloxGame';
}

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tooltipComponent: React.ReactNode;
  className?: string;
  link?: string;
}

export interface ExperienceItem {
  title: string;
  description: string;
  content: React.ReactNode;
}