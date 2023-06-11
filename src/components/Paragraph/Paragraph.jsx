import { Container } from "../Contrainer";
import { ParagraphBox, Message } from "./ParagraphStyled";

export const Paragraph = ({ text, center, invert, inner }) => {
  return (
    <>
      {!inner && (
        <Container>
          <ParagraphBox>
            <Message text={text} center={center} invert={invert} />
          </ParagraphBox>
        </Container>
      )}
      {inner && (
        <ParagraphBox>
          <Message text={text} center={center} invert={invert} />
        </ParagraphBox>
      )}
    </>
  );
};
