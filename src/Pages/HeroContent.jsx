import React from 'react';
import Logo from '../components/Logo';// Siguraduhin na tama ang path
import TextType from '../components/Animation/TextType/TextType';
import Lanyard from '../components/Animation/Lanyard/Lanyard';


const HeroContent = () => {
    return (
        <section className="relative w-full min-h-[100svh] flex items-center bg-white overflow-hidden z-10 px-6 md:px-12 lg:px-20">
            {/* 3D Background Element */}
            <div className="hidden lg:block">
                <Lanyard position={[0, 0, 10]}/>
            </div>  
            <div className="w-full max-w-7xl mx-auto flex items-center">
                
                {/* LEFT SIDE CONTENT */}
                <div className="relative z-20 w-full lg:w-auto flex flex-col items-center lg:items-start gap-y-4 lg:pl-[27%]">
                    
                    <h1 className="font-poppins text-[#02373A] tracking-tight
                        text-4xl sm:text-5xl md:text-6xl 
                        lg:text-[clamp(2.5rem,3.2vw,3.5rem)]
                        leading-tight lg:leading-[1.2]
                        text-center lg:text-left">

                        <div className="min-h-[1.2em] flex items-center justify-center lg:justify-start">
                            <TextType 
                                text={["I'm a Web Developer", "Make great ideas real"]}
                                typingSpeed={75}
                                pauseDuration={5000}
                                showCursor
                                cursorCharacter="_"
                                deletingSpeed={50}
                            />
                        </div>

                        <span className="block mt-2 font-bold">RJ L. Bacalla</span>
                    </h1>
                    
                    <p className="mt-2 font-poppins text-slate-600 leading-relaxed max-w-md
                        text-sm sm:text-base md:text-[clamp(1rem,1.1vw,1.125rem)]
                        text-center lg:text-left">
                        I am eager to contribute, learn from a team, and create meaningful digital solutions.
                    </p>

                    <div className="w-full flex justify-center lg:justify-start">
                        <button
                            aria-label="Learn more about RJ Bacalla"
                            className="mt-6 px-8 py-3 bg-[#e93f00] text-white font-semibold rounded-full 
                            hover:bg-[#c73600] transition-all duration-300 shadow-lg hover:shadow-[#e93f00]/30 
                            uppercase tracking-wider w-full sm:w-fit text-sm md:text-base"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE LOGO (Simplified Positioning) */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow">
                    <div className="absolute -bottom-20 -right-20 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-[22%] w-full lg:w-[1100px] opacity-50 lg:opacity-80 z-0 pointer-events-none">
                        <Logo />
                    </div>
                    
                    <div className="absolute bottom-0 left-[60%] z-0 
                                    w-[80%] lg:w-[clamp(600px,50vw,900px)] 
                                    -translate-x-1/4 translate-y-1/4 
                                    opacity-20 lg:opacity-40 
                                    pointer-events-none select-none">
                        <Logo />
                    </div>

                </div>

                

                
            </div>
        </section>
    );
};

export default HeroContent;