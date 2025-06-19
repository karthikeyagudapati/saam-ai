
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Shield, Zap, Brain, Globe } from "lucide-react";

const techFeatures = [
  {
    icon: Brain,
    title: "AI Architecture",
    specs: [
      "Custom fine-tuned LLM for emotional understanding",
      "Emotion classification engine (12+ emotions)",
      "Context memory system with conversation history",
      "Personality adaptation layer",
      "Cultural intelligence module"
    ]
  },
  {
    icon: Zap,
    title: "Performance",
    specs: [
      "Sub-100ms response time",
      "90% on-device processing",
      "Offline mode for basic features",
      "Edge AI optimization",
      "Quantum-ready architecture"
    ]
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    specs: [
      "Zero data storage on servers",
      "End-to-end encryption",
      "Federated learning system",
      "GDPR/CCPA compliant",
      "SOC 2 Type II certification ready"
    ]
  },
  {
    icon: Globe,
    title: "Platform Integration",
    specs: [
      "Android InputMethodService",
      "iOS Keyboard Extension",
      "Web browser extension API",
      "Desktop application hooks",
      "Enterprise SaaS API"
    ]
  }
];

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    duration: "Months 1-3",
    milestones: [
      "Core keyboard functionality",
      "Basic AI integration",
      "5 core emotions",
      "1,000 beta users",
      "Privacy architecture"
    ],
    status: "In Progress"
  },
  {
    phase: "Phase 2", 
    title: "Intelligence",
    duration: "Months 4-6",
    milestones: [
      "Custom emotion models",
      "Context memory system",
      "Cross-app intelligence",
      "10,000 active users",
      "Predictive suggestions"
    ],
    status: "Planned"
  },
  {
    phase: "Phase 3",
    title: "Scale",
    duration: "Months 7-9", 
    milestones: [
      "Enterprise features",
      "Advanced analytics",
      "Multi-language support",
      "50,000 active users",
      "Platform APIs"
    ],
    status: "Planned"
  },
  {
    phase: "Phase 4",
    title: "Acquisition",
    duration: "Months 10-18",
    milestones: [
      "B2B sales program",
      "Fortune 500 pilots",
      "$10M ARR milestone",
      "Patent portfolio",
      "Strategic discussions"
    ],
    status: "Target"
  }
];

export const TechSpecs = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
          Technical Excellence
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Enterprise-Grade Architecture
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Built from the ground up with scalability, security, and performance in mind. 
          Sam's technical foundation is designed to handle billions of messages while 
          maintaining sub-100ms response times.
        </p>
      </div>

      <Tabs defaultValue="architecture" className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-sm border-white/20">
          <TabsTrigger value="architecture" className="data-[state=active]:bg-purple-600">
            Technical Architecture
          </TabsTrigger>
          <TabsTrigger value="roadmap" className="data-[state=active]:bg-purple-600">
            Development Roadmap
          </TabsTrigger>
        </TabsList>

        <TabsContent value="architecture" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <IconComponent className="w-6 h-6 mr-3 text-purple-400" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start text-white/80">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* AI Stack Diagram */}
          <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white text-center">
                <Code className="w-6 h-6 inline mr-2" />
                Sam AI Brain Architecture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
                  <div className="text-white font-semibold">Large Language Model (Custom Fine-tuned)</div>
                </div>
                <div className="text-purple-400">↓</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 text-white text-sm">
                    Emotion Classification Engine
                  </div>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 text-white text-sm">
                    Context Memory System
                  </div>
                  <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3 text-white text-sm">
                    Cultural Intelligence Module
                  </div>
                </div>
                <div className="text-purple-400">↓</div>
                <div className="bg-pink-500/20 border border-pink-500/30 rounded-lg p-4">
                  <div className="text-white font-semibold">Emotional Intelligence Output</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roadmap" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roadmapPhases.map((phase, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white">{phase.phase}: {phase.title}</CardTitle>
                    <Badge 
                      className={`${
                        phase.status === "In Progress" 
                          ? "bg-green-500/20 text-green-300" 
                          : phase.status === "Planned"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-purple-500/20 text-purple-300"
                      }`}
                    >
                      {phase.status}
                    </Badge>
                  </div>
                  <p className="text-white/70">{phase.duration}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.milestones.map((milestone, idx) => (
                      <li key={idx} className="flex items-center text-white/80 text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline Visualization */}
          <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white text-center">18-Month Acquisition Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {roadmapPhases.map((phase, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      phase.status === "In Progress" 
                        ? "bg-green-500" 
                        : phase.status === "Planned"
                        ? "bg-blue-500"
                        : "bg-purple-500"
                    }`}>
                      {index + 1}
                    </div>
                    <div className="mt-2 text-white font-semibold">{phase.phase}</div>
                    <div className="text-white/70 text-sm">{phase.duration}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};
