import React from 'react';
import Logo from './Logo';
 import TextType from './Animation/TextType/TextType';

const HeroContent = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-between px-10 md:px-20 overflow-hidden">
            {/* LEFT SIDE: Hero Content */}
        <div className="flex-1 z-10 ml-[150px]">
            <h1 className="font-aileron text-[70px] text-[#02373A] tracking-wider text-slate-900 text-bold leading-tight max-w-[1000px]">
               

                    <TextType 
                    text={["I'm a Web Developer", "Turning ideas into reality"]}
                    typingSpeed={75}
                    pauseDuration={5000}
                    showCursor
                    cursorCharacter="_"
                    texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
                    deletingSpeed={50}
                    variableSpeedEnabled={false}
                    variableSpeedMin={60}
                    variableSpeedMax={120}
                    cursorBlinkDuration={0.5}
                    /><br />
                RJ L. Bacalla
            </h1>
            
            <p className="mt-6 font-poppins text-lg text-slate-600 leading-relaxed max-w-lg">
                I am eager to contribute, learn from a team, and create meaningful 
                digital solutions. This portfolio showcases my work, progress, and 
                commitment to growth.
            </p>

            <button className="mt-8 px-8 py-3 bg-[#e93f00] text-white font-semibold rounded-full hover:bg-[#c73600] transition-all shadow-lg hover:shadow-[#e93f00]/30 uppercase tracking-wider">
                Learn More
            </button>
            </div>

    
            
        </section>
    );
};


export default HeroContent;