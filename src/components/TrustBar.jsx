import React from "react";

const logos = [
  { name: "AMFI", src: "amfi.png" },
  { name: "SEBI", src: "Sebi logo.png" },
  { name: "NSE", src: "nse.png" },
  { name: "BSE", src: "bse.png" },
  { name: "MCX", src: "mcx.png" },
];

const TrustBar = () => {
  return (
    <div className="py-20 bg-slate-50/50">
      <div className="container">
        <div className="flex flex-col items-center gap-12">
          <p className="text-slate-400 font-black text-[11px] uppercase tracking-[0.4em] text-center">
            Regulated & Certified by Top Financial Institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-16 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {logos.map((logo) => (
              <div key={logo.name} className="group grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-10 md:h-14 lg:h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
