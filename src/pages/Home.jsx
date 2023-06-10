import { Hero } from "../components/Hero";
import { Line } from "../components/Line";
import { Cases } from "../components/Cases";
import { About } from "../components/About";
import { Trends } from "../components/Trends";

const Home = () => {
  return (
    <>
      <Hero />
      <Line />
      <Cases />
      <About />
      <Trends />
    </>
  );
};

export default Home;
