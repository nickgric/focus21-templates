import { Container } from "../Contrainer";
import { ImageStyled } from "./FullImageStyled";

export const FullImage = ({ image }) => {
  return (
    <Container>
      <ImageStyled image={image} />
    </Container>
  );
};
