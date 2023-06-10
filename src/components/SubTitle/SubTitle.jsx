import { SubTitleBox, Message } from "./SubTitleStyled";

export const SubTitle = ({ text, invert }) => {
  return (
    <SubTitleBox>
      <Message text={text} invert={invert} />
    </SubTitleBox>
  );
};
