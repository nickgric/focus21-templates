import { FactBox, FactIcon, Message } from "./FactStyled";
import { Container } from "../Contrainer";

export const Fact = ({ text, author }) => {
  return (
    <Container>
      <FactBox>
        <FactIcon />
        <Message text={text} author={author} />
      </FactBox>
    </Container>
  );
};
