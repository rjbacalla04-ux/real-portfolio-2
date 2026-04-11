import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialIcons = () => {
  return (
    /* 1. Inilayo natin sa left gamit ang 'left-10' para hindi dikit sa screen.
       2. Ginamit ang 'gap-6' imbes na 'space-y-4' para sa mas modernong spacing.
       3. 'items-center' para laging tapat-tapat ang icons vertically.
    */
    <div className="absolute top-1/6 -translate-y-1/2 left-8 flex flex-col items-center gap-6 z-50">
      
      {/* Ginamit ang 'group' class para mas madaling i-style ang hover effects */}
      <SocialLink href="#" icon={<FaFacebook />} />
      <SocialLink href="#" icon={<FaInstagram />} />
      <SocialLink href="#" icon={<FaLinkedin />} />
      <SocialLink href="#" icon={<FaGithub />} />

      {/* Decorative vertical line sa ilalim (optional, pero common sa designs) */}
      <div className="w-[1px] h-16 bg-slate-300 mt-2"></div>
    </div>
  );
};

// Ginawa nating reusable component para malinis ang code
const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    /* 'text-slate-800': Isang kulay lang para sa lahat ng icons.
       'hover:text-[#e93f00]': Magpapalit sa brand color mo pag-hover.
    */
    className="text-2xl text-slate-800 hover:text-[#e93f00] hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);

export default SocialIcons;