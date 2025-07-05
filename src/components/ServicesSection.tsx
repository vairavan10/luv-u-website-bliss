
// import { Palette, Scissors, Sparkles, Crown, Camera, Gift } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// const ServicesSection = () => {
//  const services = [
//   {
//     icon: Crown,
//     title: "Princess / Prince Makeover",
//     description: "Full royal treatment with costume touches, styling, and sparkle – making them feel like real royalty!",
//     color: "from-lavender-400 to-pink-400"
//   },
//   {
//     icon: Palette,
//     title: "Nail Art Magic",
//     description: "Non-toxic, colorful nail designs to let your little one's personality shine with every finger wave!",
//     color: "from-peach-400 to-pink-500"
//   },
//   {
//     icon: Scissors,
//     title: "Fun Hair Styling",
//     description: "Gentle styling with cute braids, clips, and sparkles for a picture-perfect look.",
//     color: "from-mint-400 to-mint-500"
//   },
//   {
//     icon: Sparkles,
//     title: "Ear Boring",
//     description: "Safe, hygienic ear piercing service done by experts with utmost care and comfort.",
//     color: "from-yellow-400 to-peach-400"
//   },
//   {
//     icon: Sparkles,
//     title: "Mini Gentle Facials",
//     description: "Mild, child-safe facial treatments that refresh and brighten soft skin – all with gentle hands.",
//     color: "from-skyblue-400 to-lavender-400"
//   },
//   {
//     icon: Sparkles,
//     title: "Pedicure & Manicure",
//     description: "Soothing hand and foot care with safe products, adorable designs, and lots of giggles!",
//     color: "from-mint-500 to-skyblue-500"
//   },
//   {
//     icon: Sparkles,
//     title: "Head Massage & Oil Massage",
//     description: "Relaxing massage using mild oils, perfect for calming and refreshing your little star.",
//     color: "from-yellow-400 to-orange-400"
//   },
//   {
//     icon: Gift,
//     title: "Birthday Party Package",
//     description: "Make it a magical birthday! Spa fun, makeovers, and joy-packed moments with friends.",
//     color: "from-pink-500 to-yellow-400"
//   }
// ];


//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16 animate-fade-in-up">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//               Our Magical
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-mint-600"> Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Each service is thoughtfully designed to be gentle, fun, and absolutely magical for your little one.
//             </p>
//           </div>

//           {/* Services Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => {
//               const IconComponent = service.icon;
//               return (
//                 <Card key={index} className="group hover-lift overflow-hidden border-0 shadow-lg">
//                   <CardContent className="p-0">
//                     {/* Service Image/Icon Area */}
//                     <div className={`bg-gradient-to-br ${service.color} p-8 text-center`}>
//                       <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <IconComponent className="text-white" size={32} />
//                       </div>
//                       <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
//                     </div>

//                     {/* Service Details */}
//                     <div className="p-6">
//                       <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                      
//                       {/* Features */}
//                       <div className="space-y-2 mb-6">
//                         <div className="flex items-center text-sm text-gray-500">
//                           <div className="w-2 h-2 bg-mint-400 rounded-full mr-3"></div>
//                           <span>All-natural, child-safe products</span>
//                         </div>
//                         <div className="flex items-center text-sm text-gray-500">
//                           <div className="w-2 h-2 bg-lavender-400 rounded-full mr-3"></div>
//                           <span>Gentle, caring professionals</span>
//                         </div>
//                         <div className="flex items-center text-sm text-gray-500">
//                           <div className="w-2 h-2 bg-peach-400 rounded-full mr-3"></div>
//                           <span>Fun, magical experience</span>
//                         </div>
//                       </div>

//                       <button className="w-full bg-gradient-to-r from-lavender-500 to-mint-500 text-white py-3 rounded-xl font-medium hover:from-lavender-600 hover:to-mint-600 transition-all duration-300 group-hover:shadow-lg">
//                         Book This Service
//                       </button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>

//           {/* Call to Action */}
//           <div className="text-center mt-16">
//             <div className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Not sure which service to choose?
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Our caring team is here to help you select the perfect experience for your little one. Every child is unique, and we're here to make their visit absolutely magical.
//               </p>
//               <button className="bg-gradient-to-r from-peach-500 to-skyblue-500 text-white px-8 py-3 rounded-full font-medium hover:from-peach-600 hover:to-skyblue-600 transition-all duration-300 hover-lift">
//                 Chat with Our Team
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;



