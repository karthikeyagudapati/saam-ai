
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { MessageSquare, RefreshCw, Heart, Briefcase, Users } from "lucide-react";

const demoScenarios = [
  {
    id: "relationship",
    title: "Relationship Communication",
    icon: Heart,
    original: "We need to talk about yesterday",
    emotions: {
      gentle: "I'd love to chat about yesterday when you have a moment 💕",
      concerned: "Hey, could we talk about what happened yesterday? I'm feeling a bit confused 🤗",
      direct: "Can we discuss yesterday? I think we should clear the air ✨"
    }
  },
  {
    id: "business",
    title: "Professional Context",
    icon: Briefcase,
    original: "The project deadline was missed",
    emotions: {
      diplomatic: "I wanted to follow up on the project timeline and discuss next steps 📊",
      constructive: "Let's review the project timeline and identify opportunities for improvement 💪",
      supportive: "I'd like to discuss the project timeline and see how we can support the team going forward 🤝"
    }
  },
  {
    id: "team",
    title: "Team Collaboration",
    icon: Users,
    original: "This isn't working",
    emotions: {
      collaborative: "I think we might want to explore some alternative approaches 🚀",
      encouraging: "What if we tried a different strategy? I'm confident we can figure this out! ✨",
      analytical: "Based on current results, I'd recommend we reassess our approach 📈"
    }
  }
];

export const DemoSection = () => {
  const [activeScenario, setActiveScenario] = useState("relationship");
  const [selectedEmotion, setSelectedEmotion] = useState("gentle");
  const [intensity, setIntensity] = useState([70]);

  const currentScenario = demoScenarios.find(s => s.id === activeScenario);

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          See Sam in Action
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Watch how Sam transforms everyday messages with emotional intelligence, 
          adapting to context and relationship dynamics in real-time.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Scenario Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demoScenarios.map((scenario) => {
            const IconComponent = scenario.icon;
            return (
              <Button
                key={scenario.id}
                variant={activeScenario === scenario.id ? "default" : "outline"}
                onClick={() => setActiveScenario(scenario.id)}
                className={`${
                  activeScenario === scenario.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600"
                    : "border-white/20 text-white hover:bg-white/10"
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {scenario.title}
              </Button>
            );
          })}
        </div>

        {/* Demo Interface */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Original Message */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-red-400" />
                Original Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-4">
                <p className="text-white text-lg">{currentScenario?.original}</p>
              </div>
              <Badge variant="destructive" className="bg-red-500/20 text-red-300">
                ⚠️ Potentially problematic tone
              </Badge>
            </CardContent>
          </Card>

          {/* Sam's Enhancement */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <RefreshCw className="w-5 h-5 mr-2 text-green-400" />
                Sam's Enhancement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-4">
                <p className="text-white text-lg">
                  {currentScenario?.emotions[selectedEmotion as keyof typeof currentScenario.emotions]}
                </p>
              </div>
              
              {/* Emotion Controls */}
              <div className="space-y-4">
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Emotional Tone</label>
                  <div className="flex gap-2">
                    {currentScenario && Object.keys(currentScenario.emotions).map((emotion) => (
                      <Button
                        key={emotion}
                        size="sm"
                        variant={selectedEmotion === emotion ? "default" : "outline"}
                        onClick={() => setSelectedEmotion(emotion)}
                        className={`${
                          selectedEmotion === emotion
                            ? "bg-gradient-to-r from-purple-600 to-pink-600"
                            : "border-white/20 text-white hover:bg-white/10"
                        } capitalize`}
                      >
                        {emotion}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-white/70 text-sm mb-2 block">
                    Intensity: {intensity[0]}%
                  </label>
                  <Slider
                    value={intensity}
                    onValueChange={setIntensity}
                    max={100}
                    step={10}
                    className="w-full"
                  />
                </div>
              </div>
              
              <Badge className="bg-green-500/20 text-green-300 mt-4">
                ✅ Relationship-preserving tone
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Impact Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-white/70">Improved message reception</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">3x</div>
              <div className="text-white/70">Faster conflict resolution</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">92%</div>
              <div className="text-white/70">User satisfaction rate</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
