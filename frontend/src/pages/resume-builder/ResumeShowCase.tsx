import { useAppSelector } from "@/hooks/reduxHooks";

interface ResumeShowCaseProps {
  className?: string;
}

const ResumeShowCase: React.FC<ResumeShowCaseProps> = ({ className }) => {
  const resume = useAppSelector((state) => state.Resume);
  const colorStyle = useAppSelector((state) => state.Resume.color);
  const fontStyle = useAppSelector((state) => state.Resume.fontStyle);
  const fontSize = useAppSelector((state) => state.Resume.fontSize);

  return (
    <div
      className={`bg-white text-gray-800 overflow-hidden ${className} ${
        fontStyle === "serif"
          ? "font-serif"
          : fontStyle === "mono"
          ? "font-mono"
          : "font-sans"
      } text-${
        fontSize === "Large" ? "lg" : fontSize === "Small" ? "sm" : ""
      } `}
      style={{ color: colorStyle || "" }}
    >
      {/* Header */}
      <div className=" mb-8">
        <h1 className={`text-3xl font-bold capitalize ${colorStyle}`}>
          {resume.personalInfo.firstname} {resume.personalInfo.surname}
        </h1>
        <p className="text-lg text-gray-600">
          {resume.personalInfo.contactJobRole}
        </p>
        <p className="text-gray-500">
          {resume.personalInfo.email} | {resume.personalInfo.phone} |&nbsp;
          {resume.personalInfo.address}
        </p>
      </div>
      {/* Summary */}
      <div className="mb-6 ">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
          Summary
        </h2>
        <p className="text-gray-700 break-words">{resume.summary}</p>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {resume.skills.map((skill) => (
            <span
              key={skill.id}
              className="px-3 py-1 bg-gray-200 rounded text-sm text-gray-800"
            >
              {skill.skill}
            </span>
          ))}
        </div>
      </div>
      {/* Experience */}
      <div className=" mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
          Experience
        </h2>
        {resume.experiences.map((ex, index) => (
          <div key={index}>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">{ex.jobTitle}</h3>
              <p className="text-gray-600 flex justify-between items-center">
                <span>{ex.employer}</span>
                <span className="text-gray-600 text-sm">
                  {ex.startDate} • {ex.endDate}
                </span>
              </p>

              <div className="mt-2 text-gray-600">{ex.jobResponsibilities}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Education */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
          Education
        </h2>
        {resume.educations.map((degree, index) => (
          <p className="text-gray-700 my-4" key={index}>
            {degree.degree}'s in {degree.fieldOfStudy} - {degree.university},{" "}
            {degree.startDate} -{degree.endDate ? degree.endDate : "Present"}
          </p>
        ))}
      </div>

      {/* Certificates */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-1 mb-2">
          Certificates
        </h2>
        {resume.certifications.map((cert, index) => (
          <p className="text-gray-700 my-4 flex justify-between" key={index}>
            <span>{cert.title}</span>
            <span> {cert.issuer}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default ResumeShowCase;
