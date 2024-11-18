import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-background dark:bg-dark-background text-primary-text dark:text-secondary-text py-4 px-8">
      <div className="container mx-auto flex justify-between items-center max-sm:gap-4">
        <p className="text-sm max-sm:text-xs max-sm:text-nowrap">
          &copy; {new Date().getFullYear()} ResumeGenie. All rights reserved.
        </p>
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent max-sm:text-sm dark:hover:text-accent transition-colors flex items-center"
        >
          <FaGithub className=" h-5 w-5 mr-1 max-sm:h-4 max-sm:w-4" />
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
