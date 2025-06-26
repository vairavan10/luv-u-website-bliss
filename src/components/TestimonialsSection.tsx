
import { useState } from "react";
import { Quote, Star, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Tamil Selvi",
      role: "Mother of kavitha, 6",
      rating: 5,
      text: "ennaku LUV U kku varathu romba pidikkum! Inga staff romba gentle-aum caring-aavum irukkanga, and enna epovume periya smile-oda than Welcome pannuvanga. Idhu enga rendu perukkum oru special-aana bonding set aayiduchu.",
      highlight: "The staff is so gentle and caring"
    },
    {
      name: "Ragavi",
      role: "Mother of preethi, 8",
      rating: 5,
      text: "I was nervous about taking my kid to a spa, but the staff made both of us feel so comfortable. They explained everything to my kid in the sweetest way, and she felt like a real princess!",
      highlight: "She felt like a real princess"
    },
    {
      name: "Gowri",
      role: "Mother of keerthy, 7",
      rating: 5,
      text: "We booked the birthday Make Up package for my girl, and it was absolutely magical! She Loved the way they care, and the photos are precious memories we'll treasure forever.",
      highlight: "Absolutely magical makeup"
    },
    {
      name: "Subu lakshmi",
      role: "Mother of durga, 5",
      rating: 5,
      text: "The natural products they use are perfect for her sensitive skin, and she always feels so pampered and loved.",
      highlight: "Perfect for sensitive skin"
    },
    {
      name: "Meenakshi",
      role: "Mother of Sindu, 8",
      rating: 5,
      text: "As a working mom, I love that I can give sindu this special experience. The atmosphere is so calming and beautiful, and sindu always talks about her 'spa day' for weeks afterward!",
      highlight: "Talks about her spa day for weeks"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Words from
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-mint-600"> Loving Parents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The joy on our little guests' faces and the peace of mind for parents is what makes our hearts full every day.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="mb-16">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-lavender-50 to-mint-50 overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center">
                  <Quote className="text-lavender-400 mx-auto mb-6" size={48} />
                  
                  <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={24} />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-peach-400 to-peach-500 rounded-full flex items-center justify-center">
                      <Heart className="text-white" size={24} />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-800 text-lg">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-3 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-lavender-500 scale-125'
                    : 'bg-gray-300 hover:bg-lavender-300'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover-lift ${
                  index === currentTestimonial
                    ? 'ring-2 ring-lavender-400 shadow-lg'
                    : 'hover:shadow-lg'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <Quote className="text-lavender-300" size={20} />
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {testimonial.text}
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-800 text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-lavender-600">100+</div>
              <p className="text-gray-600 text-sm">Happy Little Guests</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-mint-600">100%</div>
              <p className="text-gray-600 text-sm">Parent Satisfaction</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-peach-600">8+</div>
              <p className="text-gray-600 text-sm">Years of Magic</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-skyblue-600">100%</div>
              <p className="text-gray-600 text-sm">Natural Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
