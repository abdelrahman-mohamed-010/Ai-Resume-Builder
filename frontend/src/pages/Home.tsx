import { motion } from "framer-motion";
import Faq from "../components/Home/Faq";
import Header from "../components/Home/Header";
import Features from "../components/Home/Features";
import HeroSection from "../components/Home/HeroSection";

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
