import { Container } from "../Contrainer";
import { NumbersBox, Item } from "./NumbersStyled";

export const Numbers = ({ value1, value2, value3, text1, text2, text3 }) => {
  return (
    <Container>
      <NumbersBox>
        <Item value={value1} text={text1} />
        <Item value={value2} text={text2} />
        <Item value={value3} text={text3} />
      </NumbersBox>
    </Container>
  );
};
