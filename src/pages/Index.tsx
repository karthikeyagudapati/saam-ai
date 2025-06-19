
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Brain, Zap, Shield, Globe, Users, TrendingUp } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { DemoSection } from "@/components/DemoSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ValueProposition } from "@/components/ValueProposition";
import { TechSpecs } from "@/components/TechSpecs";
import { AcquisitionPitch } from "@/components/AcquisitionPitch";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        <HeroSection />
        <DemoSection />
        <FeaturesSection />
        <ValueProposition />
        <TechSpecs />
        <AcquisitionPitch />
        
        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Communication?</h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Join the revolution in emotional intelligence. Sam Keyboard is more than technology—it's the future of human connection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Request Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Join Beta Program
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
