import React from "react";

export const ProjectsSection = () => {
  return (
    <section id="experience" className="py-12 sm:py-20 px-4 bg-[#161B22]">
      <div className="max-w-6xl mx-auto relative">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-white">
          Work Experience Timeline
        </h2>

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600"></div>

        <div className="space-y-32">
          {/* Qdata Inc */}
          <div className="flex flex-col items-center relative">
            {/* Timeline Year */}
            <div className="bg-[#161B22] px-6 py-2 rounded-full text-sm text-gray-400 font-semibold border border-gray-600 mb-8">
              January 2024 - April 2025
            </div>

            {/* Experience Card */}
            <div className="bg-[#21262D] border border-[#2D333B] p-6 sm:p-8 rounded-lg max-w-2xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Qdata Inc
              </h3>
              <p className="text-gray-400 mb-2 text-sm sm:text-base">
                Little Elm, Texas, USA
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Developed full-stack web applications using React, Tailwind CSS,
                and Java Spring Boot for multiple business clients.
              </p>
            </div>

            {/* Project Cards Floating Left and Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
              {/* Left Side */}
              <div className="flex flex-col gap-6">
                <a
                  href="https://www.qdatainc.com/"
                  target="_blank"
                  className="bg-[#21262D] border border-[#2D333B] rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-transform"
                >
                  <div className="text-center">
                    <h4 className="text-gray-200 text-base font-semibold hover:underline">
                      Qdata Inc Website
                    </h4>
                    <p className="text-blue-400 text-xs mt-1">
                      (Click to view project)
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.rvvsstemple.com/"
                  target="_blank"
                  className="bg-[#21262D] border border-[#2D333B] rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-transform"
                >
                  <div className="text-center">
                    <h4 className="text-gray-200 text-base font-semibold hover:underline">
                      RVVSS Temple Website
                    </h4>
                    <p className="text-blue-400 text-xs mt-1">
                      (Click to view project)
                    </p>
                  </div>
                </a>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-6">
                <a
                  href="https://www.agasolutionsllc.com/"
                  target="_blank"
                  className="bg-[#21262D] border border-[#2D333B] rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-transform"
                >
                  <div className="text-center">
                    <h4 className="text-gray-200 text-base font-semibold hover:underline">
                      AGA Solutions Website
                    </h4>
                    <p className="text-blue-400 text-xs mt-1">
                      (Click to view project)
                    </p>
                  </div>
                </a>

                <a
                  href="https://rnritsolutions.com/"
                  target="_blank"
                  className="bg-[#21262D] border border-[#2D333B] rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-transform"
                >
                  <div className="text-center">
                    <h4 className="text-gray-200 text-base font-semibold hover:underline">
                      RNR IT Solutions Website
                    </h4>
                    <p className="text-blue-400 text-xs mt-1">
                      (Click to view project)
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.techmergepartners.com/"
                  target="_blank"
                  className="bg-[#21262D] border border-[#2D333B] rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-transform"
                >
                  <div className="text-center">
                    <h4 className="text-gray-200 text-base font-semibold hover:underline">
                      TechMerge Partners Website
                    </h4>
                    <p className="text-blue-400 text-xs mt-1">
                      (Click to view project)
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Dwaipayana Technologies */}
          <div className="flex flex-col items-center relative">
            {/* Timeline Year */}
            <div className="bg-[#161B22] px-6 py-2 rounded-full text-sm text-gray-400 font-semibold border border-gray-600 mb-8">
              2019 - 2021
            </div>

            {/* Experience Card */}
            <div className="bg-[#21262D] border border-[#2D333B] p-6 sm:p-8 rounded-lg max-w-2xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Dwaipayana Technologies Ltd
              </h3>
              <p className="text-gray-400 mb-2 text-sm sm:text-base">
                Bangalore, India
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Developed full-stack web applications for small-to-medium
                businesses using the MERN stack. Led project development
                end-to-end for 15+ clients across industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
