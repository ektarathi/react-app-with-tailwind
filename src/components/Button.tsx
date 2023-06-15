const Button = ({ children, color,  ...rest }: any) => {
    return (
      <button
      className = {`rounded-md text-text-base px-3 py-1 bg-${color} mr-2 hover:bg-${color}-light mt-3`}
      {...rest}
    >
      {children}
    </button>
    );
  };
  
  Button.defaultProps = {
    color: "primary",
  };

  export default Button;