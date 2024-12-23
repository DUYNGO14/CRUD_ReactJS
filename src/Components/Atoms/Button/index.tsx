import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button : React.FC<ButtonProps> = ({ children, onClick, className, type }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </button>
  );
};  

export default Button