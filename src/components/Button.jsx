import React from "react";

const Button = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`font-bold py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
