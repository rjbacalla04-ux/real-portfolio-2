import React from 'react';
import Logo from '../components/Logo';
import TextType from '../components/Animation/TextType/TextType';

const HeroContent = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-between px-6 md:px-20 overflow-hidden">
            
            {/* LEFT SIDE: Hero Content */}
            {/* Binago: ml-0 sa mobile, ml-[150px] sa large screens. Text-center sa mobile, left sa desktop */}
            <div className="flex-1 z-10 lg:ml-[150px] flex flex-col items-center lg:items-start text-center lg:text-left">
                
                {/* Binago: text-4xl sa mobile hanggang text-[70px] sa desktop */}
                <h1 className="font-poppins text-4xl md:text-6xl lg:text-[70px] text-[#02373A] tracking-wider leading-tight max-w-[1000px]">
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
                    />
                    <br className="hidden lg:block" /> 
                    <span className="block mt-2 font-bold">RJ L. Bacalla</span>
                </h1>
                
                <p className="mt-6 font-poppins text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
                    I am eager to contribute, learn from a team, and create meaningful 
                    digital solutions. This portfolio showcases my work, progress, and 
                    commitment to growth.
                </p>

                {/* Binago: w-full sa mobile but max-w-xs, auto width sa desktop */}
                <button className="mt-8 px-8 py-3 bg-[#e93f00] text-white font-semibold rounded-full hover:bg-[#c73600] transition-all shadow-lg hover:shadow-[#e93f00]/30 uppercase tracking-wider w-full sm:w-auto">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default HeroContent;