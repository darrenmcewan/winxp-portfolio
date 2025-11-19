import React from 'react';

interface IconProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export const Icon: React.FC<IconProps> = ({ label, icon, onClick }) => {
  return (
    <div
      className="flex flex-col items-center w-24 p-2 cursor-pointer group hover:bg-blue-700/30 rounded transition-colors duration-100 border border-transparent hover:border-blue-500/30"
      onDoubleClick={onClick}
      // Mobile support
      onClick={(e) => {
        if (window.innerWidth < 768) onClick();
      }}
    >
      <div className="w-12 h-12 drop-shadow-xl filter">
        {icon}
      </div>
      <span 
        className="mt-1 text-white text-xs text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] font-medium px-1 truncate w-full"
        style={{ textShadow: '1px 1px 2px black' }}
      >
        {label}
      </span>
    </div>
  );
};