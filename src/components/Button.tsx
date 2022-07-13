import React from "react";

interface ButtonProps {
  title: string;
  styles?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  loading?:boolean
}

const Button: React.FC<ButtonProps> = ({ title, styles='', type, onClick, loading }) => {
  const cls = `button ${styles}`;

  return (
    <button className={cls} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
