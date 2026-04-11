import ReactIcon from '../assets/photos/react.png';
import HtmlIcon from '../assets/photos/html.png';
import CssIcon from '../assets/photos/css-3.png';
import GithubIcon from '../assets/photos/github.png';
import NodejsIcon from '../assets/photos/nodejs.png';

const PersonalSkills = () => {
  return (
    <section
      id="about"
      // Change: flex-col for mobile, items-center/start for alignment
      className="min-h-screen flex flex-col lg:flex-row bg-gray-100 relative overflow-hidden"
    >
      {/* LEFT SIDE - CONTENT */}
      <div className="flex-1 px-6 py-16 lg:px-12 lg:py-35 z-10">
        <h1 className="text-6xl md:text-8xl lg:text-[190px] font-bold text-gray-500 tracking-[-0.1em] font-aileron leading-[0.8] lg:leading-[0.75]">
          <span className="block">My</span>
          <span className="block">Personal Skills</span>
        </h1>

        <p className="font-aileron text-base md:text-[17px] mt-6 font-poppins max-w-xl text-gray-800">
          I started my journey in tech as an IT Assistant, where I developed an
          interest in web development. Over time, I learned the fundamentals of
          HTML, CSS, and JavaScript, and I am now focusing on building projects
          using React.
        </p>

        <div className="font-aileron mt-6 text-gray-800">
          <p className="font-semibold">Strengths:</p>
          <ul className="list-none">
            <li>Problem-solving mindset</li>
            <li>Fast learner</li>
            <li>Attention to detail</li>
          </ul>
        </div>

        <p className="font-aileron mt-6 text-gray-800">
          I enjoy turning ideas into functional applications and continuously
          improving my skills.
        </p>

        <button className="
    mt-8 
    bg-[#e93f00] text-white 
    
    /* 1. FONT SIZE: text-sm sa mobile para hindi 'loud', text-base sa desktop */
    text-sm lg:text-base 
    font-bold uppercase tracking-widest
    
    /* 2. PADDING: py-3/px-6 (sakto lang sa mobile) -> py-4/px-10 (desktop) */
    py-3 lg:py-4 
    px-6 lg:px-10 
    
    /* 3. WIDTH: Full sa mobile (standard UX), auto sa desktop */
    w-full sm:w-auto
    
    rounded-full 
    hover:bg-[#c73600] 
    transition-all 
    shadow-lg hover:shadow-orange-600/40
">
    View Projects
</button>
      </div>

{/* RIGHT ORANGE BAR */}
<div className="
  /* Mobile Styles (Default) */
  relative w-full bg-orange-600 flex flex-row flex-wrap justify-center items-center py-8 gap-6
  
  /* Desktop Styles (Large screens) */
  lg:absolute lg:right-0 lg:top-0 lg:w-[250px] lg:h-full lg:flex-col lg:flex-nowrap lg:py-10 lg:gap-10
">
  {/* Html Icon */}
  <div className="w-16 md:w-20 lg:w-32 flex justify-center">
    <img src={HtmlIcon} alt="html" className="w-full h-auto object-contain" />
  </div>

  {/* Css Icon */}
  <div className="w-16 md:w-20 lg:w-32 flex justify-center">
    <img src={CssIcon} alt="css" className="w-full h-auto object-contain" />
  </div>

  {/* Nodejs Icon */}
  <div className="w-16 md:w-20 lg:w-32 flex justify-center">
    <img src={NodejsIcon} alt="nodejs" className="w-full h-auto object-contain" />
  </div>

  {/* Github Icon */}
  <div className="w-16 md:w-20 lg:w-32 flex justify-center">
    <img src={GithubIcon} alt="github" className="w-full h-auto object-contain" />
  </div>
</div>
    </section>
  );
};

export default PersonalSkills;