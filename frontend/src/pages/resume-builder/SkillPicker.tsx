import React, { useState } from "react";
import { VscEdit } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { motion, stagger, useAnimate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { setSkills } from "@/redux/ResumeSlice";

const SkillPicker: React.FC = () => {
  const [internalSkills, setInternalSkills] = useState<
    { skill: string; id: string }[]
  >([]);
  const [newSkill, setNewSkill] = useState<string>("");
  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);

  const [scope, animate] = useAnimate();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const addSkill = () => {
    if (
      newSkill.trim() &&
      !internalSkills.some((s) => s.skill === newSkill.trim())
    ) {
      const newSkillObject = {
        skill: newSkill.trim(),
        id: Math.random().toString(36).substr(2, 9),
      };
      setInternalSkills([...internalSkills, newSkillObject]);
      setNewSkill("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const handleEditBtn = () => {
    if (internalSkills.length > 0) {
      setIsDeleteMode(!isDeleteMode);
    } else {
      animate(
        "p",
        { x: [-15, 0, 15, 0] },
        { type: "spring", duration: 0.2, delay: stagger(0.05) }
      );
    }
  };

  const handleSkillClick = (id: string) => {
    if (isDeleteMode) {
      setInternalSkills((prevSkills) => prevSkills.filter((s) => s.id !== id));
    }
    if (internalSkills.length == 1) {
      setIsDeleteMode(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSkills(internalSkills));
    navigate("/builder/custom");
  };

  return (
    <div className="w-full mt-8">
      <h2 className="text-xl font-semibold mb-2 dark:text-neutral-300">
        Pick Your Skills
      </h2>
      <div className="flex items-center gap-2 mb-4">
        <form className=" w-full" id="skills-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a skill"
            className="border border-gray-300 px-3 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-inherit dark:text-neutral-100 dark:border-neutral-600 "
          />
        </form>
      </div>
      <div className="mt-4">
        <div className="w-full flex justify-between items-start gap-6">
          <div ref={scope}>
            <h3
              className={`font-medium mb-6 text-lg dark:text-neutral-300 ${
                isDeleteMode ? " text-red-500" : ""
              }`}
            >
              {isDeleteMode ? "Select To Delete" : "Selected Skills:"}
            </h3>
            {internalSkills.length > 0 ? (
              <ul className="list-none mt-2 flex gap-2 flex-wrap">
                {internalSkills.map(({ skill, id }) => (
                  <motion.li
                    key={id}
                    className={`font-medium px-2 pb-[2px] border-2 tracking-wide text-white rounded relative ${
                      isDeleteMode
                        ? "cursor-pointer bg-red-900 border-red-900"
                        : "border-indigo-700 bg-indigo-700 border-2 dark:border-indigo-600 dark:bg-inherit dark:text-white"
                    }`}
                    layout
                    onClick={() => handleSkillClick(id)}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="no-skills text-gray-500">No skills selected.</p>
            )}
          </div>
          <button onClick={handleEditBtn}>
            {isDeleteMode ? (
              <IoMdClose
                className={`w-6 h-7 mt-2 cursor-pointer transition-all text-red-500`}
              />
            ) : (
              <VscEdit
                className={`w-6 h-6 mt-2 cursor-pointer transition-all dark:text-neutral-300`}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillPicker;
