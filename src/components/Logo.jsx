import frontImage from "../assets/frontImage.png";

function Logo() {
  return (
    <div className="
      /* --- MOBILE STATE (Default) --- */
      absolute top-1/2 -translate-y-1/2 
      left-1/2 -translate-x-70        /* Naka-center sa mobile */
      w-[750px] h-[750px]              /* Maliit na size sa mobile */
      opacity-20                       /* Mababang opacity sa mobile */
      
      /* --- DESKTOP STATE (Large Screens) --- */
      lg:left-auto lg:translate-x-0    /* Alisin ang center alignment */
      lg:right-[-15%]                  /* I-pwesto sa gilid */
      lg:w-[1000px] lg:h-[1000px]        /* Dambuhalang size sa desktop */
      lg:opacity-100                   /* Full opacity sa desktop */

      /* COMMON SETTINGS */
      pointer-events-none z-0 
      transition-all duration-700 ease-in-out
    ">
      
      {/* Background SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 444.729"
        className="
            absolute top-1/2 -translate-y-1/2 
            /* 1. POSITIONING: Center sa mobile, balik sa gilid sa desktop */
            left-1/2 -translate-x-1/2 md:left-[-2%] md:translate-x-0
            
            /* 2. SIZE: Maliit sa mobile, dambuhala sa desktop */
            w-[850px] h-[850px]       /* Default (Mobile) */
            md:w-[600px] md:h-[600px] /* Tablet */
            lg:w-[950px] lg:h-[950px] /* Desktop */
            
            /* 3. ANIMATION */
            animate-spin [animation-duration:40s]
        "
        >
  <path
    fill="#e93f00"
    d="M380.808 444.729H130.396a4.813 4.813 0 01-4.379-2.813L.638 224.752a4.79 4.79 0 01.04-4.844L126.241 2.425C127.29.6 128.956 0 130.983 0h250.621a4.814 4.814 0 014.379 2.813l125.379 217.164a4.79 4.79 0 01-.04 4.845L385.759 442.305c-1.121 1.95-2.83 2.424-4.951 2.424z"
  />
</svg>
      
      {/* Profile Image */}
      <img
        src={frontImage}
        alt="Front Profile"
        className="absolute top-[48%] left-1/3 -translate-x-1/2 -translate-y-1/2 h-[90%] object-contain z-20"
      />

      {/* Lines */}
      <div className="absolute bottom-[6.8%] left-1/3 -translate-x-1/2 w-[65%] h-[2px] lg:h-[4px] bg-black rounded-full z-10" />
      <div className="absolute right-1/3 top-[27.9%] -translate-x-8 h-[65%] w-[2px] lg:w-[4px] bg-black rounded-full z-10" />
    </div>
  );
}

export default Logo;