import { QuoteBox, QuoteIcon, Message } from "./QuoteStyled";
import { Container } from "../Contrainer";

export const Quote = ({ text, author }) => {
  return (
    <Container>
      <QuoteBox>
        <QuoteIcon />
        <Message text={text} author={author} />
      </QuoteBox>
    </Container>
  );
};
