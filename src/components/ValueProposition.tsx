
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Users, Heart, TrendingUp } from "lucide-react";

const valueProps = [
  {
    icon: Building2,
    title: "For Google",
    value: "$50-100B",
    description: "Enhance every Google product with emotional intelligence",
    benefits: [
      "Gmail & Chat transformation",
      "Android OS integration",
      "Google Workspace productivity boost",
      "Assistant emotional understanding"
    ],
    gradient: "from-blue-600 to-blue-400"
  },
  {
    icon: Users,
    title: "For Apple",
    value: "$40-80B",
    description: "First emotionally intelligent keyboard on iOS ecosystem",
    benefits: [
      "iPhone differentiation",
      "Siri emotional enhancement",
      "Business Chat revolution",
      "Privacy-first AI alignment"
    ],
    gradient: "from-gray-600 to-gray-400"
  },
  {
    icon: Heart,
    title: "For Meta",
    value: "$30-60B",
    description: "Transform messaging across WhatsApp, Instagram, Facebook",
    benefits: [
      "WhatsApp emotional intelligence",
      "Instagram DM optimization",
      "VR/AR communication prep",
      "Toxicity reduction"
    ],
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: TrendingUp,
    title: "For Microsoft",
    value: "$35-70B",
    description: "Revolutionary workplace communication platform",
    benefits: [
      "Teams transformation",
      "Outlook email enhancement",
      "LinkedIn professional optimization",
      "Enterprise productivity gains"
    ],
    gradient: "from-green-600 to-blue-600"
  }
];

export const ValueProposition = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-500/30">
          Acquisition Value Analysis
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Strategic Value for Big Tech
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Sam isn't just a product—it's the missing piece that every major tech company needs 
          to complete their communication ecosystem. Here's why each giant will want to acquire us.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {valueProps.map((prop, index) => {
          const IconComponent = prop.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${prop.gradient} bg-opacity-20`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <Badge className={`bg-gradient-to-r ${prop.gradient} text-white border-none text-lg px-3 py-1`}>
                    {prop.value}
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                  {prop.title}
                </CardTitle>
                <p className="text-white/70 text-lg">{prop.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {prop.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-white/80">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Market Opportunity */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 text-center">
          <CardContent className="p-8">
            <div className="text-4xl font-bold text-purple-400 mb-4">$200B</div>
            <div className="text-white/70">Global Communication Software Market</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-center">
          <CardContent className="p-8">
            <div className="text-4xl font-bold text-blue-400 mb-4">First</div>
            <div className="text-white/70">Emotional Intelligence Infrastructure</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30 text-center">
          <CardContent className="p-8">
            <div className="text-4xl font-bold text-green-400 mb-4">5-10x</div>
            <div className="text-white/70">Revenue Multiple Potential</div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              The Window is NOW
            </h3>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Before Google builds this internally, before Apple acquires someone else, 
              before the next unicorn emerges. This is your opportunity to join the ranks 
              of student founders acquired by big tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Schedule Acquisition Discussion
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Download Technical Specifications
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
