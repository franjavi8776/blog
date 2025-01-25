import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = ["home", "about", "contact"];
    let currentSection = "home";

    sections.forEach((section) => {
      const el = document.getElementById(section);
      const rect = el.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        currentSection = section;
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="border-r-4 border-neutral">
      <ul className="w-full h-[100vh] flex flex-col justify-around items-center text-md md:text-3xl">
        {["home", "about", "contact"].map((section) => (
          <Link
            key={section}
            to="#"
            className={`transform -rotate-90 w-[100px] md:w-[200px] text-center h-[54px] md:h-[154px] flex justify-center items-center ${
              activeSection === section
                ? "border-b-4 border-secondary"
                : "border-b-4 border-transparent"
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(section);
            }}
          >
            <span className="font-body text-neutral text-shadow-md">
              {section.toUpperCase()}
            </span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
