import { Container } from "../Contrainer";
import { SubTitleBox, Message } from "./SubTitleStyled";

export const SubTitle = ({ text, invert, inner }) => {
  return (
    <>
      {!inner && (
        <Container>
          <SubTitleBox>
            <Message text={text} invert={invert} />
          </SubTitleBox>
        </Container>
      )}
      {inner && (
        <SubTitleBox>
          <Message text={text} invert={invert} />
        </SubTitleBox>
      )}
    </>
  );
};
