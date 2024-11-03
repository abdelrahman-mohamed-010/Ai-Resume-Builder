import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateLastName } from "../../redux/coverLetterSlice";
import { useDebounce } from "../../hooks/useDebounce.ts";

const ClosingName: React.FC = () => {
  const userName = useAppSelector((state) => state.coverLetter.lastName);
  const [name, setName] = useState(userName);

  const debouncedName = useDebounce(name, 500);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateLastName(debouncedName));
  }, [debouncedName, dispatch]);

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="text-gray-800 focus:outline-dashed focus:outline-2 focus:outline-primary px-2 bg-transparent w-full"
    />
  );
};

export default ClosingName;
