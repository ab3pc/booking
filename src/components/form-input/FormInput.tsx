import React from "react";

interface FormInputProps {
  title: string;
  name: string;
  type: "text" | "email" | "password";
  isRequired: boolean;
  autoComplete?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  title,
  name,
  type,
  isRequired,
  autoComplete
}) => {
  return (
    <label className="trip-popup__input input">
      <span className="input__heading">{title}</span>
      <input
        name={name}
        type={type}
        required={isRequired}
        autoComplete={autoComplete}
        maxLength={20}
        minLength={3}
      />
    </label>
  );
};
export default FormInput;
