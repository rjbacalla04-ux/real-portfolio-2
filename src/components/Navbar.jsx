import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(null);

  const sections = ["home", "about", "portfolio", "contact"];

  useEffect(() => {
    const observers = [];

    sections.forEach((sec) => {
      const element = document.getElementById(sec);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (sec === "home") {
              setActive(null);
            } else {
              setActive(sec);
            }
          }
        },
        {
          threshold: 0.6, // gaano kalaki dapat visible bago ma-detect
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, );

  const handleClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });

    if (sectionId === "home") {
      setActive(null);
    } else {
      setActive(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-center space-x-10 py-4 font-poppins text-[14px] tracking-widest">
          {sections.map((sec) => (
            <li key={sec}>
              <button
                onClick={() => handleClick(sec)}
                className={`hover:text-blue-600 ${
                  active === sec
                    ? "text-blue-600 font-bold"
                    : "text-gray-800"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;