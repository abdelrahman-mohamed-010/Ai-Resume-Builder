import { motion } from "framer-motion";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Faq from "./Faq";

const Home: React.FC = () => {
  return (
    <motion.div
      className="w-full min-h-screen bg-light-background text-primary-text dark:bg-dark-background dark:text-secondary-text px-8"
      layout
    >
      <Header />
      <HeroSection />
      <Features />
      <Faq />
    </motion.div>
  );
};

export default Home;
