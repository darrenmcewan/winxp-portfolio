import React from 'react';

export const Resume: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#525659] flex justify-center overflow-y-auto p-8">
      <div className="bg-white w-full max-w-[800px] min-h-[3000px] shadow-lg p-12 text-black font-serif">
        <h1 className="text-4xl font-bold border-b-2 border-gray-800 pb-4 mb-8">John Doe</h1>
        
        <div className="mb-8">
            <p className="font-bold text-gray-700">SENIOR FRONTEND ENGINEER</p>
            <p className="text-sm text-gray-600">San Francisco, CA | john.doe@example.com</p>
        </div>

        <section className="mb-8">
            <h2 className="text-xl font-bold text-blue-800 uppercase mb-4 border-b border-gray-300">Experience</h2>
            
            <div className="mb-4">
                <div className="flex justify-between items-baseline">
                    <h3 className="font-bold">Senior React Developer</h3>
                    <span className="text-sm italic text-gray-600">2020 - Present</span>
                </div>
                <p className="text-sm font-semibold mb-2">TechCorp Inc.</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                    <li>Architected a scalable SPA using React 18 and TypeScript.</li>
                    <li>Integrated Gemini API for real-time data analysis features.</li>
                    <li>Improved core web vitals by 40% through optimization.</li>
                </ul>
            </div>

            <div>
                <div className="flex justify-between items-baseline">
                    <h3 className="font-bold">Frontend Developer</h3>
                    <span className="text-sm italic text-gray-600">2018 - 2020</span>
                </div>
                <p className="text-sm font-semibold mb-2">WebSolutions LLC</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                    <li>Built responsive websites using HTML5, CSS3, and JavaScript.</li>
                    <li>Collaborated with UX designers to implement pixel-perfect UIs.</li>
                </ul>
            </div>
        </section>

        <section className="mb-8">
             <h2 className="text-xl font-bold text-blue-800 uppercase mb-4 border-b border-gray-300">Skills</h2>
             <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                    <p className="font-bold">Languages</p>
                    <p>JavaScript (ES6+), TypeScript, Python, SQL</p>
                </div>
                <div>
                    <p className="font-bold">Frameworks</p>
                    <p>React, Next.js, Node.js, Tailwind CSS</p>
                </div>
                 <div>
                    <p className="font-bold">Tools</p>
                    <p>Git, Docker, AWS, Webpack, Vite</p>
                </div>
                 <div>
                    <p className="font-bold">AI/ML</p>
                    <p>Google Gemini API, OpenAI API, LangChain</p>
                </div>
             </div>
        </section>

        <section>
            <h2 className="text-xl font-bold text-blue-800 uppercase mb-4 border-b border-gray-300">Education</h2>
             <div className="text-sm text-gray-700">
                <p className="font-bold">Bachelor of Science in Computer Science</p>
                <p>University of Technology, 2018</p>
             </div>
        </section>
      </div>
    </div>
  );
};