import { Trends } from "../components/Trends";
import { TrendsHero } from "../components/TrendsHero";
import { Line } from "../components/Line";
import { Quote } from "../components/Quote";
import { Fact } from "../components/Fact";
import { SecondaryTitle } from "../components/SecondaryTitle";
import { Paragraph } from "../components/Paragraph";
import { FullImage } from "../components/FullImage";
import { Numbers } from "../components/Numbers";
import { SubTitle } from "../components/SubTitle";

const TrendsPage = () => {
  return (
    <>
      <TrendsHero />
      <Fact text="The Apple Vision Pro was only made possible through the close interaction of software and hardware." />
      <SecondaryTitle text="Meet the Apple Vision Pro - Apple's first MR glasses" />
      <FullImage image="https://i.ibb.co/SVWvDqR/00.jpg" />
      <SubTitle text="The device has tremendous potential" />
      <Paragraph text="Apple Vision Pro - Apple's first mixed reality glasses that change the interaction with multimedia content, professional activities in the office and at any convenient place, remote interaction with employees and colleagues. A revolution and another 'One more thing...' from the beloved company." />
      <Numbers
        value1="2024"
        text1="sales begin"
        value2="M2"
        text2="powerful chip runs visionOS"
        value3="<12ms"
        text3="virtually lag-free, real-time view"
      />
      <SecondaryTitle text="5 most significant features of the Apple Vision Pro" />
      <SubTitle text="1. Infinite space for apps" />
      <Paragraph text="Apple Vision Pro operates on the basis of a new operating system, visionOS, which is built around a three-dimensional interface free from boundaries. The space for applications here is practically limitless. Entertainment content and professional software can be everywhere around." />
      <SubTitle text="2. High-resolution favorite entertainments" />
      <Paragraph text="The Apple Vision Pro allows you to watch favorite movies, TV shows and other entertainment content on any screen up to 1200 inches wide. Coupled with spatial audio technology, the depth of immersion into any content is greatly enhanced. This is something you simply have to try." />
      <SubTitle text="3. Immersive merge of AR and reality" />
      <Paragraph text="Apple Vision Pro offers an incredible immersive experience that allows you to literally go beyond the confines of a room, essentially without leaving it, or completely or partially transform it beyond recognition. To alter the level of reality of the world, all you need to do is turn the Digital Crown." />
      <SubTitle text="4. New content and professional software" />
      <Paragraph text="Apple's first mixed reality glasses not only provide the ability to view content with the highest level of immersion or to use professional software in a completely different way, but also to create memories in three dimensions. To do this, the cameras located on the front can record everything that is happening." />
      <SubTitle text="5. Extraordinary communication with FaceTime" />
      <Paragraph text="The use of FaceTime, redesigned for the visionOS platform, is turned upside down. Communication with colleagues has never been as productive and realistic. It creates the feeling that interlocutors are nearby, which greatly increases the efficiency of communication." />
      <SubTitle text="" />
      <SubTitle text="" />
      <SecondaryTitle text="First impressions of the Apple Vision Pro" />
      <FullImage image="https://i.ibb.co/FJP6tfR/2.jpg" />
      <SubTitle text="This is a new revolution by Apple" />
      <Paragraph text="The company successfully makes them from time to time throughout its history. It created the first personal computer, reinvented music with the iPod, changed the principles of interaction with the digital world first with the iPhone, and then with the iPad." />
      <Paragraph text="The first mass-market smartwatch - Apple Watch. The first fully wireless earphones that became mainstream - AirPods. This list can go on for a long time, and Apple Vision Pro today feels like the culmination of the company's technological development." />
      <Fact text="No one has made a device of this level for interaction with MR (Mixed Reality, the space between AR and VR) before." />
      <Paragraph text="The Apple Vision Pro mixed reality glasses are supposed to change the way content is consumed, as well as methods of interaction with professional software. This device today is on the edge of fantasy, but in the end, it will become a usual part of life both in leisure and at work." />
      <SubTitle text="" />
      <FullImage image="https://i.ibb.co/4p8g3ML/3.jpg" />
      <SubTitle text="The device has tremendous potential" />
      <Paragraph text="How significantly the Apple Vision Pro will change lives, we are yet to find out. However, it's already clear today that the device can do this in many different ways. Just imagine your favorite movie on a screen that's 1200 inches wide! That's something incredible..." />
      <Paragraph text="Boundless prospects are also opening up in the professional sphere. The Apple Vision Pro becomes a massive monitor, on which absolutely all necessary work software will fit. What's more, there could be not just one, but several displays - plus, separate chats in FaceTime and beyond." />
      <Quote
        text="Creating the first spatial computer required an innovative
                approach to almost everything."
        author="Mike Rockwell, Apple's Vice President of Technology
                Development"
      />
      <Paragraph text="Three-dimensional objects that can be not only studied but also created certainly deserve special attention. Engineers and designers will surely appreciate this possibility, as their creativity will reach a new level. And there will be incredible games, 3D sports broadcasts and more. We just have to wait and see." />
      <SubTitle text="" />
      <SubTitle text="" />
      <Line />
      <Trends />
    </>
  );
};

export default TrendsPage;
