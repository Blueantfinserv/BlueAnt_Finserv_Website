import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const galleryImages = [
  { src: "workshop-1.jpg", category: "Workshops", title: "Financial Summit 2024" },
  { src: "workshop-4.jpg", category: "Workshops", title: "Wealth Management Session" },
  { src: "workshop-6.jpg", category: "Events", title: "Corporate Meetup" },
  { src: "workshop-7.jpg", category: "Workshops", title: "Investment Planning" },
  { src: "workshop-11.jpg", category: "Office", title: "Blueant Headquarters" },
  { src: "workshop-18.jpg", category: "Events", title: "Annual Celebration" },
  { src: "workshop-19.jpg", category: "Workshops", title: "Client Advisory" },
  { src: "workshop-8.jpg", category: "Office", title: "Strategy Room" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const categories = ["All", "Workshops", "Events", "Office"];
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <section className="section bg-slate-50 overflow-hidden">
      <div className="container">
        
        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-12" data-aos="fade-up">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-1 bg-[#00afef] rounded-full"></span>
              <span className="text-[#00afef] font-black uppercase tracking-widest text-xs">Our Moments</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0f172a] leading-tight">
              Visualizing Our <span className="text-[#00afef]">Growth</span> Journey.
            </h2>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all border ${
                  filter === cat 
                  ? "bg-[#0f172a] text-white border-[#0f172a] shadow-md" 
                  : "bg-white text-slate-600 hover:bg-slate-50 border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              onClick={() => setSelectedImage(img)}
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img 
                  src={`${import.meta.env.BASE_URL}${img.src}`} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col bg-white">
                <span className="text-[#00afef] text-[10px] font-black uppercase tracking-widest mb-1.5 block">{img.category}</span>
                <h3 className="text-[#0f172a] text-lg font-bold leading-snug">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[1000] bg-[#0f172a]/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#ed3237] transition-colors border border-white/20">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="relative max-w-6xl w-full aspect-video rounded-[60px] overflow-hidden border-[12px] border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={`${import.meta.env.BASE_URL}${selectedImage.src}`} 
              alt={selectedImage.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-10 left-10 right-10 p-10 bg-white/10 backdrop-blur-md rounded-[40px] border border-white/20">
              <span className="text-[#00afef] text-xs font-black uppercase tracking-widest mb-2 block">{selectedImage.category}</span>
              <h4 className="text-white text-4xl font-black tracking-tight">{selectedImage.title}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
