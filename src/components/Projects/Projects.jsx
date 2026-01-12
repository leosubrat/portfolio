import Project1 from "/project1.avif";
import Project2 from "/project2.avif";
import Project3 from "/project3.avif";
import Project4 from "/project4.avif";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "TaskFlow",
      description:
        "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
      image: Project1,
      flexSize: 1,
    },
    {
      id: 2,
      title: "EcoCart",
      description:
        "E-commerce platform promoting eco-friendly products with secure payment integration.",
      image: Project2,
      flexSize: 1.5,
    },
    {
      id: 3,
      title: "EventPlanner",
      description:
        "Event planning web application, enabling users to organise and manage events effortlessly.",
      image: Project3,
      flexSize: 1.5,
    },
    {
      id: 4,
      title: "FoodieFinder",
      description:
        "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings",
      image: Project4,
      flexSize: 1,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
          Projects<span className="primary">.</span>
        </h1>

        {/* Projects Grid */}
        <div className="flex flex-col gap-8">
          {/* First Row */}
          <div className="grid grid-cols-1 md:flex gap-8">
            {projects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl image-border  transition-shadow duration-300 cursor-pointer"
                style={{ flex: project.flexSize }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:flex gap-8">
            {projects.slice(2).map((project) => (
              <div
                key={project.id}
                className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                style={{ flex: project.flexSize }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
