import React, { useState, useEffect } from 'react';
import { WindowState } from '../types';

interface TaskbarProps {
  windows: WindowState[];
  activeId: string | null;
  onToggleStart: () => void;
  isStartOpen: boolean;
  onWindowClick: (id: string) => void;
}

export const Taskbar: React.FC<TaskbarProps> = ({ 
  windows, activeId, onToggleStart, isStartOpen, onWindowClick 
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  return (
    <div className="h-10 w-full bg-[#245DDA] flex items-center fixed bottom-0 left-0 z-[10000] border-t-2 border-[#3E7FEE] select-none">
      {/* Start Button */}
      <button
        className={`
          h-[34px] px-2 ml-1 mr-2 rounded-r-[10px] rounded-l-[4px]
          flex items-center gap-2 font-bold text-white text-lg italic shadow-md
          transition-all duration-100
          ${isStartOpen 
            ? 'bg-[#2A6615] shadow-inner brightness-90' 
            : 'bg-gradient-to-b from-[#3C8D0D] via-[#3C8D0D] to-[#2A6615] hover:brightness-110'}
        `}
        style={{
           textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
           boxShadow: isStartOpen ? 'inset 2px 2px 4px rgba(0,0,0,0.5)' : '0px 2px 2px rgba(0,0,0,0.3)'
        }}
        onClick={onToggleStart}
      >
        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm p-0.5">
            <svg viewBox="0 0 88 88" className="w-full h-full">
                <path fill="#F25022" d="M0 0h42v42H0z"/>
                <path fill="#7FBA00" d="M46 0h42v42H46z"/>
                <path fill="#00A4EF" d="M0 46h42v42H0z"/>
                <path fill="#FFB900" d="M46 46h42v42H46z"/>
            </svg>
        </div>
        Start
      </button>

      {/* Divider */}
      <div className="w-[2px] h-[80%] bg-[#3A75E7] shadow-[1px_0_0_#0D2E75] mx-1 opacity-50"></div>

      {/* Quick Launch (Icons) */}
      <div className="flex items-center px-2 gap-2">
        <div className="w-4 h-4 bg-blue-300 rounded-sm opacity-80 hover:opacity-100 cursor-pointer"></div>
        <div className="w-4 h-4 bg-white rounded-sm opacity-80 hover:opacity-100 cursor-pointer"></div>
      </div>
      
      <div className="w-[2px] h-[80%] bg-[#3A75E7] shadow-[1px_0_0_#0D2E75] mx-1 opacity-50"></div>

      {/* Open Windows */}
      <div className="flex-1 flex items-center gap-1 px-1 overflow-x-auto">
        {windows.filter(w => w.isOpen).map(win => (
          <button
            key={win.id}
            onClick={() => onWindowClick(win.id)}
            className={`
              h-[28px] w-[160px] min-w-[60px] px-2 flex items-center gap-2 rounded-[2px] text-white text-xs
              border border-[#18449C]
              ${activeId === win.id && !win.isMinimized
                 ? 'bg-[#1E52B7] shadow-inner bg-opacity-90' 
                 : 'bg-[#3C81F3] hover:bg-[#5392F7] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]'}
            `}
          >
            <div className="w-4 h-4 shrink-0">{win.icon}</div>
            <span className="truncate text-shadow">{win.title}</span>
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className="h-full bg-[#0B9CEE] px-4 flex items-center gap-3 border-l border-[#104E8B] shadow-[inset_1px_2px_5px_rgba(0,0,0,0.3)] text-white text-xs">
        <div className="w-4 h-4 bg-white rounded-full opacity-80"></div> {/* Fake Notification */}
        <span className="text-white font-medium">{formatTime(time)}</span>
      </div>
    </div>
  );
};