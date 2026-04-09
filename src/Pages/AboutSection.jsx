import ReactIcon from '../assets/photos/react.png';
import HtmlIcon from '../assets/photos/html.png';
import CssIcon from '../assets/photos/css-3.png';
import GithubIcon from '../assets/photos/github.png';
import NodejsIcon from '../assets/photos/nodejs.png';
import ScrollFloat from '../components/Animation/ScrollFloat';

const PersonalSkills = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex bg-gray-100 relative"
    >
      {/* LEFT SIDE */}
      <div className="flex-1 px-12 py-35">
        <h1 className="text-[190px] font-bold text-gray-500 tracking-[-0.1em] font-aileron leading-[0.75]">
          <span className="block">My</span>
          <span className="block">Personal Skills</span>
        </h1>



        <p className="font-aileron text-[17px] mt-6 font-poppins max-w-xl text-gray-800">
          I started my journey in tech as an IT Assistant, where I developed an
          interest in web development. Over time, I learned the fundamentals of
          HTML, CSS, and JavaScript, and I am now focusing on building projects
          using React.
        </p>

        <div className="font-aileron mt-6 text-gray-800">
          <p className="font-semibold">Strengths:</p>
          <p>Problem-solving mindset</p>
          <p>Fast learner</p>
          <p>Attention to detail</p>
        </div>

        <p className="font-aileron mt-6 text-gray-800">
          I enjoy turning ideas into functional applications and continuously
          improving my skills.
        </p>

        <button className="mt-8 bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700">
          View Projects
        </button>
      </div>

      {/* RIGHT ORANGE BAR */}
      <div className="absolute right-[100px] top-0 w-[250px] h-full bg-orange-600 flex flex-col items-center py-10 gap-6">
        <img src={HtmlIcon} alt="html" className="w-50" />
        <img src={CssIcon} alt="css" className=" w-50" />
        <img src={NodejsIcon} alt="nodejs" className=" w-50" />
        <img src={GithubIcon} alt="github" className=" w-50" />
      </div>
    </section>
  );
};

export default PersonalSkills;