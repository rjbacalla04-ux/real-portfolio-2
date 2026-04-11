import React from 'react';
import Logo from '../components/Logo';
import TextType from '../components/Animation/TextType/TextType';

const HeroContent = () => {
    return (
        /* 1. Ginamit ang 'relative' para sumama sa scroll.
           2. 'min-h-screen' para sakop ang buong screen sa start.
           3. 'z-10' para sigurado tayong nasa tamang layer.
        */
        <section className="relative w-full min-h-screen flex items-center justify-center lg:justify-between px-6 md:px-20 overflow-hidden bg-white z-10">
            
            {/* LEFT SIDE: Hero Content */}
            <div className="flex-1 z-20 
                /* Binago: Responsive Margin: Gumagalaw depende sa screen size */
                lg:ml-[8vw] 
                /* Binago: Nagdagdag ng max-w para hindi 'sumabog' ang text sa sobrang laking monitor at hindi 'bumaba' sa maliliit */
                max-w-[1400px] 
                flex flex-col items-center lg:items-start text-center lg:text-left">
                
                {/* FLUID TYPOGRAPHY: 
                   - text-4xl (Mobile)
                   - md:text-6xl (Tablet)
                   - clamp (Desktop) -> mag-aadjust sa monitor nang kusa.
                */}
                <h1 className="font-poppins text-[#02373A] tracking-tight max-w-[1000px]
                            text-4xl md:text-6xl 
                            lg:text-[clamp(3rem,4.5vw,4rem)]
                            /* Pinakadikit na line-height */
                            leading-none md:leading-tight lg:leading-[1.5]">
        
                    {/* Binabaan ang min-h para hindi 'itulak' pababa yung nasa ilalim */}
                    <div className="min-h-[0.9em] flex items-center justify-center lg:justify-start">
                        <TextType 
                            text={["I'm a Web Developer", "Turning ideas into reality"]}
                            typingSpeed={75}
                            pauseDuration={5000}
                            showCursor
                            cursorCharacter="_"
                            deletingSpeed={50}
                        />
                    </div>

                        {/* Tinanggal ang <br /> dahil kumakain ito ng space */}
                        
                        {/* Gumamit ng negative margin sa desktop (-mt-4) para hilahin pataas */}
                        <span className="block mt-1 lg:-mt-4 font-bold">
                            RJ L. Bacalla
                        </span>
                </h1>
                
                {/* Responsive Paragraph: text-sm sa mobile, hindi lalampas sa text-lg sa desktop */}
                <p className="mt-8 font-poppins text-slate-600 leading-relaxed max-w-lg
                    text-sm sm:text-base md:text-[clamp(1rem,1.1vw,1.125rem)]">
                    I am eager to contribute, learn from a team, and create meaningful 
                    digital solutions. This portfolio showcases my work, progress, and 
                    commitment to growth.
                </p>

                {/* Button: w-full sa mobile but max-w-xs, auto width sa desktop */}
                <button className="
                    mt-10 px-10 py-3 bg-[#e93f00] text-white font-semibold rounded-full 
                    hover:bg-[#c73600] transition-all shadow-lg hover:shadow-[#e93f00]/30 
                    uppercase tracking-wider w-full sm:w-auto
                    text-sm lg:text-base
                ">
                    Learn More
                </button>
            </div>

            {/* Logo Component: Siguraduhing ito ay absolute sa loob ng section */}
            <Logo />
            
        </section>
    );
};

export default HeroContent;