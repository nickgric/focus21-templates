import { Hero } from "../components/Hero";
import { Cases } from "../components/Cases";
import { About } from "../components/About";
import { Trends } from "../components/Trends";
import { Quote } from "../components/Quote";
import { Fact } from "../components/Fact";
import { WhyWe } from "../components/WhyWe";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Cases />
      <Fact text="With nothing but quality and customer success at its core, Focus21 delivers actual quantifiable results. We help business leaders achieve up to 2-3X revenue growth through our proprietary processes." />
      <About />
      <Trends />
      <Quote
        text="We believe that today any business can be digitized regardless of the industry. Anyone who realizes this faster than others will achieve unprecedented success."
        author="Ilya Peskov, SEO Focus21"
      />
      <WhyWe />
    </>
  );
};

export default HomePage;
