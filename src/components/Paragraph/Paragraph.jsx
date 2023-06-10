import { ParagraphBox, Message } from "./ParagraphStyled";

export const Paragraph = ({ text, center }) => {
  return (
    <ParagraphBox>
      <Message text={text} center={center} />
    </ParagraphBox>
  );
};
