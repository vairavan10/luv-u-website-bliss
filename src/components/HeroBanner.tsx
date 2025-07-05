
import { Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section
  id="home"
className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-40"
>
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-gradient-to-br from-lavender-300 to-mint-300 rounded-full opacity-60 animate-bubble`}
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Sparkles
            key={i}
            className={`absolute text-peach-300 animate-sparkle`}
            style={{
              top: `${20 + i * 10}%`,
              right: `${10 + i * 12}%`,
              animationDelay: `${i * 0.6}s`
            }}
            size={16}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 via-mint-600 to-skyblue-600 animate-float">
            Where Tiny Smiles
            <br />
            <span className="inline-flex items-center gap-3">
              Shine Cute!
              <Heart className="text-peach-400 animate-pulse" size={48} />
            </span>
          </h1>

          {/* Subtitle */}
            {/* <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto text-center">
              <span className="whitespace-nowrap">🌸 <strong>LUV U Kids Spa</strong> – Thanjavur's First-Ever Spa for Cute Babies! 🌸</span><br />
              <br />
              Every little smile matters to us. From gentle makeovers to joyful pampering, we craft magical, safe, and unforgettable experiences just for your little stars. ✨<br />
              <br />
              <span className="text-pink-600 font-semibold">
                தஞ்சாவூரில் முதல் முறையாக<br />
                சிறிய பிள்ளைகளுக்கான ஸ்பா அனுபவம் – உங்கள் குட்டி தேவதைக்கு மட்டுமே!
              </span><br />
              <br />
              Because at <strong>The Kids World</strong>, we truly believe:<br />
              <span className="text-rose-500 italic">
                "அனைத்து குழந்தைகளும் அன்பும் கவனமும் பெறவேண்டும்!"
              </span>
            </p> */}
{/* Full-Width Hero Image */}
<div className="w-full h-72 md:h-[500px] mt-10">
  <img
    src="gallary3.jpg"
    alt="Cute baby spa"
    className="w-full h-full object-cover"
  />
</div>

{/* Subtitle Section */}
<div className="text-center px-4 max-w-5xl mx-auto mt-6 text-gray-700">
  <p className="text-xl md:text-2xl leading-relaxed">
    <span className="whitespace-nowrap">
      🌸 <strong>LUV U Kids Spa</strong> – Thanjavur's First-Ever Spa for Cute Babies! 🌸
    </span>
    <br /><br />
    Every little smile matters to us. From gentle makeovers to joyful pampering, we craft magical, safe, and unforgettable experiences just for your little stars. ✨
    <br /><br />
    <span className="text-pink-600 font-semibold">
      தஞ்சாவூரில் முதல் முறையாக<br />
      சிறிய பிள்ளைகளுக்கான ஸ்பா அனுபவம் – உங்கள் குட்டி தேவதைக்கு மட்டுமே!
    </span>
    <br /><br />
    Because at <strong>The Kids World</strong>, we truly believe:
    <br />
    <span className="text-rose-500 italic">
      "அனைத்து குழந்தைகளும் அன்பும் கவனமும் பெறவேண்டும்!"
    </span>
  </p>
</div>





          {/* Call-to-Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-10">
  <Button
    size="lg"
    className="bg-gradient-to-r from-lavender-500 to-mint-500 hover:from-lavender-600 hover:to-mint-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover-lift"
  >
    Book Your Little One's Visit
  </Button>
  <Button
    variant="outline"
    size="lg"
    className="border-2 border-peach-300 text-peach-600 hover:bg-peach-50 px-8 py-4 text-lg rounded-full hover-lift"
  >
    Explore Our Services
  </Button>
</div>


          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-mint-400 rounded-full"></div>
              <span>Safe & Gentle Treatments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-lavender-400 rounded-full"></div>
              <span>Certified Child Care Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-peach-400 rounded-full"></div>
              <span>100% Natural Products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
