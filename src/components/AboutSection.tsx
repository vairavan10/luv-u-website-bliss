import { Baby, Shield, Heart, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-lavender-50 to-mint-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Little
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-mint-600">
                {" "}
                World of Wonder
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At LUV U – Kids Spa, we believe every child is special. We give
              lovely care and soft pampering to make them feel happy and loved.
              Our kids' spa creates sweet memories with full safety and comfort
              for your little one.{" "}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="glass-effect rounded-3xl p-8">
                <h3 className="text-2xl font-semibold text-lavender-700 mb-4">
                  Our Heartwarming Story
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  LUV U Kids Spa was born from a beautiful dream — to create a
                  safe, joyful, and loving space where little ones can be
                  pampered, feel truly special, and shine with happiness.
                  <br />
                  <br />
                  It all began in 2016, when our founder,{" "}
                  <strong>Ramayee M</strong> — a caring and passionate woman —
                  started <strong>LUV U Women World</strong>, a space created
                  with அன்பும் பாசமும் just for women. With her gentle nature
                  and dedication, she built a place filled with trust, warmth,
                  and சந்தோஷம் that continues even today.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Now, that same love has grown stronger — and it’s just for the
                  குட்டி பசங்க too!
                  <br />
                  <br />
                  With <strong>LUV U Kids Spa</strong>, Ramayee brings her அம்மா
                  பாசம் to every child, treating each little one not just as a
                  guest, but like her own. Every visit feels like a magical hug
                  — filled with smiles, safety, laughter, and அன்பு.
                  <br />
                  <br />
                  Because at <strong>LUV U</strong>, we truly believe:
                  <br />
                  <span className="italic text-rose-500">
                    “ஒவ்வொரு குழந்தையும் ஒரு நட்சத்திரம் போல பளிச்சென்று
                    விலங்கணும்!”
                  </span>{" "}
                  🌟
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-lavender-400 to-lavender-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Child-Centered Care
                </h4>
                <p className="text-sm text-gray-600">
                  Every service designed specifically for children's comfort and
                  joy
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-mint-400 to-mint-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Safety First
                </h4>
                <p className="text-sm text-gray-600">
                  Trained professionals who understand kids – using only gentle,
                  natural care
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-peach-400 to-peach-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Made with Love
                </h4>
                <p className="text-sm text-gray-600">
                  Every moment crafted with genuine care and attention
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-skyblue-400 to-skyblue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Magical Experience
                </h4>
                <p className="text-sm text-gray-600">
                  Creating unforgettable memories in our enchanted space, where
                  pampering meets play
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
