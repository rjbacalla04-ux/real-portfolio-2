function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-screen flex flex-col lg:flex-row bg-white-100 relative overflow-hidden">
      <div className="flex-1 px-6 py-16 lg:px-12 lg:py-35 z-10">
        <h1 className="text-6xl md:text-8xl lg:text-[190px] font-bold text-gray-500 tracking-[-0.1em] font-aileron leading-[0.8] lg:leading-[0.75]">
          <span className="block">Project</span>
          <span className="block">Portfolio</span>
        </h1>

          <p className="font-aileron text-base md:text-[17px] mt-6 font-poppins max-w-xl text-gray-800">
            Projects that reflect my learning journey and continuous growth as a web developer
          </p>

        </div>

        
    </section>
  );
}

export default PortfolioSection;