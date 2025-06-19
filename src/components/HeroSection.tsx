
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 pt-20 pb-32">
      <div className="text-center max-w-6xl mx-auto">
        <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-colors">
          <Sparkles className="w-4 h-4 mr-2" />
          Emotional Intelligence as Infrastructure
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Sam Keyboard
          </span>
          <br />
          <span className="text-white/90">The AI That Understands</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
          The world's first emotionally intelligent keyboard. Transform every message with AI that reads context, 
          understands relationships, and suggests the perfect emotional tone for any conversation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4">
            Experience the Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
            <Brain className="mr-2 w-5 h-5" />
            See the Technology
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
            <div className="text-white/60">of conflicts stem from miscommunication</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">90%</div>
            <div className="text-white/60">of emotional context is lost in digital messages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">$200B</div>
            <div className="text-white/60">global communication software market</div>
          </div>
        </div>
      </div>
    </section>
  );
};
