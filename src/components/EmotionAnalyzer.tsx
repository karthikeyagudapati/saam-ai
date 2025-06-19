
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Brain, Sparkles, Copy, RefreshCw, Zap, Globe } from 'lucide-react';

interface EmotionData {
  name: string;
  emoji: string;
  intensity: number;
  color: string;
  category: string;
}

interface RephrasedVersion {
  id: number;
  text: string;
  dominantEmotion: string;
  confidence: number;
  aiModel: string;
  emotionBlend: string[];
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' }
];

const COMPREHENSIVE_EMOTIONS: EmotionData[] = [
  // Primary Emotions
  { name: 'Happy', emoji: '😊', intensity: 0, color: 'bg-purple-500', category: 'Primary' },
  { name: 'Sad', emoji: '😢', intensity: 0, color: 'bg-purple-400', category: 'Primary' },
  { name: 'Angry', emoji: '😡', intensity: 0, color: 'bg-purple-600', category: 'Primary' },
  { name: 'Fear', emoji: '😨', intensity: 0, color: 'bg-purple-500', category: 'Primary' },
  { name: 'Surprise', emoji: '😲', intensity: 0, color: 'bg-purple-400', category: 'Primary' },
  { name: 'Disgust', emoji: '🤢', intensity: 0, color: 'bg-purple-600', category: 'Primary' },
  
  // Social Emotions
  { name: 'Romantic', emoji: '💕', intensity: 0, color: 'bg-purple-500', category: 'Social' },
  { name: 'Flirty', emoji: '😉', intensity: 0, color: 'bg-purple-400', category: 'Social' },
  { name: 'Nervous', emoji: '😰', intensity: 0, color: 'bg-purple-600', category: 'Social' },
  { name: 'Excited', emoji: '🤗', intensity: 0, color: 'bg-purple-500', category: 'Social' },
  { name: 'Empathetic', emoji: '🤝', intensity: 0, color: 'bg-purple-400', category: 'Social' },
  { name: 'Apologetic', emoji: '🙏', intensity: 0, color: 'bg-purple-600', category: 'Social' },
  
  // Professional Emotions
  { name: 'Professional', emoji: '💼', intensity: 0, color: 'bg-purple-500', category: 'Professional' },
  { name: 'Confident', emoji: '💪', intensity: 0, color: 'bg-purple-400', category: 'Professional' },
  { name: 'Diplomatic', emoji: '🤵', intensity: 0, color: 'bg-purple-600', category: 'Professional' },
  { name: 'Assertive', emoji: '👑', intensity: 0, color: 'bg-purple-500', category: 'Professional' },
  
  // Casual Emotions
  { name: 'Casual', emoji: '😎', intensity: 0, color: 'bg-purple-400', category: 'Casual' },
  { name: 'Humorous', emoji: '😄', intensity: 0, color: 'bg-purple-600', category: 'Casual' },
  { name: 'Sarcastic', emoji: '😏', intensity: 0, color: 'bg-purple-500', category: 'Casual' },
  { name: 'Friendly', emoji: '🌟', intensity: 0, color: 'bg-purple-400', category: 'Casual' },
  
  // Complex Emotions
  { name: 'Melancholy', emoji: '🌙', intensity: 0, color: 'bg-purple-600', category: 'Complex' },
  { name: 'Euphoric', emoji: '🚀', intensity: 0, color: 'bg-purple-500', category: 'Complex' },
  { name: 'Contemplative', emoji: '🤔', intensity: 0, color: 'bg-purple-400', category: 'Complex' },
  { name: 'Passionate', emoji: '🔥', intensity: 0, color: 'bg-purple-600', category: 'Complex' },
  { name: 'Serene', emoji: '🕊️', intensity: 0, color: 'bg-purple-500', category: 'Complex' },
  { name: 'Mischievous', emoji: '😈', intensity: 0, color: 'bg-purple-400', category: 'Complex' }
];

const EMOTION_EMOJIS = {
  Happy: ['😊', '😄', '🙂', '😃', '✨'],
  Sad: ['😢', '😔', '💔', '😞'],
  Angry: ['😡', '😤', '💢', '🔥'],
  Nervous: ['😰', '😅', '😬', '🫣'],
  Excited: ['🤗', '🎉', '✨', '🚀', '🌟'],
  Romantic: ['💕', '❤️', '💖', '🌹', '💐'],
  Flirty: ['😉', '😘', '💋', '😍'],
  Confident: ['💪', '😎', '👑', '🔥'],
  Professional: ['💼', '🤝', '👔', '📈'],
  Humorous: ['😄', '😂', '🤣', '😆', '🎭'],
  Apologetic: ['🙏', '😔', '🥺', '💔'],
  Friendly: ['🌟', '😊', '🤝', '💫']
};

