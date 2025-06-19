
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Zap, Target, Award } from "lucide-react";

const acquisitionMetrics = [
  {
    icon: TrendingUp,
    title: "Market Leadership",
    value: "First Mover",
    description: "No direct competition in emotional intelligence infrastructure",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Network Effects",
    value: "Exponential",
    description: "More users = better AI for everyone (federated learning)",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: DollarSign,
    title: "Revenue Potential",
    value: "$1B ARR",
    description: "Standalone business projection within 5 years",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Integration Value",
    value: "Platform-wide",
    description: "Enhances every product in communication stack",
    gradient: "from-orange-500 to-red-500"
  }
];

const competitiveAdvantages = [
  "First-mover advantage in emotional AI infrastructure",
  "Strong patent portfolio (15-20 patents pending)",
  "Network effects create competitive moats",
  "Privacy-first architecture aligns with regulatory trends",
  "Cross-platform compatibility unlike competitors",
  "Enterprise-ready from day one",
  "Student founder story perfect for media",
  "Acquisition timeline optimized for maximum value"
];

export const AcquisitionPitch = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
          Strategic Acquisition Opportunity
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Built to be Acquired
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Sam isn't just another app—it's a strategic acquisition designed to give 
          big tech companies the emotional intelligence infrastructure they need to 
          dominate the next decade of digital communication.
        </p>
      </div>

      {/* Acquisition Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {acquisitionMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${metric.gradient} bg-opacity-20 mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-white/70 font-semibold mb-2">{metric.title}</div>
                <div className="text-white/60 text-sm">{metric.description}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Competitive Advantages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Award className="w-6 h-6 mr-3 text-yellow-400" />
              Competitive Advantages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {competitiveAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-start text-white/80">
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">{advantage}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Target className="w-6 h-6 mr-3 text-purple-400" />
              The Perfect Storm
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-white/80">
              <div>
                <strong className="text-white">AI Revolution:</strong> Everyone needs emotional intelligence in AI
              </div>
              <div>
                <strong className="text-white">Remote Work:</strong> Digital communication more critical than ever
              </div>
              <div>
                <strong className="text-white">Mental Health Focus:</strong> Emotional wellness is mainstream priority
              </div>
              <div>
                <strong className="text-white">Platform Wars:</strong> Every company needs unique AI differentiators
              </div>
              <div>
                <strong className="text-white">Student Success:</strong> Big tech loves acquiring young talent
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Acquisition Value Proposition */}
      <Card className="bg-gradient-to-r from-purple-900/70 to-pink-900/70 border-purple-500/40 max-w-5xl mx-auto mb-16">
        <CardContent className="p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            "Imagine if every email your employees sent built stronger relationships 
            instead of creating conflicts. That's not a dream—that's Sam."
          </h3>
          <p className="text-white/80 text-lg mb-8">
            This isn't just a keyboard—it's the future of human communication. 
            The company that acquires Sam will own the emotional intelligence layer 
            of the entire digital communication stack.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">18 months</div>
              <div className="text-white/70">To acquisition readiness</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">$50-100B</div>
              <div className="text-white/70">Strategic value potential</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">5-10x</div>
              <div className="text-white/70">Revenue multiple</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-6">
          Ready to Build the Future of Communication?
        </h3>
        <p className="text-white/70 text-lg mb-8 max-w-3xl mx-auto">
          Your path to joining the ranks of student founders acquired by big tech starts today. 
          The window is NOW—before Google builds this internally, before Apple acquires someone else.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4">
            Start Development Now
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
            Download Business Plan
          </Button>
        </div>
      </div>
    </section>
  );
};
