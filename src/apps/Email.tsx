import React, { useState } from 'react';
import { Send, Paperclip, X, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

export const Email: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSend = () => {
    const email = "john.doe@example.com"; // Placeholder
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="flex flex-col h-full bg-[#ECE9D8] font-tahoma text-xs select-none">
      {/* Menu Bar */}
      <div className="flex px-2 py-1 bg-[#ECE9D8] border-b border-[#D4D0C8] text-black gap-3">
        <span className="hover:underline cursor-default">File</span>
        <span className="hover:underline cursor-default">Edit</span>
        <span className="hover:underline cursor-default">View</span>
        <span className="hover:underline cursor-default">Insert</span>
        <span className="hover:underline cursor-default">Format</span>
        <span className="hover:underline cursor-default">Tools</span>
        <span className="hover:underline cursor-default">Message</span>
        <span className="hover:underline cursor-default">Help</span>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-1 p-1 border-b border-[#D4D0C8] bg-[#ECE9D8]">
        <button 
          onClick={handleSend} 
          className="flex flex-col items-center px-2 py-1 hover:bg-white hover:border hover:border-[#828790] border border-transparent active:translate-y-[1px]"
        >
          <div className="w-6 h-6 relative mb-0.5">
            <Send size={24} className="text-gray-600" strokeWidth={1.5} />
          </div>
          <span className="text-[10px]">Send</span>
        </button>
        
        <div className="w-[1px] h-8 bg-[#A0A0A0] mx-1 shadow-[1px_0_0_white]" />

        <button className="flex flex-col items-center px-2 py-1 opacity-50 cursor-default grayscale">
           <div className="w-6 h-6 mb-0.5 flex items-center justify-center"><Paperclip size={22} /></div>
           <span className="text-[10px]">Attach</span>
        </button>
      </div>

      {/* Header Fields */}
      <div className="bg-white p-3 flex flex-col gap-2 border-b border-[#828790] shadow-[inset_0_2px_2px_rgba(0,0,0,0.05)]">
         <div className="flex items-center gap-2">
            <span className="w-12 text-right text-gray-500">To:</span>
            <div className="flex-1 border-b border-[#D4D0C8] px-1 py-0.5 flex items-center">
                <span className="bg-[#E3EFFF] px-1 border border-[#7F9DB9] text-black flex items-center gap-1 rounded-[2px] cursor-default">
                   <span className="w-3 h-3 rounded-full bg-blue-500 border border-blue-700 flex items-center justify-center text-white text-[8px] mr-1">J</span>
                   John Doe 
                   <X size={10} className="cursor-pointer ml-1 hover:text-red-500"/>
                </span>
            </div>
         </div>
         <div className="flex items-center gap-2">
            <span className="w-12 text-right text-gray-500">Cc:</span>
            <input 
              type="text" 
              className="flex-1 border-b border-[#D4D0C8] px-1 py-0.5 outline-none focus:bg-blue-50"
              readOnly
            />
         </div>
         <div className="flex items-center gap-2">
            <span className="w-12 text-right text-gray-500">Subject:</span>
            <input 
              type="text" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="flex-1 border-b border-[#D4D0C8] px-1 py-0.5 outline-none focus:bg-blue-50"
              autoFocus
            />
         </div>
      </div>

      {/* Formatting Bar */}
      <div className="flex items-center gap-2 p-1 bg-[#ECE9D8] border-b border-[#D4D0C8]">
        <select className="h-5 text-[10px] w-24 border border-[#D4D0C8]">
            <option>Arial</option>
            <option>Times New Roman</option>
            <option>Courier New</option>
        </select>
        <select className="h-5 text-[10px] w-10 border border-[#D4D0C8]">
            <option>10</option>
            <option>12</option>
            <option>14</option>
        </select>
        <div className="w-[1px] h-4 bg-[#A0A0A0] shadow-[1px_0_0_white]" />
        <div className="flex gap-0.5">
            <button className="p-0.5 hover:bg-white hover:border hover:border-gray-400 border border-transparent"><Bold size={14}/></button>
            <button className="p-0.5 hover:bg-white hover:border hover:border-gray-400 border border-transparent"><Italic size={14}/></button>
            <button className="p-0.5 hover:bg-white hover:border hover:border-gray-400 border border-transparent"><Underline size={14}/></button>
        </div>
        <div className="w-[1px] h-4 bg-[#A0A0A0] shadow-[1px_0_0_white]" />
         <div className="flex gap-0.5">
            <button className="p-0.5 hover:bg-white hover:border hover:border-gray-400 border border-transparent"><AlignLeft size={14}/></button>
            <button className="p-0.5 hover:bg-white hover:border hover:border-gray-400 border border-transparent"><AlignCenter size={14}/></button>
            <button className="p-0.5 hover:bg-white hover:border hover:border-gray-400 border border-transparent"><AlignRight size={14}/></button>
        </div>
      </div>

      {/* Body */}
      <textarea 
        className="flex-1 resize-none p-4 outline-none font-sans text-sm select-text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Type your message here..."
        style={{ fontFamily: 'Arial, sans-serif' }}
      />
    </div>
  );
};