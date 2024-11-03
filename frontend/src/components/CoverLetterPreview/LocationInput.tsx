import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateAdress } from "../../redux/coverLetterSlice";
import { useDebounce } from "../../hooks/useDebounce.ts";

const LocationInput: React.FC = () => {
  const userAdress = useAppSelector((state) => state.coverLetter.adress);

  const [adress, setAdress] = useState(userAdress);
  const debouncedAdress = useDebounce(adress, 500);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateAdress(debouncedAdress));
  }, [debouncedAdress, dispatch]);

  return (
    <input
      type="text"
      className="text-gray-600 focus:outline-dashed focus:outline-2 focus:outline-primary px-2 mb-1 w-full bg-inherit"
      value={adress}
      onChange={(e) => setAdress(e.target.value)}
    />
  );
};

export default LocationInput;
