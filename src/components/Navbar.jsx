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
            setActive(sec === "home" ? "home" : sec); // Mas okay kung "home" din ang active value kesa null para lumabas yung line
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActive(sectionId);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50"> {/* Added blur para readable */}
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-center space-x-10 py-4 font-poppins text-[14px] tracking-widest uppercase">
          {sections.map((sec) => (
            <li key={sec} className="relative group">
              <button
                onClick={() => handleClick(sec)}
                className={`transition-colors duration-300 capitalize ${
                  active === sec ? "text-[#e93f00] font-bold" : "text-gray-800 hover:text-[#e93f00]"
                }`}
              >
                {sec}
              </button>

              {/* HETO YUNG ORANGE LINE */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-[#e93f00] transition-all duration-300 ${
                  active === sec ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;