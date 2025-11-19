import type { ReactNode } from 'react';

export const AppType = {
  RESUME: 'RESUME',
  PROJECTS: 'PROJECTS',
  ABOUT: 'ABOUT',
  AI_CHAT: 'AI_CHAT',
  BROWSER: 'BROWSER',
  EMAIL: 'EMAIL'
} as const;

export type AppType = typeof AppType[keyof typeof AppType];

export interface WindowState {
  id: string;
  type: AppType;
  title: string;
  icon: ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export interface DesktopIconProps {
  label: string;
  icon: ReactNode;
  onClick: () => void;
}