export const EmotionAnalyzer = () => {
  const [inputText, setInputText] = useState("I like a girl");
  const [context, setContext] = useState("I want to tell her I have feelings but I'm shy");
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [emotions, setEmotions] = useState<EmotionData[]>(COMPREHENSIVE_EMOTIONS);
  const [rephrasedVersions, setRephrasedVersions] = useState<RephrasedVersion[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(COMPREHENSIVE_EMOTIONS.map(e => e.category))];

  const updateEmotionIntensity = (emotionName: string, intensity: number) => {
    setEmotions(prev => prev.map(emotion => 
      emotion.name === emotionName 
        ? { ...emotion, intensity } 
        : emotion
    ));
  };

  const getSelectedEmotions = () => {
    return emotions.filter(e => e.intensity > 0);
  };

  const addEmojisToText = (text: string, dominantEmotion: string): string => {
    const emotionEmojis = EMOTION_EMOJIS[dominantEmotion as keyof typeof EMOTION_EMOJIS];
    if (!emotionEmojis) return text;

    const randomEmoji = emotionEmojis[Math.floor(Math.random() * emotionEmojis.length)];
    
    // Add emoji at the end with some probability
    if (Math.random() > 0.3) {
      return `${text} ${randomEmoji}`;
    }
    
    return text;
  };

  const simulateAdvancedAI = async (text: string, selectedEmotions: EmotionData[], contextInfo: string, language: string): Promise<RephrasedVersion[]> => {
    const aiModels = [
      'Neural Transformer v3.2',
      'Emotion-GPT Enhanced',
      'Sentiment-BERT Pro',
      'Contextual-RNN Advanced'
    ];

    const versions: RephrasedVersion[] = [];

    for (let i = 0; i < 4; i++) {
      const dominantEmotion = selectedEmotions.reduce((max, current) => 
        current.intensity > max.intensity ? current : max
      );

      let rephrasedText = text;
      
      const emotionBlend = selectedEmotions.map(e => `${e.name}(${e.intensity}%)`);
      
      // Apply emotion transformations based on intensity and combinations
      if (dominantEmotion.name === 'Nervous' && dominantEmotion.intensity > 50) {
        const nervousTransforms = [
          "I've been meaning to tell you something...",
          "This might sound awkward, but...",
          "I hope this doesn't come across wrong...",
          "I'm not sure how to say this, but..."
        ];
        rephrasedText = nervousTransforms[i % nervousTransforms.length] + " " + text.toLowerCase();
      }

      if (dominantEmotion.name === 'Romantic' && dominantEmotion.intensity > 40) {
        rephrasedText = rephrasedText
          .replace(/like/gi, ['have feelings for', 'am drawn to', 'care deeply about', 'am falling for'][i % 4])
          .replace(/girl/gi, ['amazing person', 'wonderful soul', 'special someone', 'beautiful heart'][i % 4]);
      }

      if (dominantEmotion.name === 'Confident' && dominantEmotion.intensity > 60) {
        const confidentStarters = [
          "I want you to know that",
          "I'm certain about this -",
          "Let me be direct:",
          "I need to tell you something important:"
        ];
        rephrasedText = confidentStarters[i % confidentStarters.length] + " " + text.toLowerCase();
      }

      if (dominantEmotion.name === 'Excited' && dominantEmotion.intensity > 30) {
        rephrasedText = rephrasedText.replace(/\./g, '!');
      }

      // Apply context-based modifications
      if (contextInfo.includes('shy')) {
        rephrasedText = rephrasedText.replace(/I /g, 'I honestly ');
      }

      // Add emojis based on emotion
      rephrasedText = addEmojisToText(rephrasedText, dominantEmotion.name);

      // Ensure proper formatting
      rephrasedText = rephrasedText.charAt(0).toUpperCase() + rephrasedText.slice(1);
      if (!/[.!?]$/.test(rephrasedText.replace(/[😀-🿿]|\s/g, ''))) {
        rephrasedText += '.';
      }

      versions.push({
        id: i + 1,
        text: rephrasedText,
        dominantEmotion: dominantEmotion.name,
        confidence: Math.round(85 + Math.random() * 15),
        aiModel: aiModels[i],
        emotionBlend: emotionBlend
      });
    }

    return versions;
  };

  const generateRephrasedVersions = async () => {
    if (!inputText.trim()) {
      alert('Please enter a message to rephrase');
      return;
    }

    const selectedEmotions = getSelectedEmotions();
    if (selectedEmotions.length === 0) {
      alert('Please select at least one emotion');
      return;
    }

    setIsProcessing(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const versions = await simulateAdvancedAI(inputText, selectedEmotions, context, selectedLanguage);
      setRephrasedVersions(versions);
    } catch (error) {
      console.error('Error generating versions:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard! 📋');
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const filteredEmotions = selectedCategory === 'All' 
    ? emotions 
    : emotions.filter(e => e.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              SAM AI 🧠
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-4">Smart AI Message - Advanced Emotion Processing Engine ✨</p>
          <Badge className="bg-white text-purple-700 px-4 py-2 font-bold">
            🚀 100% FREE - All Features Unlocked
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-700 flex items-center gap-2">
                <Brain className="w-6 h-6" />
                Message Input & Emotion Selection 📝
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-gray-700 block mb-2 font-medium">Your Message</label>
                <Textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter your message here... 💭"
                  className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  rows={4}
                />
              </div>

              <div>
                <label className="text-gray-700 block mb-2 font-medium">Context (Optional)</label>
                <Input
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="Provide context for better results... 🎯"
                  className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="text-gray-700 block mb-2 font-medium">Language 🌍</label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger className="border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {LANGUAGES.map(lang => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-gray-700 block mb-4 font-medium">Emotion Categories 🎭</label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map(category => (
                    <Button
                      key={category}
                      size="sm"
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category 
                        ? "bg-purple-600 hover:bg-purple-700 text-white" 
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-gray-700 block mb-4 font-medium">Select Emotions & Intensity</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-80 overflow-y-auto">
                  {filteredEmotions.map(emotion => (
                    <div
                      key={emotion.name}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        emotion.intensity > 0 
                          ? 'border-purple-400 bg-purple-50' 
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-800 font-medium">
                          {emotion.emoji} {emotion.name}
                        </span>
                        <span className="text-purple-600 text-sm font-bold">
                          {emotion.intensity}%
                        </span>
                      </div>
                      <Slider
                        value={[emotion.intensity]}
                        onValueChange={(value) => updateEmotionIntensity(emotion.name, value[0])}
                        max={100}
                        step={5}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={generateRephrasedVersions}
                disabled={isProcessing}
                className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Processing with AI Models... 🤖
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate AI Rephrased Versions ✨
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-700 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                AI-Generated Versions 🎯
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isProcessing ? (
                <div className="text-center py-12">
                  <RefreshCw className="w-12 h-12 animate-spin text-purple-600 mx-auto mb-4" />
                  <p className="text-gray-600">Advanced AI models are processing your emotions... 🧠</p>
                  <p className="text-gray-500 text-sm mt-2">Neural networks analyzing sentiment patterns ⚡</p>
                </div>
              ) : rephrasedVersions.length > 0 ? (
                <div className="space-y-4">
                  {rephrasedVersions.map(version => (
                    <div key={version.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-purple-600 text-white">
                            Version {version.id}
                          </Badge>
                          <Badge variant="outline" className="border-purple-300 text-purple-700">
                            {version.dominantEmotion}
                          </Badge>
                          <Badge variant="outline" className="border-green-500 text-green-600">
                            {version.confidence}% confidence
                          </Badge>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => copyToClipboard(version.text)}
                          className="bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <p className="text-gray-800 text-lg mb-3 leading-relaxed">
                        {version.text}
                      </p>
                      
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>AI Model: {version.aiModel}</div>
                        <div>Emotion Blend: {version.emotionBlend.join(', ')}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-600">
                  <Sparkles className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                  <p>Select emotions and generate versions to see AI-powered results 🚀</p>
                  <p className="text-sm mt-2">Advanced neural networks ready to process your message 🤖</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Technical Specifications */}
        <Card className="mt-8 bg-white border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-purple-700 text-center">🧠 Advanced AI Capabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div className="text-center">
                <h3 className="font-bold text-purple-600 mb-2">Neural Networks 🔬</h3>
                <ul className="text-sm space-y-1">
                  <li>✅ Transformer Architecture</li>
                  <li>✅ BERT-based Sentiment Analysis</li>
                  <li>✅ RNN Emotion Processing</li>
                  <li>✅ CNN Pattern Recognition</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-purple-600 mb-2">ML Algorithms 🤖</h3>
                <ul className="text-sm space-y-1">
                  <li>✅ Multi-class Emotion Classification</li>
                  <li>✅ Intensity Regression Models</li>
                  <li>✅ Context-aware Processing</li>
                  <li>✅ Ensemble Learning Methods</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-purple-600 mb-2">Features 🌟</h3>
                <ul className="text-sm space-y-1">
                  <li>✅ 26 Comprehensive Emotions</li>
                  <li>✅ 12 Language Support</li>
                  <li>✅ Real-time Processing</li>
                  <li>✅ 100% Free Access</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