import { Palette, Scissors, Sparkles, Crown, Gift, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Crown,
      title: "Princess / Prince Makeover",
      description: "A magical royal look with light makeup, cute costumes, tiaras, and sparkle styling.",
      color: "from-lavender-400 to-pink-400"
    },
    {
      icon: Palette,
      title: "Nail Art Magic",
      description: "Colorful, non-toxic nail designs with fun patterns to match every little mood.",
      color: "from-peach-400 to-pink-500"
    },
    {
      icon: Scissors,
      title: "Fun Hair Styling",
      description: "Playful hairstyles, gentle combing, tiny braids & clips – perfect for parties!",
      color: "from-mint-400 to-mint-500"
    },
    {
      icon: Sparkles,
      title: "Ear Boring",
      description: "Safe, hygienic ear piercing done with love & care. Minimal discomfort, maximum joy!",
      color: "from-yellow-400 to-peach-400"
    },
    {
      icon: Sparkles,
      title: "Mini Gentle Facials",
      description: "Soft facials using fruity, natural products that keep your baby’s skin glowing.",
      color: "from-skyblue-400 to-lavender-400"
    },
    {
      icon: Sparkles,
      title: "Pedicure & Manicure",
      description: "Tiny toes & fingers cleaned, filed, polished – fun spa moments for your cuties!",
      color: "from-mint-500 to-skyblue-500"
    },
    {
      icon: HandHeart,
      title: "Head Massage & Oil Massage",
      description: "Soothing massage with mild oils, calming both body and smile. Amma-like care!",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Gift,
      title: "Birthday Party Package",
      description: "A complete celebration setup – spa activities, royal makeovers, and more joy!",
      color: "from-pink-500 to-yellow-400"
    }
  ];
const serviceDetails = {
  "Princess / Prince Makeover": [
    "Sparkly Crowns & Tiaras 👑",
    "Royal Robes & Dress-up",
    "Light Baby Makeup (Blush & Lip balm)",
    "Mini Ramp Walk for Fun",
    "Prince Hair Touch-up & Sunglasses"
  ],
  "Nail Art Magic": [
    "Glitter Nails ✨",
    "Fruit & Flower Patterns 🍓🌸",
    "Animal Prints 🐾",
    "French Tips (Kid-style)",
    "Glow-in-the-Dark Polish"
  ],
  "Fun Hair Styling": [
    "Cute Braids & Ponytails",
    "Twist Styles with Beads",
    "Butterfly Clips & Ribbons",
    "Temporary Hair Chalk Colors",
    "Heart-Shaped Hair Buns 💖"
  ],
  "Ear Boring": [
    "Single Piercing (Gold/Stud)",
    "Starter Kit with Free Studs",
    "Aftercare Kit Instructions",
    "Fast & Gentle Process",
    "Done with Medical Precision"
  ],
  "Mini Gentle Facials": [
    "Fruit Facial (Papaya, Banana 🍌)",
    "Oatmeal & Milk Cleanse",
    "Aloe Vera Hydration",
    "Steam-Free Facial Wipes",
    "Glow Pack for Tender Skin"
  ],
  "Pedicure & Manicure": [
    "Cute Toe Nail Stickers 🦶",
    "Soak & Scrub Treatment",
    "Finger Art with Themes",
    "Safe Filing and Buffing",
    "Lollipop Lotion Massage 🍭"
  ],
  "Head Massage & Oil Massage": [
    "Mild Coconut Oil Massage",
    "Aromatic Baby Oils",
    "Shoulder & Neck Relaxing Strokes",
    "Sleepy-Time Massage (evening only)",
    "Rhythmic Amma-Style Patting"
  ],
  "Birthday Party Package": [
    "Group Spa Activities (up to 6 kids)",
    "Makeover Stations",
    "Photo Corner with Props 📸",
    "Gift Hampers & Goodies 🎁",
    "Theme Music, Balloons & Cake Setup"
  ]
};

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Magical <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-mint-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specially crafted experiences for your little stars – joyful, gentle, and full of sparkles!
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover-lift overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-br ${service.color} p-8 text-center`}>
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-mint-400 rounded-full mr-3"></div>
                          <span>All-natural & child-safe products</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-lavender-400 rounded-full mr-3"></div>
                          <span>Handled with expert care</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-peach-400 rounded-full mr-3"></div>
                          <span>Fun-filled spa vibes</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedService(service.title)}
                        className="w-full bg-gradient-to-r from-lavender-500 to-mint-500 text-white py-3 rounded-xl font-medium hover:from-lavender-600 hover:to-mint-600 transition-all duration-300 group-hover:shadow-lg"
                      >
                        View More
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Not sure which service to choose?
              </h3>
              <p className="text-gray-600 mb-6">
                Our caring team is ready to help! Tell us your baby’s style and we’ll suggest something perfect.
              </p>
              <button className="bg-gradient-to-r from-peach-500 to-skyblue-500 text-white px-8 py-3 rounded-full font-medium hover:from-peach-600 hover:to-skyblue-600 transition-all duration-300 hover-lift">
                Chat with Our Team
              </button>
            </div>
          </div>

          {/* Modal (Placeholder) */}
          {selectedService && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg relative">
                <button
                  className="absolute top-2 right-3 text-gray-400 hover:text-gray-700"
                  onClick={() => setSelectedService(null)}
                >
                  ✖
                </button>
               <h4 className="text-xl font-bold mb-4">{selectedService}</h4>
<ul className="list-disc pl-5 space-y-2 text-gray-600">
  {serviceDetails[selectedService]?.map((item, i) => (
    <li key={i}>{item}</li>
  ))}
</ul>

              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

