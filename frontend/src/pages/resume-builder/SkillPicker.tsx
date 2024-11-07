import React, { useState } from "react";
import { VscEdit } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { motion, stagger, useAnimate } from "framer-motion";

const SkillPicker: React.FC = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState<string>("");
  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);

  const [scope, animate] = useAnimate();

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
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
    if (skills.length > 0) {
      setIsDeleteMode(!isDeleteMode);
    } else {
      animate(
        "p",
        { x: [-15, 0, 15, 0] },
        { type: "spring", duration: 0.2, delay: stagger(0.05) }
      );
    }
  };

  const handleSkillClick = (skill: string) => {
    if (isDeleteMode) {
      setSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
    }
    if (skills.length == 1) {
      setIsDeleteMode(false);
    }
  };

  return (
    <div className="w-full mt-8">
      <h2 className="text-xl font-semibold mb-2">Pick Your Skills</h2>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a skill"
          className="border border-gray-300 px-3 py-3 rounded-md w-full focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mt-4">
        <div className="w-full flex justify-between items-start gap-6">
          <div ref={scope}>
            <h3
              className={`font-medium mb-6 text-lg ${
                isDeleteMode ? " text-red-500" : ""
              }`}
            >
              {isDeleteMode ? "Select To Delete" : "Selected Skills:"}
            </h3>
            {skills.length > 0 ? (
              <ul className="list-none mt-2 flex gap-2 flex-wrap">
                {skills.map((skill) => (
                  <motion.li
                    key={skill}
                    className={` font-medium px-2 pb-1 border-2  tracking-wide text-white  rounded relative ${
                      isDeleteMode
                        ? " cursor-pointer bg-red-900 border-red-900"
                        : "border-indigo-900 bg-indigo-900"
                    }`}
                    layout
                    onClick={() => handleSkillClick(skill)}
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
                className={`w-6 h-6 mt-2 cursor-pointer transition-all`}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillPicker;
