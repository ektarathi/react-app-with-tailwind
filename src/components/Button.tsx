const Button = ({ children, color,  ...rest }: any) => {
  console.log("yghv nb",color);
    return (
      <button
      className = {`rounded-md text-text-base px-3 py-1 bg-${color} mr-2 hover:bg-${color}-light`}
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