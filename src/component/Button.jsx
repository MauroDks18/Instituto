import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary', 
  fullWidth = false,
  ...props 
}) => {
  
  const baseStyles = "font-bold rounded transition-all flex items-center justify-center cursor-pointer";
  
  const variants = {
    primary: "bg-yellow-500 hover:bg-yellow-400 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] uppercase transform hover:-translate-y-0.5",
    dark: "bg-slate-900 hover:bg-yellow-500 hover:text-black text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    ghost: "text-slate-300 hover:text-white bg-transparent",
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;