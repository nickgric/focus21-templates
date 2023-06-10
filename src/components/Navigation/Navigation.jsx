import { NavigationBox, NavigationLink } from "./NavigationStyled";
import { Button } from "../Button";

export const Navigation = () => {
  return (
    <NavigationBox>
      <NavigationLink text="Home" link="/" active />
      <NavigationLink text="Cases" link="/cases" />
      <NavigationLink text="Trends" link="/trends" />
      <NavigationLink text="Careers" />
      <Button styleType="main" text="Contact" />
    </NavigationBox>
  );
};
