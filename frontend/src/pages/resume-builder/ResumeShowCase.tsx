import { useAppSelector } from "@/hooks/reduxHooks";

interface ResumeShowCaseProps {
  className?: string;
}

const ResumeShowCase: React.FC<ResumeShowCaseProps> = ({ className }) => {

  const PersonalInfo = useAppSelector((state) => state.Resume.personalInfo);


  return (
    <div className={`bg-white text-gray-800 ${className} `}>
      {/* Header */}
      <div className=" mb-8">
        <h1 className="text-3xl font-bold">{PersonalInfo.firstname}</h1>
        <p className="text-lg text-gray-600"></p>
        <p className="text-gray-500">
          alexander.smith@example.com | (415) 555-0123 | San Francisco, CA
        </p>
      </div>
      {/* Summary */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
          Summary
        </h2>
        <p className="text-gray-700">
          Experienced and detail-oriented frontend developer with 5+ years of
          experience building visually appealing, responsive web applications.
          Proficient in React, TypeScript, and Tailwind CSS, with a passion for
          creating user-friendly and efficient interfaces that enhance the
          overall user experience.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Redux",
            "Tailwind CSS",
            "Git",
            "Responsive Design",

            "Jest",
            "Framer Motion",
            "Vite",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-200 rounded text-sm text-gray-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
          Experience
        </h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
          <p className="text-gray-600">Tech Innovators Inc. | 2019 - Present</p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>
              Led the frontend development team in building scalable and
              performant web applications using React and TypeScript.
            </li>
            <li>
              Collaborated closely with UX/UI designers to ensure a cohesive and
              responsive user experience.
            </li>
            <li>
              Improved website load times by 30% through optimization techniques
              and efficient code practices.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Frontend Developer</h3>
          <p className="text-gray-600">Digital Solutions Co. | 2017 - 2019</p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>
              Developed dynamic web applications for clients, delivering
              high-quality code with modern JavaScript frameworks.
            </li>
            <li>
              Enhanced project efficiency by implementing reusable component
              libraries in React.
            </li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
          Projects
        </h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Personal Portfolio</h3>
          <p className="text-gray-700">
            A responsive portfolio showcasing my skills and projects. Built with
            React, TypeScript, and Tailwind CSS.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">E-commerce Website</h3>
          <p className="text-gray-700">
            Developed a feature-rich e-commerce platform focusing on responsive
            design and accessibility.
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
          Education
        </h2>
        <p className="text-gray-700">
          Bachelor's in Computer Science - University of California, Berkeley,
          2016
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500 flex justify-between">
        <p>
          Portfolio:{" "}
          <a
            href="https://alexsmithportfolio.com"
            className="text-blue-500 hover:underline"
          >
            alexsmithportfolio.com
          </a>
        </p>
        <p>
          GitHub:
          <a
            href="https://github.com/alexsmith"
            className="text-blue-500 hover:underline"
          >
            github.com/alexsmith
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/alexsmith"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/alexsmith
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResumeShowCase;
