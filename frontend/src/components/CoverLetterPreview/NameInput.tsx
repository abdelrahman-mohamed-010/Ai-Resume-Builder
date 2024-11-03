import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateName } from "../../redux/coverLetterSlice";
import { useDebounce } from "../../hooks/useDebounce.ts";

const NameInput: React.FC = () => {
  const userName = useAppSelector((state) => state.coverLetter.name);
  const [name, setName] = useState(userName);

  const debouncedName = useDebounce(name, 500);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateName(debouncedName));
  }, [debouncedName, dispatch]);

  return (
    <div>
      <input
        type="text"
        className="text-2xl font-bold pb-1 focus:outline-dashed focus:outline-2 focus:outline-primary px-2 w-full bg-inherit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <hr className="border-gray-300 my-2" />
    </div>
  );
};

export default NameInput;
