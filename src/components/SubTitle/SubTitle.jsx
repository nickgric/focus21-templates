import { SubTitleBox, Message } from "./SubTitleStyled";

export const SubTitle = ({ text }) => {
  return (
    <SubTitleBox>
      <Message text={text} />
    </SubTitleBox>
  );
};
