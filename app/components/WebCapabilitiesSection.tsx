import React from "react";

export const WebCapabilitiesSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">
          Modern Web Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Full-Stack Web Development",
              icon: "🖥️",
              features: [
                "React, Redux Toolkit, Tailwind CSS",
                "Spring Boot REST APIs",
                "Responsive UI/UX Design",
              ],
            },
            {
              title: "Back-End Engineering",
              icon: "🛠️",
              features: [
                "Spring MVC & Spring Data JPA",
                "JWT Authentication (Spring Security)",
                "MySQL & MongoDB Integration",
              ],
            },
            {
              title: "API Development",
              icon: "🔗",
              features: [
                "RESTful Services",
                "API Documentation (Swagger/OpenAPI)",
                "Request Validation & Error Handling",
              ],
            },
            {
              title: "Database Management",
              icon: "🗄️",
              features: [
                "Schema Design & Relationships",
                "Data Indexing & Query Optimization",
                "ORM with Hibernate/JPA",
              ],
            },
            {
              title: "Cloud & DevOps",
              icon: "☁️",
              features: [
                "AWS EC2, S3 Basics",
                "CI/CD Pipelines (Jenkins, Maven)",
                "Git & GitHub Version Control",
              ],
            },
            {
              title: "System Design & Best Practices",
              icon: "🏗️",
              features: [
                "Microservices Architecture",
                "Scalability & Performance Optimization",
                "Security Best Practices (OAuth2, CORS)",
              ],
            },
          ].map((category) => (
            <div
              key={category.title}
              className="group bg-[#161B22] p-6 rounded-lg hover:bg-[#21262D] transition-all"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
