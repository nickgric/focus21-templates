import { Container } from "../Contrainer";
import { CasesBox, Filter, Category, Companies, Case } from "./CasesStyled";
import { Paragraph } from "../Paragraph";

export const Cases = () => {
  return (
    <Container>
      <CasesBox>
        <Filter>
          <Category name="→ Food & Beverage" active />
          <Category name="→ Healthcare" />
          <Category name="→ Education & E-Learning" />
          <Category name="→ Hospitality" />
          <Category name="→ Manufacturing & Design" />
          <Category name="→ Utilities & Energy" />
          <Category name="→ Real Estate & Property" />
          <Category name="→ Logistics & E-commerce" />
        </Filter>
        <Companies>
          <Case image="https://i.ibb.co/dBrCvtP/1.jpg" link="/cases" />
          <Case image="https://i.ibb.co/cFC6hrk/2.jpg" link="/cases" />
          <Case image="https://i.ibb.co/q5ypnbR/3.jpg" link="/cases" />
          <Case image="https://i.ibb.co/Pgq38cH/4.png" link="/cases" />
          <Case image="https://i.ibb.co/tHdZ7Rj/5.png" link="/cases" />
          <Case image="https://i.ibb.co/NjZqkVj/6.png" link="/cases" />
        </Companies>
        <Paragraph
          text="With nothing but quality and customer success at its core, Focus21 delivers actual quantifiable results. We help business leaders achieve up to 2-3X revenue growth through our proprietary processes."
          center
        />
      </CasesBox>
    </Container>
  );
};
