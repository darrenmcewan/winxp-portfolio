import React, { useState } from 'react';
import { FileText, Code, MessageSquare, Briefcase, Monitor, Mail } from 'lucide-react';
import { AppType, WindowState } from './types';
import { WindowFrame } from './components/WindowFrame';
import { Taskbar } from './components/Taskbar';
import { StartMenu } from './components/StartMenu';
import { Icon } from './components/Icon';
import { Resume } from './apps/Resume';
import { Projects } from './apps/Projects';
import { AIChat } from './apps/AIChat';
import { Email } from './apps/Email';

// Initial State Generator
const createInitialWindows = (): WindowState[] => [
  {
    id: 'resume-1',
    type: AppType.RESUME,
    title: 'Resume.pdf - Microsoft Word',
    icon: <FileText className="text-blue-700" size={16} />,
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 1,
    position: { x: 50, y: 50 },
    size: { width: 700, height: 600 }
  },
  {
    id: 'projects-1',
    type: AppType.PROJECTS,
    title: 'My Projects',
    icon: <Code className="text-green-600" size={16} />,
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 2,
    position: { x: 100, y: 80 },
    size: { width: 800, height: 500 }
  },
  {
    id: 'chat-1',
    type: AppType.AI_CHAT,
    title: 'AI Assistant (Gemini)',
    icon: <MessageSquare className="text-purple-600" size={16} />,
    isOpen: true, // Auto open chat
    isMinimized: false,
    isMaximized: false,
    zIndex: 3,
    position: { x: 200, y: 150 },
    size: { width: 400, height: 500 }
  },
  {
    id: 'browser-1',
    type: AppType.BROWSER,
    title: 'Internet Explorer',
    icon: <Briefcase className="text-blue-400" size={16} />,
    isOpen: false,
    isMinimized: false,
    isMaximized: true,
    zIndex: 4,
    position: { x: 0, y: 0 },
    size: { width: 800, height: 600 }
  },
  {
    id: 'email-1',
    type: AppType.EMAIL,
    title: 'New Message',
    icon: <Mail className="text-blue-600" size={16} />,
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 5,
    position: { x: 150, y: 100 },
    size: { width: 600, height: 450 }
  }
];

export default function App() {
  const [windows, setWindows] = useState<WindowState[]>(createInitialWindows());
  const [activeWindowId, setActiveWindowId] = useState<string | null>('chat-1');
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [highestZ, setHighestZ] = useState(10);

  const bringToFront = (id: string) => {
    setActiveWindowId(id);
    setWindows(prev => prev.map(w => {
      if (w.id === id) {
        return { ...w, zIndex: highestZ + 1, isMinimized: false };
      }
      return w;
    }));
    setHighestZ(prev => prev + 1);
  };

  const handleOpenApp = (type: AppType) => {
    const existing = windows.find(w => w.type === type);
    if (existing) {
      setWindows(prev => prev.map(w => 
        w.id === existing.id ? { ...w, isOpen: true, isMinimized: false, zIndex: highestZ + 1 } : w
      ));
      setActiveWindowId(existing.id);
      setHighestZ(prev => prev + 1);
    } else {
      // Logic to create new instance if allowing multiple (skipped for simplicity)
    }
  };

  const updateWindow = (id: string, changes: Partial<WindowState>) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, ...changes } : w));
  };

  const renderAppContent = (type: AppType) => {
    switch (type) {
      case AppType.RESUME: return <Resume />;
      case AppType.PROJECTS: return <Projects />;
      case AppType.AI_CHAT: return <AIChat />;
      case AppType.EMAIL: return <Email />;
      case AppType.BROWSER: return (
        <div className="w-full h-full flex flex-col bg-white">
          <div className="border-b p-2 bg-gray-100 text-xs">Address: http://www.google.com</div>
          <iframe src="https://www.google.com/webhp?igu=1" className="flex-1 w-full h-full border-none" title="browser" />
        </div>
      );
      default: return <div className="p-4">Content not found</div>;
    }
  };

  return (
    <div 
      className="w-screen h-screen overflow-hidden relative font-tahoma"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onClick={() => {
        if (isStartOpen) setIsStartOpen(false);
      }}
    >
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-4 z-0">
        <Icon 
          label="My Computer" 
          icon={<Monitor size={32} className="text-blue-200 fill-blue-600" />} 
          onClick={() => handleOpenApp(AppType.PROJECTS)} 
        />
        <Icon 
          label="My Projects" 
          icon={<Code size={32} className="text-green-400 fill-green-700" />} 
          onClick={() => handleOpenApp(AppType.PROJECTS)} 
        />
        <Icon 
          label="Resume.pdf" 
          icon={<FileText size={32} className="text-white fill-red-600" />} 
          onClick={() => handleOpenApp(AppType.RESUME)} 
        />
        <Icon 
          label="Internet" 
          icon={<Briefcase size={32} className="text-blue-300 fill-blue-500" />} 
          onClick={() => handleOpenApp(AppType.BROWSER)} 
        />
        <Icon 
          label="E-mail" 
          icon={<Mail size={32} className="text-blue-200 fill-blue-600" />} 
          onClick={() => handleOpenApp(AppType.EMAIL)} 
        />
         <Icon 
          label="Chat Assistant" 
          icon={<MessageSquare size={32} className="text-purple-300 fill-purple-600" />} 
          onClick={() => handleOpenApp(AppType.AI_CHAT)} 
        />
      </div>

      {/* Windows */}
      {windows.map(win => (
        <WindowFrame
          key={win.id}
          {...win}
          onClose={() => updateWindow(win.id, { isOpen: false })}
          onMinimize={() => updateWindow(win.id, { isMinimized: true })}
          onMaximize={() => updateWindow(win.id, { isMaximized: !win.isMaximized })}
          onFocus={() => bringToFront(win.id)}
          onMove={(x, y) => updateWindow(win.id, { position: { x, y } })}
        >
          {renderAppContent(win.type)}
        </WindowFrame>
      ))}

      {/* Start Menu */}
      <StartMenu 
        isOpen={isStartOpen} 
        onClose={() => setIsStartOpen(false)}
        onOpenApp={handleOpenApp}
      />

      {/* Taskbar */}
      <Taskbar 
        windows={windows} 
        activeId={activeWindowId}
        isStartOpen={isStartOpen}
        onToggleStart={() => setIsStartOpen(!isStartOpen)}
        onWindowClick={(id) => {
          const win = windows.find(w => w.id === id);
          if (win?.isMinimized || activeWindowId !== id) {
            bringToFront(id);
          } else {
            updateWindow(id, { isMinimized: true });
          }
        }}
      />
    </div>
  );
}