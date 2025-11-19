import React from 'react';

export const Resume: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#525659] flex justify-center overflow-y-auto p-8">
      <div className="bg-white w-full max-w-[800px] min-h-[3000px] shadow-lg p-12 text-black font-serif">
        <h1 className="text-4xl font-bold border-b-2 border-gray-800 pb-4 mb-8">Darren McEwan</h1>
        
        <div className="mb-8">
            <p className="text-sm text-gray-600">(954) 871-1820 | darren@mcewan.me | www.linkedin.com/in/darren-mcewan</p>
        </div>

        <section className="mb-8">
            <h2 className="text-xl font-bold text-blue-800 uppercase mb-4 border-b border-gray-300">Professional Summary</h2>
            <p className="text-sm text-gray-700">
                Data Scientist (5+ years) specializing in AI/ML workflows and end-to-end analytics pipelines. Proficient in Python and SQL, with experience in multi-agent AI systems (RAG). Expert at defining metrics and working cross functionally to transform complex data into strategic business insights.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-xl font-bold text-blue-800 uppercase mb-4 border-b border-gray-300">Experience</h2>
            
            <div className="mb-6">
                <div className="flex justify-between items-baseline">
                    <h3 className="font-bold">Software Engineer II & III (Data Science)</h3>
                    <span className="text-sm italic text-gray-600">Sep 2023 – Present</span>
                </div>
                <p className="text-sm font-semibold mb-2">Cisco Systems | San Jose, CA</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                    <li>Architected a multi-agent AI assistant to answer Supply Chain queries from business internal documents and live databases; achieved a 92% semantic similarity score and reduced support escalations by 15%.</li>
                    <li>Optimized a RAG pipeline on a 1k+ document corpus using semantic chunking, cosine similarity, and MMR; improved retrieval relevancy by 20% (measured via Mean Average Precision) and integrated RAG Fusion for enhanced accuracy.</li>
                    <li>Increased quarterly supply chain forecast precision from a 75% baseline to 83% by developing and deploying optimized time series models (ARIMA, Prophet). This improvement enabled a 12% reduction in inventory holding costs and mitigated a projected 10% increase in stockouts, leading to enhanced operational efficiency.</li>
                    <li>Applied unsupervised learning models (Isolation Forest, K-Means) to detect 95% of critical bandwidth anomalies. Balanced precision and recall to minimize false positives, achieving a 10% reduction in high-priority incident response time.</li>
                </ul>
            </div>

            <div className="mb-6">
                <div className="flex justify-between items-baseline">
                    <h3 className="font-bold">Business & Data Analyst</h3>
                    <span className="text-sm italic text-gray-600">Jun 2021 – Sep 2023</span>
                </div>
                <p className="text-sm font-semibold mb-2">Cisco Systems | San Jose, CA</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                    <li>Developed and managed a data transformation pipeline using dbt (Data Build Tool) to transform complex, raw data from a 4TB supply chain database (~500 tables). Automated the orchestration of these data models, creating streamlined, business-ready views that reduced data retrieval and analysis time for stakeholders by 30%.</li>
                    <li>Developed and automated API test suites in Python, saving an estimated 20 quarterly man hours and reducing human error, contributing to a more secure, streamlined system.</li>
                </ul>
            </div>

            <div>
                <div className="flex justify-between items-baseline">
                    <h3 className="font-bold">Data Analyst, Sales</h3>
                    <span className="text-sm italic text-gray-600">Aug 2020 – Jun 2021</span>
                </div>
                <p className="text-sm font-semibold mb-2">Skill Struck | Provo, UT</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                    <li>Engineered a targeted lead generation pipeline using web scraping, providing the sales team with 500 qualified leads monthly. Automated dashboards led to a 15% increase in lead-to-sales conversion and a 20% reduction in lead research time.</li>
                </ul>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-xl font-bold text-blue-800 uppercase mb-4 border-b border-gray-300">Education</h2>
            
            <div className="mb-4 text-sm text-gray-700">
                <p className="font-bold">Master of Science in Analytics</p>
                <p className="font-semibold">Georgia Institute of Technology | Atlanta, GA</p>
                <p className="italic">Relevant Coursework: High-Dimensional Data Visualization, Computational Data Analysis, Simulation, Database Systems Concepts and Design, Network Science</p>
            </div>
            
            <div className="text-sm text-gray-700">
                <p className="font-bold">Bachelor of Science in Statistics, Minor in Business and Japanese</p>
                <p className="font-semibold">Brigham Young University | Provo, UT</p>
                <p className="italic">Relevant Coursework: Data Structures, Algorithms, Analysis of Correlated Data, Bayesian Statistics, Regression, Probability and Inference</p>
            </div>
        </section>

        <section>
            <h2 className="text-xl font-bold text-blue-800 uppercase mb-4 border-b border-gray-300">Skills & Interests</h2>
            <div className="text-sm text-gray-700 space-y-2">
                <div>
                    <p className="font-bold">Languages/Databases:</p>
                    <p>Python, Advanced SQL, Javascript, Snowflake</p>
                </div>
                <div>
                    <p className="font-bold">Tools & Technologies:</p>
                    <p>dbt, TensorFlow, Pandas, NumPy, Scikit-learn, Git, Tableau, Power BI</p>
                </div>
                <div>
                    <p className="font-bold">Techniques & Methodologies:</p>
                    <p>Data Modeling, Data Pipeline Development, Data Quality Management, Machine Learning (Object Detection, etc.), Data Visualization, API Development, Automation, Data Integration, Process Improvement, Web Scraping, RAG, Semantic Chunking</p>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};