
import { Palette, Scissors, Sparkles, Crown, Camera, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Mini Gentle Facials",
      description: "Soft, natural cleansing treatments that make little faces glow with happiness and health.",
      price: "Starting at $25",
      duration: "20 mins",
      color: "from-lavender-400 to-lavender-500"
    },
    {
      icon: Scissors,
      title: "Fun Hair Styling",
      description: "Magical hair styling sessions with fun accessories, braids, and gentle styling for special occasions.",
      price: "Starting at $35",
      duration: "30 mins",
      color: "from-mint-400 to-mint-500"
    },
    {
      icon: Palette,
      title: "Nail Art Magic",
      description: "Safe, non-toxic nail art with adorable designs that let little personalities shine through.",
      price: "Starting at $20",
      duration: "25 mins",
      color: "from-peach-400 to-peach-500"
    },
    {
      icon: Crown,
      title: "Princess/Prince Makeover",
      description: "Complete royal treatment including gentle styling, nail art, and a special photo session.",
      price: "Starting at $75",
      duration: "60 mins",
      color: "from-skyblue-400 to-skyblue-500"
    },
    {
      icon: Camera,
      title: "Memory Photo Session",
      description: "Professional photos to capture the magical moments and glowing smiles from their spa day.",
      price: "Starting at $45",
      duration: "20 mins",
      color: "from-lavender-500 to-mint-500"
    },
    {
      icon: Gift,
      title: "Birthday Party Packages",
      description: "Special celebration packages for the ultimate birthday spa party experience with friends.",
      price: "Starting at $199",
      duration: "2 hours",
      color: "from-peach-500 to-skyblue-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Magical
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-mint-600"> Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each service is thoughtfully designed to be gentle, fun, and absolutely magical for your little one.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover-lift overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-0">
                    {/* Service Image/Icon Area */}
                    <div className={`bg-gradient-to-br ${service.color} p-8 text-center`}>
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <div className="flex justify-center space-x-4 text-white/90 text-sm">
                        <span>{service.price}</span>
                        <span>•</span>
                        <span>{service.duration}</span>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-mint-400 rounded-full mr-3"></div>
                          <span>All-natural, child-safe products</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-lavender-400 rounded-full mr-3"></div>
                          <span>Gentle, caring professionals</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-peach-400 rounded-full mr-3"></div>
                          <span>Fun, magical experience</span>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-lavender-500 to-mint-500 text-white py-3 rounded-xl font-medium hover:from-lavender-600 hover:to-mint-600 transition-all duration-300 group-hover:shadow-lg">
                        Book This Service
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
                Our caring team is here to help you select the perfect experience for your little one. Every child is unique, and we're here to make their visit absolutely magical.
              </p>
              <button className="bg-gradient-to-r from-peach-500 to-skyblue-500 text-white px-8 py-3 rounded-full font-medium hover:from-peach-600 hover:to-skyblue-600 transition-all duration-300 hover-lift">
                Chat with Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
