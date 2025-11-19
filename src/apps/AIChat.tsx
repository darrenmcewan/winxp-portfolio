import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';

export const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: "Hi! I'm your Portfolio Assistant. I can tell you about the developer, their skills, or just chat. I'm running on the new Gemini 2.5 Flash model!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [chatSession, setChatSession] = useState<Chat | null>(null);

  useEffect(() => {
    // Use process.env.API_KEY as per guidelines
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      const ai = new GoogleGenAI({ apiKey });
      const newChat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: "You are a helpful assistant inside a Windows XP themed portfolio website. Keep your answers concise, friendly, and sometimes make 2001-era computer references (like Clippy, dial-up, floppy disks).",
        },
      });
      setChatSession(newChat);
    }
  }, []);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSession) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const result = await chatSession.sendMessageStream({ message: userMsg });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]); // Placeholder

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const text = c.text || "";
        fullResponse += text;
        
        setMessages(prev => {
          const newHistory = [...prev];
          newHistory[newHistory.length - 1].text = fullResponse;
          return newHistory;
        });
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Error: Could not connect to Gemini API. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white font-sans">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-blue-100 ml-2' : 'bg-purple-100 mr-2'}`}>
                {msg.role === 'user' ? <User size={16} className="text-blue-600" /> : <Bot size={16} className="text-purple-600" />}
              </div>
              <div className={`p-3 rounded-lg text-sm ${
                msg.role === 'user' 
                  ? 'bg-blue-50 border border-blue-200 text-blue-900 rounded-tr-none' 
                  : 'bg-purple-50 border border-purple-200 text-purple-900 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="bg-[#ECE9D8] p-2 border-t border-[#D1CEBD] flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={process.env.API_KEY ? "Ask about the developer..." : "API Key Missing (Check process.env.API_KEY)"}
          disabled={isLoading || !process.env.API_KEY}
          className="flex-1 border border-[#7F9DB9] p-2 text-sm outline-none focus:border-blue-500 shadow-inner"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading || !process.env.API_KEY}
          className="bg-gradient-to-b from-[#F8F8F8] to-[#DCDAD3] border border-[#989898] hover:brightness-105 px-4 rounded-[2px] flex items-center active:translate-y-[1px]"
        >
          <Send size={16} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}