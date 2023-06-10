import { NavigationBox, NavigationLink } from "./NavigationStyled";
import { Button } from "../Button";

export const Navigation = () => {
  return (
    <NavigationBox>
      <NavigationLink text="Home" link="/" />
      <NavigationLink text="Trends" link="/trends" />
      <NavigationLink text="Cases" link="/cases" />
      <NavigationLink text="Careers" link="/careers" />
      <Button styleType="main" text="Contact" link="/contact" />
    </NavigationBox>
  );
};
