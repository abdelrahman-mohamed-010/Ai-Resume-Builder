import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-background dark:bg-dark-background text-primary-text dark:text-secondary-text py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AI Resume Builder. All rights
          reserved.
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent dark:hover:text-accent transition-colors flex items-center"
          >
            <FaLinkedin className="h-5 w-5 mr-1" />
            LinkedIn
          </a>
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent dark:hover:text-accent transition-colors flex items-center"
          >
            <FaGithub className="h-5 w-5 mr-1" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
