export enum AppType {
  RESUME = 'RESUME',
  PROJECTS = 'PROJECTS',
  ABOUT = 'ABOUT',
  AI_CHAT = 'AI_CHAT',
  BROWSER = 'BROWSER',
  EMAIL = 'EMAIL'
}

export interface WindowState {
  id: string;
  type: AppType;
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export interface DesktopIconProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}