import { useState } from "react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Globussoft Technologies",
      role: "Social Media Cordinator",
      period: "May 2023 - Jan 2024 ",
      responsibilities: [
        "Advanced from Social Media Coordinator to Manager due to proven success and leadership skills",
        "Partnered with influencers to boost reach and drive traffic.",
        "Developed content strategies to enhance engagement and sales",
        "Improved social media management and optimized deliveries with team collaboration.",
      ],
    },
    {
      id: 2,
      company: "Nepal Clearing House Limited (NCHL)",
      role: "Java Developer Intern",
      period: "Sep 2024 – Dec 2024",
      responsibilities: [
        "Completed internship under the IT and Operations Department as part of the Career Development Learning module.",
        "Developed backend applications using Java, JDBC, and Spring Boot.",
        "Followed a structured intern roadmap and contributed to the Final Year Project.",
        "Improved problem-solving, communication, and technical documentation skills.",
      ],
    },
    // {
    //   id: 3,
    //   company: "Spotify",
    //   role: "Frontend Developer",
    //   period: "Jun 2014 - Dec 2015",
    //   responsibilities: [
    //     "Created responsive web interfaces",
    //     "Improved user experience metrics",
    //     "Worked with React and Redux",
    //   ],
    // },
    // {
    //   id: 4,
    //   company: "Stripe",
    //   role: "Junior Developer",
    //   period: "Mar 2013 - May 2014",
    //   responsibilities: [
    //     "Developed payment integration features",
    //     "Maintained API documentation",
    //     "Contributed to SDK improvements",
    //   ],
    // },
    // {
    //   id: 5,
    //   company: "Webflow",
    //   role: "Intern",
    //   period: "Jun 2012 - Feb 2013",
    //   responsibilities: [
    //     "Assisted in building no-code features",
    //     "Created component libraries",
    //     "Participated in design reviews",
    //   ],
    // },
  ];

  const [selectedCompany, setSelectedCompany] = useState(experiences[0]);

  return (
    <div className="py-25 px-4 sm:px-6 lg:px-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
          Experience<span className="primary">.</span>
        </h1>

        {/* Experience Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Company List - Left Side */}
          <div className="md:w-64 flex-shrink-0">
            <div className="border-l-4 border-gray-300">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedCompany(exp)}
                  className={`w-full text-left px-6 py-4 text-lg transition-colors relative ${
                    selectedCompany.id === exp.id
                      ? "primary font-semibold"
                      : "text-gray-600 hover:text-gray-900 cursor-pointer"
                  }`}
                >
                  {/* Purple border indicator for selected company */}
                  {selectedCompany.id === exp.id && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-primary)] -ml-1"></span>
                  )}
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Details - Right Side */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {selectedCompany.role}{" "}
              <span className="primary">@ {selectedCompany.company}</span>
            </h2>
            <p className="text-gray-600 mb-8">{selectedCompany.period}</p>

            <div className="space-y-6">
              {selectedCompany.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex gap-4">
                  <span className="primary text-2xl font-bold flex-shrink-0">
                    ✓
                  </span>
                  <p className="text-gray-700 text-lg">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
