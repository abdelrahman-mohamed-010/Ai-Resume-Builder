import React from "react";
import NameInput from "./NameInput";
import LocationInput from "./LocationInput";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";

const Header: React.FC = () => {
  return (
    <div className="mb-6">
      <NameInput />
      <LocationInput />
      <EmailInput />
      <PhoneInput />
    </div>
  );
};

export default Header;
