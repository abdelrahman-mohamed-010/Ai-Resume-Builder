import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface testimonialsProp {
  text: string;
  author: string;
}
const Tistmonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] =
    useState<number>(0);

  const testimonials: testimonialsProp[] = [
    {
      text: "I landed my dream job thanks to my resume! Highly recommend!",
      author: "Jane Doe",
    },
    {
      text: "The AI tools made building my resume quick and incredibly easy!",
      author: "John Smith",
    },
    {
      text: "A game changer for job seekers! My resume has never looked better.",
      author: "Emily Davis",
    },
    {
      text: "Amazing templates, super easy to use, and very professional!",
      author: "Michael Brown",
    },
    {
      text: "Thanks to this service, I landed interviews with top companies!",
      author: "Sarah Johnson",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-800"
        >
          <motion.p
            key={currentTestimonialIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="italic text-secondary-text max-sm:text-sm max-sm:mb-2 dark:text-light-background "
          >
            {testimonials[currentTestimonialIndex].text}
          </motion.p>
          <motion.p
            key={`author-${currentTestimonialIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-right max-sm:text-sm"
          >
            {testimonials[currentTestimonialIndex].author}
          </motion.p>
        </motion.div>
      </div>
      <div className=" flex gap-4">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            className={`cursor-pointer w-2 h-2 border-2  border-solid border-neutral-300 rounded-full transition-all duration-100 ease-in ${
              index === currentTestimonialIndex ? "bg-neutral-300" : ""
            }  `}
            onClick={() => setCurrentTestimonialIndex(index)}
          ></motion.button>
        ))}
      </div>
    </>
  );
};

export default Tistmonials;
