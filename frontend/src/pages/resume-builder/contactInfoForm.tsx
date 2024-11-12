import React, { useState } from "react";
import InputField from "./InputField";
import Stepper from "./Stepper";

const ContactInfoForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    jobRole: "",
    address: "",
    postalCode: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Stepper number={1} />
      <form>
        <div className="text-sm mt-6 font-semibold text-neutral-600 dark:text-neutral-200">
          * indicates a required field
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col gap-4 w-full">
            <InputField
              label="First Name"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="e.g. Farid"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputField
              label="Surname"
              id="surname"
              name="surname"
              type="text"
              placeholder="e.g. Jhon"
              required
              value={formData.surname}
              onChange={handleChange}
            />
            <InputField
              label="Job Role"
              id="jobRole"
              name="jobRole"
              type="text"
              placeholder="e.g., Software Engineer"
              value={formData.jobRole}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <InputField
              label="Address"
              id="address"
              name="address"
              type="text"
              placeholder="e.g., 456 Elm Street"
              value={formData.address}
              onChange={handleChange}
            />
            <div className="flex gap-4">
              <InputField
                label="Postal Code"
                id="postalCode"
                name="postalCode"
                type="text"
                placeholder="e.g. 4057"
                className="flex-1"
                value={formData.postalCode}
                onChange={handleChange}
              />
              <InputField
                label="Phone"
                id="phone"
                name="phone"
                type="text"
                placeholder="e.g. +27 82 978 5313"
                className="flex-1"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
              value={formData.email}
              onChange={handleChange}
              className="mb-4"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactInfoForm;
