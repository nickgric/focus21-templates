import { ParagraphBox, Message } from "./ParagraphStyled";

export const Paragraph = ({ text, center, invert }) => {
  return (
    <ParagraphBox>
      <Message text={text} center={center} invert={invert} />
    </ParagraphBox>
  );
};
