
import frontImage from "../assets/frontImage.png";

function Logo() {
    return (

        <div className="absolute top-1/2 right-[-15%] -translate-y-1/2 w-[900px] h-[900px] pointer-events-none z-0">
            
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                shapeRendering="geometricPrecision" 
                textRendering="geometricPrecision" 
                imageRendering="optimizeQuality" 
                fillRule="evenodd" 
                clipRule="evenodd" 
                viewBox="0 0 512 444.729"
                className="absolute inset-0 w-full h-full animate-spin [animation-duration:30s]"
            >
                <path 
                    /* In-apply na natin ang #e93f00 dito */
                    fill="#e93f00" 
                    fillRule="nonzero" 
                    d="M380.808 444.729H130.396a4.813 4.813 0 01-4.379-2.813L.638 224.752a4.79 4.79 0 01.04-4.844L126.241 2.425C127.29.6 128.956 0 130.983 0h250.621a4.814 4.814 0 014.379 2.813l125.379 217.164a4.79 4.79 0 01-.04 4.845L385.759 442.305c-1.121 1.95-2.83 2.424-4.951 2.424z"
                />
            </svg>
            
            <img 
                src={frontImage} 
                alt="Front Profile" 
                /* h-[85%]: Itinaas natin nang kaunti para hindi sagad sa box */
                className="absolute top-[48%] left-145 -translate-x-1/1 -translate-y-1/2 h-[95%] object-contain z-10" 
            />

            {/* LAYER 3: The Solid Horizontal Line
                'bottom-[7.5%]' - Inaadjust nito kung gaano kataas ang line.
                'h-[4px]' - Kapal ng line.
                'bg-black' - Kulay ng line (pwede mo ring gawing #e93f00 kung gusto mo).
            */}
            <div 
                className="absolute bottom-[4.2%] left-67    -translate-x-1/2 w-[70%] h-[4px] bg-black rounded-full z-20"
            />

            <div 
                className="absolute top-[60%] left-145.5 -translate-x-1/2 -translate-y-1/2 w-[4px] h-[80%] bg-black rounded-full z-20"
            />
            
        </div>
        
    );
}

export default Logo;

/*
  EXPLANATION OF CLASSES:
  
  1. fixed: 
     Inaalis ang element sa normal document flow. Naka-stick ito sa "viewport" 
     (browser window). Kahit mag-scroll ka pababa, hindi gagalaw ang pwesto nito.
     
  2. top-1/2: 
     Inilalagay ang tuktok (top edge) ng image sa gitna (50%) ng screen vertically.
     
  3. -translate-y-1/2: 
     Dahil ang 'top-1/2' ay itinatapat lang ang "tuktok" sa gitna, kailangan nating 
     ihatak ang image paitaas ng kalahati ng sarili niyang height (50%) para ang 
     mismong "center point" ng image ang tumapat sa center ng screen.
     
  4. right-[-10%]: 
     Ito ang "Canva Cut" effect. Inilalabas natin ang 10% ng lapad ng image sa labas 
     ng kanang bahagi ng screen. Ang negative value ang dahilan kung bakit 
     mukhang "naka-putol" ang design.
     
  5. w-[700px] h-[700px]: 
     Arbitrary values para sa fixed size. Ginagamit ang square dimension 
     para mapanatili ang aspect ratio ng circle/star shape mo.
     
  6. object-contain: 
     Sinisiguro nito na ang buong SVG ay magkakasya sa loob ng 700x700 box 
     nang hindi nade-deform o napipitpit ang shape.
     
  7. pointer-events-none: 
     "Invisibility" sa mouse clicks. Kahit nakapatong ang image sa mga buttons 
     o text mo, hindi nito mahaharangan ang user. Para siyang multo—nakikita 
     pero hindi nahahawakan.
     
  8. z-0: 
     Inilalagay ang element sa pinaka-ilalim na layer para hindi nito matakpan 
     ang main content (text/nav) ng website mo.
*/