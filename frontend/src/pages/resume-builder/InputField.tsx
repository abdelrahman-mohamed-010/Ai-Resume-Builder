import React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  autoFocus?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  type,
  placeholder,
  autoFocus = false,
  value,
  onChange,
  required = false,
  className = "",
}) => {
  return (
    <div className=" w-full">
      <label
        htmlFor={id}
        className="block text-neutral-700 mb-2 dark:text-neutral-300"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        required={required}
        className={`border border-neutral-400 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-inherit dark:text-neutral-100 dark:border-neutral-600 ${className}`}
      />
    </div>
  );
};

export default InputField;
