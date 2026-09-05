import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import HowItWorks from "../components/HowItWorks";
import WhyCyprus from "../components/WhyCyprus";
import FeaturedUniversities from "../components/FeaturedUniversities";
import FeaturedPrograms from "../components/FeaturedPrograms";
import StudentStories from "../components/StudentStories";
import FinalCTA from "../components/FinalCTA";

const Landing = () => {
  return (
    <main className="bg-white">
      <Hero />

      <TrustBar />

      <HowItWorks />

      <WhyCyprus />

      <FeaturedUniversities />

      <FeaturedPrograms />

      <StudentStories />

      <FinalCTA />
    </main>
  );
};

export default Landing;
