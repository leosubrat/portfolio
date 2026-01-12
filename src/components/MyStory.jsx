import React from "react";

const MyStory = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
          My Story<span className="text-purple-600">.</span>
        </h1>

        {/* Paragraph - Section */}
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            I am a passionate{" "}
            <span className="primary font-medium">
              front-end-focused developer
            </span>{" "}
            with a growing full-stack background. My journey into tech began
            with hands-on experience in digital platforms and collaboration,
            which later evolved into building user-friendly web applications.
          </p>

          <p>
            I have professional experience at{" "}
            <span className="primary font-medium">
              Globussoft Technologies Pvt. Ltd.
            </span>
            , where I progressed into a leadership role, and at Nepal Clearing
            House Limited (NCHL) as a Java Developer Intern, working with Java,
            JDBC, and Spring Boot.
          </p>

          <p>
            Currently, I am enhancing my skills through a{" "}
            <span className="primary font-medium">
              Full Stack MERN Development{" "}
            </span>
            course at SkillShikshya, where I work with{" "}
            <span className="primary font-medium">
              MongoDB, Express, React, and Node.js{" "}
            </span>
            to build modern, responsive applications. I enjoy learning
            continuously and turning ideas into meaningful digital experiences.
          </p>

          <p>
            I enjoy turning ideas into clean interfaces and continuously
            learning to grow as a developer. 💜
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyStory;
