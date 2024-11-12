import React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  autoFocus?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  type,
  placeholder,
  autoFocus = false,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-neutral-700 mb-2 dark:text-neutral-300"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus} // Set the autoFocus attribute here
        className="border border-neutral-400 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-inherit dark:text-neutral-100 dark:border-neutral-600"
      />
    </div>
  );
};

export default InputField;
