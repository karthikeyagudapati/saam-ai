
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Shield, Globe, Users, TrendingUp, Smartphone, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Real-Time Emotional Intelligence",
    description: "AI that reads conversation context and suggests emotional adjustments instantly",
    badge: "Revolutionary",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Globe,
    title: "Universal Cross-Platform Intelligence",
    description: "One AI brain that works across ALL apps - from email to messaging to social media",
    badge: "Patent Pending",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Dynamic Personality Engine",
    description: "Automatically adapts to different personas - professional, casual, romantic, or social",
    badge: "Industry First",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Lightbulb,
    title: "Predictive Emotional Modeling",
    description: "AI predicts how your message will be received BEFORE you send it",
    badge: "Breakthrough",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Shield,
    title: "Privacy-First Architecture",
    description: "90% processing on-device, encrypted transmission, zero data storage",
    badge: "Secure",
    gradient: "from-gray-500 to-slate-500"
  },
  {
    icon: Zap,
    title: "Sub-100ms Response Time",
    description: "Lightning-fast suggestions that feel natural and don't interrupt your flow",
    badge: "Performance",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Federated Learning System",
    description: "AI improves from all users while keeping your data completely private",
    badge: "Advanced",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Smartphone,
    title: "Enterprise Integration Ready",
    description: "Built for Fortune 500 companies with compliance, analytics, and team features",
    badge: "Enterprise",
    gradient: "from-teal-500 to-blue-500"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Features That Don't Exist Yet
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Sam introduces breakthrough capabilities that create entirely new categories 
          in communication technology. These aren't incremental improvements—they're quantum leaps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.gradient} bg-opacity-20`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <Badge className={`bg-gradient-to-r ${feature.gradient} text-white border-none`}>
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Technology Highlight */}
      <div className="mt-20 text-center">
        <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              The Technical Breakthrough
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Sam combines large language models, emotion classification engines, and cultural intelligence 
              modules into a unified system that understands not just what you're saying, but how it will 
              be received. This isn't just NLP—it's emotional artificial intelligence.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
