import React from "react";
import { AppDispatch } from "../../store/store";

 
interface FormInputProps {
  title: string;
  name: string;
  type: "text" | "email" | "password";
  isRequired: boolean;
  value: string;
  onChange:(text:string) => void
}

const FormInput: React.FC<FormInputProps> = ({ title, name, type, isRequired,  value, onChange}) => {

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  return (
    <label className="trip-popup__input input">
      <span className="input__heading">{title}</span>
      {type === "password" ? (
        <input value={value} onChange={handleOnChange} name={name} type={type} required={isRequired}  maxLength={20} minLength={3} />
      ) : (
        <input value={value} name={name} type={type} required={isRequired} onChange={handleOnChange}/>
      )}
    </label>
  );
};
export default FormInput;
