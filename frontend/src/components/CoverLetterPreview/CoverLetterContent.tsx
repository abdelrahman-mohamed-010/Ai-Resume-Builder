import React, { useState, useRef, useEffect } from "react";

const CoverLetterContent: React.FC = () => {
  const [hiringManager, setHiringManager] = useState("[Hiring Manager's Name]");
  const [bodyContent, setBodyContent] = useState(
    "I am writing to express my interest in the Frontend Engineer position at [Company Name]. My skills in React, JavaScript, and modern web development frameworks make me a strong candidate for this role. I have a proven track record of building dynamic, user-friendly applications that enhance user experience. My experience in collaborating with cross-functional teams ensures that I can effectively contribute to your projects."
  );

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [bodyContent]);

  return (
    <>
      <p className="text-gray-800 px-2 cursor-default">
        Dear
        <input
          type="text"
          value={hiringManager}
          onChange={(e) => setHiringManager(e.target.value)}
          className="focus:outline-dashed focus:outline-2 focus:outline-primary hover:cursor-text ml-1"
        />
        ,
      </p>
      <textarea
        ref={textareaRef}
        className="mt-4 text-gray-800 focus:outline-dashed focus:outline-2 focus:outline-primary px-2 w-full resize-none overflow-hidden"
        value={bodyContent}
        onChange={(e) => {
          setBodyContent(e.target.value);
          adjustTextareaHeight();
        }}
      />
    </>
  );
};

export default CoverLetterContent;
