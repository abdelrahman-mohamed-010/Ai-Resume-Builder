import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateGmail } from "../../redux/coverLetterSlice";
import { useDebounce } from "../../hooks/useDebounce.ts";

const EmailInput: React.FC = () => {
  const userEmail = useAppSelector((state) => state.coverLetter.gmail);

  const [email, setEmail] = useState(userEmail);

  const debouncedEmail = useDebounce(email, 500);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateGmail(debouncedEmail));
  }, [debouncedEmail, dispatch]);

  return (
    <input
      type="email"
      className="text-gray-600 focus:outline-dashed focus:outline-2 focus:outline-primary px-2 mb-1 w-full"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
};

export default EmailInput;
