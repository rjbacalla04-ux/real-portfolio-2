

function Logo() {
  return (
    <div className="
      absolute top-1/2 -translate-y-1/2 
      left-1/2 -translate-x-70 
      w-[750px] h-[750px] 
      opacity-20 
      lg:left-auto lg:translate-x-0 
      lg:right-[-15%] 
      lg:w-[1000px] lg:h-[1000px] 
      lg:opacity-100 
      pointer-events-none z-0 
      transition-all duration-700 ease-in-out
    ">
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 444.729"
        className="
            absolute top-1/2 -translate-y-1/2 
            left-1/2 -translate-x-1/2 md:left-[-2%] md:translate-x-0
            w-[850px] h-[850px] 
            md:w-[600px] md:h-[600px] 
            lg:w-[950px] lg:h-[950px] 
            animate-spin [animation-duration:40s]
        "
      >
        {/* DEFINTIONS: Dito nilalagay ang filter effects */}
        <defs>
          <filter id="hexagonShade" x="-20%" y="-20%" width="140%" height="140%">
            {/* 1. Drop Shadow (Sa labas) */}
            <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.4" />
            
            {/* 2. Inner Shade/Bevel (Para magmukhang 3D) */}
            <feSpecularLighting surfaceScale="5" specularConstant="0.8" specularExponent="20" lightingColor="#ff8552" in="SourceGraphic" result="specOut">
              <fePointLight x="256" y="-100" z="300" />
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceGraphic" operator="in" result="specOut" />
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>
        </defs>

        <path
          fill="#e93f00"
          filter="url(#hexagonShade)" /* <--- Dito kinakabit ang filter */
          d="M380.808 444.729H130.396a4.813 4.813 0 01-4.379-2.813L.638 224.752a4.79 4.79 0 01.04-4.844L126.241 2.425C127.29.6 128.956 0 130.983 0h250.621a4.814 4.814 0 014.379 2.813l125.379 217.164a4.79 4.79 0 01-.04 4.845L385.759 442.305c-1.121 1.95-2.83 2.424-4.951 2.424z"
        />
      </svg>

      
      
    </div>
  );
}

export default Logo;