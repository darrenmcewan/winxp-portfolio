import React, { useState, useRef, useEffect } from 'react';
import { X, Minus, Square } from 'lucide-react';

interface WindowFrameProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onMove: (x: number, y: number) => void;
  children: React.ReactNode;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  id, title, icon, isOpen, isMinimized, isMaximized, zIndex, position, size,
  onClose, onMinimize, onMaximize, onFocus, onMove, children
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      // Prevent dragging off-screen completely
      const newX = Math.max(-100, Math.min(window.innerWidth - 100, e.clientX - dragOffset.x));
      const newY = Math.max(0, Math.min(window.innerHeight - 100, e.clientY - dragOffset.y));
      onMove(newX, newY);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, onMove]);

  if (!isOpen || isMinimized) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    onFocus();
    if (isMaximized) return;
    
    const rect = windowRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const currentStyle = isMaximized 
    ? { top: 0, left: 0, width: '100%', height: 'calc(100% - 40px)' } 
    : { top: position.y, left: position.x, width: size.width, height: size.height };

  return (
    <div
      ref={windowRef}
      className="absolute flex flex-col bg-[#ECE9D8] rounded-t-lg shadow-[4px_4px_12px_rgba(0,0,0,0.4)] border-[3px] border-[#0054E3]"
      style={{
        ...currentStyle,
        zIndex,
        transition: isDragging ? 'none' : 'all 0.1s ease-out'
      }}
      onMouseDown={onFocus}
    >
      {/* Title Bar */}
      <div
        className={`h-8 flex items-center justify-between px-2 select-none cursor-default rounded-t-[3px] ${
          zIndex > 10 ? 'bg-gradient-to-r from-[#0058EE] via-[#3593FF] to-[#288EFF]' : 'bg-gradient-to-r from-[#7697C5] to-[#7697C5]'
        }`}
        onMouseDown={handleMouseDown}
        onDoubleClick={onMaximize}
      >
        <div className="flex items-center gap-2 text-white font-bold text-shadow-sm">
           <div className="w-4 h-4">{icon}</div>
           <span className="text-[13px] drop-shadow-md truncate max-w-[200px]">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="w-5 h-5 bg-[#0054E3] hover:bg-[#2F71CD] rounded-[3px] flex items-center justify-center border border-white/50 text-white shadow-inner"
          >
            <Minus size={12} strokeWidth={3} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onMaximize(); }}
            className="w-5 h-5 bg-[#0054E3] hover:bg-[#2F71CD] rounded-[3px] flex items-center justify-center border border-white/50 text-white shadow-inner"
          >
            <Square size={10} strokeWidth={3} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="w-5 h-5 bg-[#E44B26] hover:bg-[#D53C1A] rounded-[3px] flex items-center justify-center border border-white/50 text-white shadow-inner"
          >
            <X size={14} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Menu Bar (Optional, visual only) */}
      <div className="bg-[#ECE9D8] border-b border-[#D1CEBD] px-2 py-1 flex gap-3 text-xs text-black">
        <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">File</span>
        <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">Edit</span>
        <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">View</span>
        <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">Help</span>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-white m-1 overflow-hidden border border-[#828790] shadow-inner relative">
         {children}
      </div>
    </div>
  );
};