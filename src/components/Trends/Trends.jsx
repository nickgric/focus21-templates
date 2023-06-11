import { Container } from "../Contrainer";
import { TrendsBox, News, Info, Filter, Category } from "./TrendsStyled";

export const Trends = () => {
  return (
    <Container>
      <TrendsBox>
        <Filter>
          <Category name="→ All Trends" />
          <Category name="→ MWC 2023 (Barcelona, Spain)" />
          <Category name="→ WWDC 2023 (Cupertino, USA)" active />
          <Category name="→ Collision 2023 (Toronto, Canada)" />
          <Category name="→ Artificial Intelligence (AI)" />
          <Category name="→ Mixed Reality (MR)" />
        </Filter>
        <News>
          <Info image="https://i.ibb.co/d5yPbKC/1.jpg" link="/trends" />
          <Info image="https://i.ibb.co/TRN10tR/2.jpg" link="/trends" />
          <Info image="https://i.ibb.co/BLBjWw0/3.jpg" link="/trends" />
          <Info image="https://i.ibb.co/3rMK6xM/4.jpg" link="/trends" />
          <Info image="https://i.ibb.co/ZVHghFB/5.jpg" link="/trends" />
          <Info image="https://i.ibb.co/vhGG5y5/6.jpg" link="/trends" />
          <Info image="https://i.ibb.co/94YL3Tt/7.jpg" link="/trends" />
          <Info image="https://i.ibb.co/3s1MJby/8.jpg" link="/trends" />
        </News>
      </TrendsBox>
    </Container>
  );
};
