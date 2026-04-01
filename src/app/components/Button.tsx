import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyle = "font-body font-semibold text-base px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-white hover:brightness-90 shadow-md hover:shadow-lg",
    secondary: "bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-primary"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};