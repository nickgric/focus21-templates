import { MainTitleBox, Message } from "./MainTitleStyled";

export const MainTitle = ({ text }) => {
  return (
    <MainTitleBox>
      <Message text={text} />
    </MainTitleBox>
  );
};
