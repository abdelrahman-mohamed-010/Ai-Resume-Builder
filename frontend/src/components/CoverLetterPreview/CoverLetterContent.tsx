import React, { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateHr, updateContent } from "../../redux/coverLetterSlice";
import { useDebounce } from "../../hooks/useDebounce.ts"; 

const CoverLetterContent: React.FC = () => {
  const HrName = useAppSelector((state) => state.coverLetter.hr);
  const Content = useAppSelector((state) => state.coverLetter.content);

  const [hiringManager, setHiringManager] = useState(HrName);
  const [bodyContent, setBodyContent] = useState(Content);

  const debouncedHiringManager = useDebounce(hiringManager, 500);
  const debouncedBodyContent = useDebounce(bodyContent, 500);

  const dispatch = useAppDispatch();

  const handleHiringManagerChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHiringManager(e.target.value);
  };

  const handleBodyContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setBodyContent(e.target.value);
  };

  useEffect(() => {
    dispatch(updateHr(debouncedHiringManager));
  }, [debouncedHiringManager, dispatch]);

  useEffect(() => {
    dispatch(updateContent(debouncedBodyContent));
  }, [debouncedBodyContent, dispatch]);

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
          onChange={handleHiringManagerChange}
          className="focus:outline-dashed focus:outline-2 focus:outline-primary hover:cursor-text ml-1"
        />
        ,
      </p>
      <textarea
        ref={textareaRef}
        className="mt-4 text-gray-800 focus:outline-dashed focus:outline-2 focus:outline-primary px-2 w-full resize-none overflow-hidden"
        value={bodyContent}
        onChange={(e) => {
          handleBodyContentChange(e);
          adjustTextareaHeight();
        }}
      />
    </>
  );
};

export default CoverLetterContent;
