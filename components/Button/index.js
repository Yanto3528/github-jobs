import ButtonStyle from "./styles";

const Button = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;
