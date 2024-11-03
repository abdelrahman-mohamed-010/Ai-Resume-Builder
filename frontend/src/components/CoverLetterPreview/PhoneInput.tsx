import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updatePhone } from "../../redux/coverLetterSlice";
import { useDebounce } from "../../hooks/useDebounce";

const PhoneInput: React.FC = () => {
  const userPhone = useAppSelector((state) => state.coverLetter.phone);

  const [phone, setPhone] = useState(userPhone);

  const debouncedPhone = useDebounce(phone, 500);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updatePhone(debouncedPhone));
  }, [debouncedPhone, dispatch]);

  return (
    <input
      type="tel"
      className="text-gray-600 focus:outline-dashed focus:outline-2 focus:outline-primary px-2 w-full"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
  );
};

export default PhoneInput;
