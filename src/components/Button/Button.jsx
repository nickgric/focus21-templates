import { MainButton } from "./ButtonStyled";

export const Button = ({ styleType, text, link }) => {
  return <>{styleType === "main" && <MainButton text={text} link={link} />}</>;
};
