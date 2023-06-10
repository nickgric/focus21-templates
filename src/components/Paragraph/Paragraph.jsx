import { ParagraphBox, Message } from "./ParagraphStyled";

export const Paragraph = ({ text }) => {
  return (
    <ParagraphBox>
      <Message text={text} />
    </ParagraphBox>
  );
};
