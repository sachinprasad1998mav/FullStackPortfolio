import React from "react";

export const SkillsSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-[#161B22]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Front-End Development */}
          <div className="bg-[#21262D] rounded-lg p-6 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🎨</span>
              <h3 className="text-xl font-semibold">Front-End Development</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>React</li>
              <li>Redux Toolkit</li>
              <li>Next.js (basic)</li>
              <li>Tailwind CSS</li>
              <li>HTML5 & CSS3</li>
              <li>Chart.js and D3.js</li>
            </ul>
          </div>

          {/* Back-End Development */}
          <div className="bg-[#21262D] rounded-lg p-6 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚡</span>
              <h3 className="text-xl font-semibold">Back-End Development</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Spring MVC</li>
              <li>Spring Data JPA</li>
              <li>Spring Security (JWT, OAuth2)</li>
              <li>Node.js and Express</li>
              <li>RESTful API Development</li>
            </ul>
          </div>

          {/* Cloud & DevOps */}
          <div className="bg-[#21262D] rounded-lg p-6 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🚀</span>
              <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>AWS (EC2, S3)</li>
              <li>Docker (basic)</li>
              <li>CI/CD with Jenkins and Maven</li>
              <li>Git and GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
