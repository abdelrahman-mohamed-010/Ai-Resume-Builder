import React, { useState } from "react";
import InputField from "./InputField";
import Stepper from "./Stepper";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updatePersonalInfo } from "@/redux/ResumeSlice";
import { useNavigate } from "react-router-dom";

const ContactInfoForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    jobRole: "",
    address: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      updatePersonalInfo({
        firstname: formData.firstName,
        surname: formData.surname,
        address: formData.address,
        phone: formData.phone,
        contactJobRole: formData.jobRole,
        email: formData.email,
      })
    );
    navigate("/builder/summary");
  };

  return (
    <>
      <Stepper number={1} />
      <form className="" id="contact-form" onSubmit={handleSubmit}>
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
              required
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
              required
              placeholder="e.g., 456 Elm Street"
              value={formData.address}
              onChange={handleChange}
            />
              <InputField
                label="Phone"
                id="phone"
                name="phone"
                type="text"
                required
                placeholder="e.g. +27 82 978 5313"
                className="flex-1"
                value={formData.phone}
                onChange={handleChange}
              />
            {/* </div> */}
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
