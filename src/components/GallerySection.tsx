
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Using placeholder images with descriptions for the gallery
  const galleryImages = [
    {
      src: "/gallary1.jpg?w=500&h=400&fit=crop&crop=center",
      alt: "Happy child enjoying a gentle facial treatment",
      caption: "Gentle skincare moments"
    },
    {
      src: "/gallary2.jpg?w=500&h=400&fit=crop&crop=center", 
      alt: "Adorable kitten representing our gentle approach",
      caption: "As gentle as our furry friends"
    },
    {
      src: "/gallary3.jpg?w=500&h=400&fit=crop&crop=center",
      alt: "Cozy spa environment",
      caption: "Our warm, welcoming space"
    },
    {
      src: "/gallary4.jpg?w=500&h=400&fit=crop&crop=center",
      alt: "Comfortable spa interior",
      caption: "Designed for little comfort"
    },
    {
      src: "/gallary5.jpg?w=500&h=400&fit=crop&crop=center",
      alt: "Peaceful nature scene representing tranquility",
      caption: "Creating peaceful moments"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-mint-50 via-white to-lavender-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Magical
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-mint-600"> Moments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Peek into our enchanted world where every smile tells a story of joy, comfort, and magical spa experiences.
            </p>
          </div>

          {/* Main Gallery Carousel */}
          <div className="relative mb-12">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={galleryImages[currentImage].src}
                alt={galleryImages[currentImage].alt}
                className="w-full h-full object-cover transition-all duration-500"
              />
              
              {/* Overlay with caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <div className="flex items-center justify-center">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-white text-lg font-medium text-center">
                  {galleryImages[currentImage].caption}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white hover-lift transition-all duration-300"
            >
              <ChevronLeft className="text-lavender-600" size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white hover-lift transition-all duration-300"
            >
              <ChevronRight className="text-lavender-600" size={24} />
            </button>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`aspect-square overflow-hidden rounded-xl transition-all duration-300 ${
                  index === currentImage
                    ? 'ring-4 ring-lavender-400 scale-105'
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Gallery Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-lavender-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Happy Memories</h3>
              <p className="text-gray-600 text-sm">Every photo captures a moment of pure joy and comfort in our magical space.</p>
            </div>

            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-mint-400 to-mint-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Safe Environment</h3>
              <p className="text-gray-600 text-sm">See how we've created the perfect child-friendly spa environment with care and attention.</p>
            </div>

            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-peach-400 to-peach-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Gentle Care</h3>
              <p className="text-gray-600 text-sm">Witness the loving attention and gentle treatments that make every visit special.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
