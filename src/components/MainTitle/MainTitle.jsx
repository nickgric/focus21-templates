import { MainTitleBox, Message } from "./MainTitleStyled";

export const MainTitle = ({ text, invert, accent }) => {
  return (
    <MainTitleBox>
      <Message text={text} invert={invert} accent={accent} />
    </MainTitleBox>
  );
};
