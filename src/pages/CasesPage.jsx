import { Cases } from "../components/Cases";
import { CasesHero } from "../components/CasesHero";
import { Line } from "../components/Line";
import { Quote } from "../components/Quote";
import { Fact } from "../components/Fact";
import { SecondaryTitle } from "../components/SecondaryTitle";
import { Paragraph } from "../components/Paragraph";
import { FullImage } from "../components/FullImage";
import { Numbers } from "../components/Numbers";
import { SubTitle } from "../components/SubTitle";

const CasesPage = () => {
  return (
    <>
      <CasesHero />
      <Quote
        text="...we wanted to build a world-class safety culture, which meant we had to deal with several challenges..."
        author="Ken Woodlin, Vice President of Compliance, Safety and Asset Protection for Walmart Logistics"
      />
      <SecondaryTitle text="Determining critical obstacles" />
      <FullImage image="https://i.ibb.co/w79Mnt2/download.jpg" />
      <SubTitle text="Safety mishaps within the Walmart corporation carry a substantial financial impact" />
      <Paragraph text="Woodlin understood that even a 5% decrease in OSHA recordables could result in annual savings of millions for Walmart. However, to enhance safety, he realized the necessity to increase employee consciousness about safety rules and protocols, maintain this as a priority, and confirm employees could apply this understanding to adopt safe work practices." />
      <Paragraph text="Walmart's workforce encompasses four unique generations - Traditionalists, Baby Boomers, Generation X, and Millennials, each exhibiting different learning inclinations. They also have distribution centers spread across North America, each embodying individual safety cultures, yet requiring alignment with the broader corporate safety culture. Essentially, a solution adaptable to the diverse learning needs of various groups was required." />
      <Quote
        text="We knew a big part of changing behaviors and beliefs about safety would involve building employee knowledge..."
        author="Ken Woodlin"
      />
      <SecondaryTitle text="Walmart looking for a solution that would meet several key requirements" />
      <SubTitle text="1. Maintain continuous employee engagement" />
      <Paragraph text="One of the critical elements of a successful safety culture is the consistent and continuous engagement of employees. It's not enough to simply provide information or set guidelines; employees need to feel involved in the process, understanding their roles, responsibilities, and the importance of maintaining safety in the workplace. This level of engagement not only cultivates a safety-first mindset but also contributes to greater job satisfaction and productivity." />
      <SubTitle text="2. Consistently emphasize on safe work habits" />
      <Paragraph text="Alongside employee engagement, it is equally important to consistently emphasize safe work habits. Safety is not a one-off event, but a continuous process embedded in daily tasks. Regular reminders, safety briefings, and the promotion of best practices reinforce this culture, creating an environment where safety is seen as the norm rather than an afterthought." />
      <SubTitle text="3. Guarantee quick and convenient access to training to minimize work disruption" />
      <Paragraph text="To ensure that safety culture permeates every level of the organization, training must be accessible, quick, and convenient. This minimizes the disruption of work and allows employees to learn at their own pace without feeling pressured or overwhelmed. It could involve online modules, practical demonstrations, or on-the-job training, depending on the nature of the work and the specific safety requirements." />
      <SubTitle text="4. Offer individualized learning allowing each worker to advance at their pace and build upon their unique base knowledge" />
      <Paragraph text="Another key aspect is offering individualized learning. Recognizing that each worker has different learning styles, experiences, and base knowledge can make safety training more effective. By allowing each employee to advance at their own pace and build upon their unique base knowledge, we can ensure a deeper and more personal understanding of safety practices." />
      <SubTitle text="5. Enable the company to recognize and foresee potential risk behaviors for proactive intervention" />
      <Paragraph text="Lastly, proactive intervention is critical to prevent accidents before they occur. By enabling the company to recognize and predict potential risk behaviors, preventive measures can be put in place. This may involve additional training, changes to work processes, or improvements to the work environment. By taking this proactive approach, we can move from simply reacting to accidents to preventing them in the first place." />
      <Quote
        text="The response to Focus21's skills in building software ecosystems has been outstanding, and we are convinced that it is the result of working with him that has played a significant role in improving our performance and building our team of employees."
        author="Ken Woodlin"
      />
      <SecondaryTitle text="Adopting a groundbreaking strategy for enhancing employee understanding and modifying conduct" />
      <FullImage image="https://i.ibb.co/w79Mnt2/download.jpg" />
      <SubTitle text="Focus21 facilitates an engaging, gamified learning experience" />
      <Paragraph text="In 2012, Woodlin initiated the Focus21 system. Focus21 facilitates an engaging, gamified learning experience, custom-tailoring content to fill individual knowledge gaps. It equips employees to perform optimally, thus driving business results." />
      <Paragraph
        text="
Over 75,000 Walmart associates across 150+ U.S. distribution centers utilize the Focus21 platform. In each shift, they spend a few minutes engaging in a gamified learning experience. Focus21's immediate feedback and memory of past responses ensures continuous learning and a healthy competitive environment."
      />
      <Numbers
        value1=">75k"
        text1="Walmart associates"
        value2="150"
        text2="distribution centers"
        value3="<5"
        text3="minutes education"
      />
      <Paragraph text="After employees begin learning with Focus21, Walmart assesses their on-the-job application using the Behaviors module. By observing if safety procedures are followed correctly, the company ensures optimal performance. Importing these observations into Focus21 enables automatic evaluation, adjustment of training, and reinforcement, empowering employees to make informed decisions at work." />
      <Paragraph
        text="
ChatGPT
Walmart employs this process to proactively detect and address safety behavior gaps. For instance, if non-compliance with ladder safety is identified, they investigate the cause and improve learning content accordingly. Focus21's data-driven insights enable prediction and prevention of at-risk behaviors, mitigating safety incidents."
      />
      <SecondaryTitle text="Linking Learning to Tangible Business Outcomes: The Focus21 Approach" />
      <FullImage image="https://i.ibb.co/BNpWBGH/Walmart-store-associate-with-customer-checkout.jpg" />
      <Numbers
        value1="54%"
        text1="recordable accident decrease"
        value2="91%"
        text2="volunrary participation"
        value3="15%"
        text3="employee knowledge growth"
      />
      <Paragraph text="Walmart's pilot program resulted in a notable 54% reduction in recordable incidents across 8 distribution centers, fostering improved morale and reduced injury costs. An impressive 96% of behavior observations indicate employees are effectively applying their knowledge on the job. Voluntary participation on the Focus21 platform averages an impressive 91%. Knowledge levels on safety topics have increased by up to 15%, while employee confidence in the material has seen a remarkable increase of up to 8%." />
      <Paragraph text="Over the past four years, Walmart's adoption of Focus21 has empowered associates to identify safety opportunities, recognize the interplay between workplace and non-workplace safety, and confidently voice safety concerns. Notably, the implementation has transformed safety training into an ongoing cycle rooted in positive behaviors and nourished by the corporate culture, departing from the traditional top-down approach." />
      <Fact text="The Focus21 platform has received exceptional feedback, playing a significant role in improving performance and fostering employee engagement." />
      <Paragraph text="Walmart's safety programs have witnessed remarkable enhancement due to associate ownership, engagement, and leadership commitment. Lost Time metrics have decreased by over 50%, while Incident Rates and DART rates remain below industry norms." />
      <SubTitle text="" />
      <SubTitle text="" />
      <Line />
      <Cases />
    </>
  );
};

export default CasesPage;
