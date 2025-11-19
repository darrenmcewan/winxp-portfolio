import React from 'react';
import { User, LogOut, ChevronRight, Briefcase, FileText, MessageSquare, Code, Mail } from 'lucide-react';
import { AppType } from '../types';

interface StartMenuProps {
  isOpen: boolean;
  onOpenApp: (type: AppType) => void;
  onClose: () => void;
}

export const StartMenu: React.FC<StartMenuProps> = ({ isOpen, onOpenApp, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute bottom-10 left-0 w-[380px] h-[500px] bg-white rounded-t-lg shadow-[4px_4px_10px_rgba(0,0,0,0.5)] flex flex-col z-[9999] border-2 border-[#0054E3] overflow-hidden">
      {/* Header */}
      <div className="h-16 bg-gradient-to-r from-[#245DDA] to-[#3876EA] flex items-center px-4 rounded-t-sm border-b-2 border-[#E68B2C]">
        <div className="w-10 h-10 bg-white rounded border-2 border-white/50 flex items-center justify-center overflow-hidden shadow-inner">
          <img src="https://picsum.photos/40/40?random=99" alt="User" className="opacity-90" />
        </div>
        <span className="ml-3 text-white font-bold text-lg drop-shadow-md">Guest User</span>
      </div>

      {/* Body */}
      <div className="flex flex-1 bg-white">
        {/* Left Column - Pinned/Frequent Apps */}
        <div className="w-1/2 bg-white flex flex-col py-2 pr-1">
          <button 
            onClick={() => { onOpenApp(AppType.BROWSER); onClose(); }}
            className="flex items-center px-3 py-2 hover:bg-[#2F71CD] hover:text-white group transition-colors"
          >
            <div className="w-8 h-8 mr-2 text-blue-600 group-hover:text-white"><Briefcase size={32} /></div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-sm text-gray-800 group-hover:text-white">Internet</span>
              <span className="text-xs text-gray-500 group-hover:text-blue-100">Explorer</span>
            </div>
          </button>

          <button 
            onClick={() => { onOpenApp(AppType.EMAIL); onClose(); }}
            className="flex items-center px-3 py-2 hover:bg-[#2F71CD] hover:text-white group transition-colors"
          >
            <div className="w-8 h-8 mr-2 text-blue-600 group-hover:text-white"><Mail size={32} /></div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-sm text-gray-800 group-hover:text-white">E-mail</span>
              <span className="text-xs text-gray-500 group-hover:text-blue-100">Outlook Express</span>
            </div>
          </button>

          <button 
             onClick={() => { onOpenApp(AppType.RESUME); onClose(); }}
             className="flex items-center px-3 py-2 hover:bg-[#2F71CD] hover:text-white group transition-colors"
          >
            <div className="w-8 h-8 mr-2 text-gray-700 group-hover:text-white"><FileText size={32} /></div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-sm text-gray-800 group-hover:text-white">Resume</span>
              <span className="text-xs text-gray-500 group-hover:text-blue-100">Microsoft Word</span>
            </div>
          </button>

          <div className="my-2 border-t border-gray-300 mx-2"></div>

          <button 
             onClick={() => { onOpenApp(AppType.PROJECTS); onClose(); }}
             className="flex items-center px-3 py-2 hover:bg-[#2F71CD] hover:text-white group transition-colors"
          >
             <div className="w-8 h-8 mr-2 text-green-600 group-hover:text-white"><Code size={32} /></div>
             <span className="font-sm text-gray-800 group-hover:text-white">My Projects</span>
          </button>

          <button 
             onClick={() => { onOpenApp(AppType.AI_CHAT); onClose(); }}
             className="flex items-center px-3 py-2 hover:bg-[#2F71CD] hover:text-white group transition-colors"
          >
             <div className="w-8 h-8 mr-2 text-purple-600 group-hover:text-white"><MessageSquare size={32} /></div>
             <span className="font-sm text-gray-800 group-hover:text-white">AI Assistant</span>
          </button>
          
          <div className="flex-1"></div>
          
          <div className="flex items-center justify-center py-4 border-t border-gray-200 mx-2 mb-1">
             <button className="flex items-center text-gray-700 font-bold text-sm hover:bg-[#2F71CD] hover:text-white w-full justify-center py-1">
                All Programs <ChevronRight size={14} className="ml-1 bg-green-600 text-white rounded-full p-0.5" />
             </button>
          </div>
        </div>

        {/* Right Column - System Folders */}
        <div className="w-1/2 bg-[#D3E5FA] border-l border-[#95BDEE] flex flex-col py-2 pl-1 text-sm text-[#00136B]">
          <button className="flex items-center px-3 py-1.5 hover:bg-[#2F71CD] hover:text-white font-bold mb-1">
             <User size={16} className="mr-2" /> My Documents
          </button>
          <button className="flex items-center px-3 py-1.5 hover:bg-[#2F71CD] hover:text-white font-bold mb-1">
             <FileText size={16} className="mr-2" /> My Recent Documents
          </button>
          <button className="flex items-center px-3 py-1.5 hover:bg-[#2F71CD] hover:text-white font-bold mb-1">
             <div className="w-4 h-4 bg-yellow-400 border border-yellow-600 mr-2 rounded-sm"></div> My Pictures
          </button>
          <button className="flex items-center px-3 py-1.5 hover:bg-[#2F71CD] hover:text-white font-bold mb-1">
             <div className="w-4 h-4 bg-orange-400 border border-orange-600 mr-2 rounded-sm"></div> My Music
          </button>
          <button 
            onClick={() => { onOpenApp(AppType.PROJECTS); onClose(); }}
            className="flex items-center px-3 py-1.5 hover:bg-[#2F71CD] hover:text-white font-bold mb-2"
          >
             <div className="w-4 h-4 bg-purple-400 border border-purple-600 mr-2 rounded-sm"></div> My Computer
          </button>

          <div className="my-1 border-t border-[#95BDEE] mx-2"></div>

          <button className="flex items-center px-3 py-1.5 hover:bg-[#2F71CD] hover:text-white mb-1">
             Control Panel
          </button>
           <button className="flex items-center px-3 py-1.5 hover:bg-[#2F71CD] hover:text-white mb-1">
             Printers and Faxes
          </button>

          <div className="my-1 border-t border-[#95BDEE] mx-2"></div>

           <button className="flex items-center px-3 py-1.5 hover:bg-[#2F71CD] hover:text-white mb-1">
             Help and Support
          </button>
           <button className="flex items-center px-3 py-1.5 hover:bg-[#2F71CD] hover:text-white mb-1">
             Search
          </button>
           <button className="flex items-center px-3 py-1.5 hover:bg-[#2F71CD] hover:text-white mb-1">
             Run...
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="h-10 bg-gradient-to-r from-[#245DDA] to-[#3876EA] flex items-center justify-end px-4 border-t border-[#E68B2C]">
        <button className="flex items-center px-2 py-1 text-white hover:brightness-110">
            <LogOut size={16} className="mr-2 bg-[#E55F18] p-0.5 rounded shadow-sm" /> 
            <span>Log Off</span>
        </button>
        <button className="flex items-center px-2 py-1 text-white hover:brightness-110 ml-2">
            <div className="w-5 h-5 bg-[#D6432D] rounded shadow-sm mr-2 flex items-center justify-center border border-white/30">
                <div className="w-1 h-2 border-r-2 border-white"></div>
            </div>
            <span>Turn Off Computer</span>
        </button>
      </div>
    </div>
  );
};