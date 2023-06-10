import { NavigationBox, NavigationLink } from "./NavigationStyled";

export const Navigation = () => {
  return (
    <NavigationBox>
      <NavigationLink text="Home" link="/" />
      <NavigationLink text="Trends" link="/trends" />
      <NavigationLink text="Cases" link="/cases" />
      <NavigationLink text="Careers" link="/careers" />
    </NavigationBox>
  );
};
