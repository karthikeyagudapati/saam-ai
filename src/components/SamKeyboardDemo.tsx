import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Mic, 
  MicOff, 
  Languages, 
  Sparkles, 
  Zap, 
  Heart, 
  Smile, 
  Brain,
  Keyboard,
  Volume2,
  RotateCcw,
  Send,
  Copy,
  Download
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Language {
  code: string;
  name: string;
  flag: string;
  transliteration?: boolean;
}

interface EmotionSetting {
  name: string;
  value: number;
  emoji: string;
  color: string;
  category: string;
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
  { code: 'hi', name: 'हिन्दी (Hindi)', flag: '🇮🇳', transliteration: true },
  { code: 'te', name: 'తెలుగు (Telugu)', flag: '🇮🇳', transliteration: true },
  { code: 'ta', name: 'தமிழ் (Tamil)', flag: '🇮🇳', transliteration: true },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)', flag: '🇮🇳', transliteration: true },
  { code: 'ml', name: 'മലയാളം (Malayalam)', flag: '🇮🇳', transliteration: true },
  { code: 'bn', name: 'বাংলা (Bengali)', flag: '🇮🇳', transliteration: true },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)', flag: '🇮🇳', transliteration: true },
  { code: 'mr', name: 'मराठी (Marathi)', flag: '🇮🇳', transliteration: true },
  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)', flag: '🇮🇳', transliteration: true },
];

const KEYBOARD_LAYOUTS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

const TONE_OPTIONS = [
  { value: 'casual', label: 'Casual', emoji: '😊' },
  { value: 'professional', label: 'Professional', emoji: '💼' },
  { value: 'friendly', label: 'Friendly', emoji: '🤗' },
  { value: 'formal', label: 'Formal', emoji: '🎩' },
  { value: 'enthusiastic', label: 'Enthusiastic', emoji: '🎉' },
  { value: 'romantic', label: 'Romantic', emoji: '💕' }
];

export const SamKeyboardDemo = () => {
  const [text, setText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0]);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedTone, setSelectedTone] = useState('casual');
  const [genzIntensity, setGenzIntensity] = useState([50]);
  const [emotions, setEmotions] = useState<EmotionSetting[]>([
    // Basic Emotions
    { name: 'Happy', value: 70, emoji: '😊', color: '#FFD700', category: 'Basic' },
    { name: 'Sad', value: 0, emoji: '😢', color: '#4169E1', category: 'Basic' },
    { name: 'Angry', value: 0, emoji: '😡', color: '#DC143C', category: 'Basic' },
    { name: 'Fear', value: 0, emoji: '😨', color: '#800080', category: 'Basic' },
    
    // Social Emotions
    { name: 'Excited', value: 40, emoji: '🤗', color: '#FF4500', category: 'Social' },
    { name: 'Nervous', value: 0, emoji: '😰', color: '#9370DB', category: 'Social' },
    { name: 'Confident', value: 60, emoji: '😎', color: '#1E90FF', category: 'Social' },
    { name: 'Shy', value: 0, emoji: '😊', color: '#FFB6C1', category: 'Social' },
    
    // Romantic Emotions
    { name: 'Romantic', value: 30, emoji: '💕', color: '#FF69B4', category: 'Romantic' },
    { name: 'Flirty', value: 0, emoji: '😉', color: '#FF1493', category: 'Romantic' },
    { name: 'Passionate', value: 0, emoji: '🔥', color: '#DC143C', category: 'Romantic' },
    
    // Professional Emotions
    { name: 'Professional', value: 0, emoji: '💼', color: '#2F4F4F', category: 'Professional' },
    { name: 'Respectful', value: 0, emoji: '🙏', color: '#4682B4', category: 'Professional' },
    { name: 'Formal', value: 0, emoji: '👔', color: '#000080', category: 'Professional' },
    
    // Casual Emotions
    { name: 'Casual', value: 0, emoji: '😄', color: '#32CD32', category: 'Casual' },
    { name: 'Friendly', value: 0, emoji: '🌟', color: '#FFD700', category: 'Casual' },
    { name: 'Humorous', value: 0, emoji: '😂', color: '#FF6347', category: 'Casual' },
  ]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [contextText, setContextText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  const categories = ['All', ...new Set(emotions.map(e => e.category))];

  // Mock AI predictions and suggestions
  useEffect(() => {
    if (text.length > 0) {
      const mockSuggestions = generateMockSuggestions(text, selectedTone, emotions);
      setSuggestions(mockSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [text, selectedTone, emotions]);

  const generateMockSuggestions = (inputText: string, tone: string, emotionSettings: EmotionSetting[]): string[] => {
    const lastWord = inputText.split(' ').pop()?.toLowerCase() || '';
    const suggestions: string[] = [];

    // Contextual suggestions based on tone and emotions
    if (tone === 'professional') {
      suggestions.push('regarding', 'furthermore', 'accordingly', 'therefore');
    } else if (tone === 'casual') {
      suggestions.push('btw', 'lol', 'tbh', 'ngl');
    } else if (tone === 'romantic') {
      suggestions.push('darling', 'sweetheart', 'beautiful', 'amazing');
    }

    // Emotion-based suggestions
    const happyEmotion = emotionSettings.find(e => e.name === 'Happy');
    if (happyEmotion && happyEmotion.value > 50) {
      suggestions.push('awesome!', 'fantastic!', 'love it!');
    }

    return suggestions.slice(0, 4);
  };

  const handleKeyPress = (key: string) => {
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart;
      const end = textareaRef.current.selectionEnd;
      const newText = text.substring(0, start) + key.toLowerCase() + text.substring(end);
      setText(newText);
      
      // Move cursor position
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.setSelectionRange(start + 1, start + 1);
          textareaRef.current.focus();
        }
      }, 0);
    }
  };

  const handleBackspace = () => {
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart;
      const end = textareaRef.current.selectionEnd;
      
      if (start === end && start > 0) {
        const newText = text.substring(0, start - 1) + text.substring(end);
        setText(newText);
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.setSelectionRange(start - 1, start - 1);
            textareaRef.current.focus();
          }
        }, 0);
      }
    }
  };

  const handleSpace = () => {
    handleKeyPress(' ');
  };

  const applySuggestion = (suggestion: string) => {
    const words = text.split(' ');
    words[words.length - 1] = suggestion;
    setText(words.join(' ') + ' ');
    textareaRef.current?.focus();
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast({
        title: "Voice Recording",
        description: "Voice input simulation started",
      });
      // Simulate voice input after 2 seconds
      setTimeout(() => {
        setText(prev => prev + "Hey there! This is voice input simulation. ");
        setIsRecording(false);
      }, 2000);
    }
  };

  const transformToGenZ = () => {
    const intensity = genzIntensity[0];
    let transformed = text;
    
    if (intensity > 30) {
      transformed = transformed
        .replace(/you/gi, 'u')
        .replace(/are/gi, 'r')
        .replace(/your/gi, 'ur')
        .replace(/because/gi, 'bc')
        .replace(/tonight/gi, 'tn')
        .replace(/tomorrow/gi, 'tmrw');
    }
    
    if (intensity > 60) {
      transformed = transformed
        .replace(/\b(good|great|awesome)\b/gi, 'fire 🔥')
        .replace(/\b(bad|terrible)\b/gi, 'mid')
        .replace(/\b(very|really)\b/gi, 'lowkey')
        .replace(/\b(cool|nice)\b/gi, 'based');
    }
    
    if (intensity > 80) {
      transformed = transformed + ' no cap 💯';
    }
    
    setText(transformed);
    toast({
      title: "Gen-Z Transformation",
      description: `Applied ${intensity}% Gen-Z conversion`,
    });
  };

  const adjustTone = () => {
    const toneMap: Record<string, string[]> = {
      professional: ['regarding', 'furthermore', 'I would like to', 'Please consider'],
      casual: ['hey', 'btw', 'just saying', 'lol'],
      friendly: ['hope you\'re doing well', 'looking forward to', 'would love to'],
      formal: ['I am writing to', 'Thank you for your consideration', 'Sincerely'],
      enthusiastic: ['Amazing!', 'So excited about', 'Can\'t wait to', 'This is incredible!'],
      romantic: ['my love', 'sweetheart', 'you mean everything to me', 'forever yours']
    };
    
    const phrases = toneMap[selectedTone] || [];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setText(prev => prev + (prev ? ' ' : '') + randomPhrase + ' ');
    
    toast({
      title: "Tone Adjustment",
      description: `Applied ${selectedTone} tone`,
    });
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "Text copied to clipboard",
    });
  };

  const exportText = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sam-keyboard-text.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Sam Keyboard 2.0
          </h1>
          <p className="text-muted-foreground">
            The Ultimate Contextual & Adaptive Input System Demo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Input Area */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Keyboard className="w-5 h-5" />
                  Smart Input Area
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Language & Controls */}
                <div className="flex flex-wrap gap-2 items-center">
                  <Select value={selectedLanguage.code} onValueChange={(code) => {
                    const lang = LANGUAGES.find(l => l.code === code);
                    if (lang) setSelectedLanguage(lang);
                  }}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {LANGUAGES.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.flag} {lang.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Button
                    variant={isRecording ? "destructive" : "outline"}
                    size="sm"
                    onClick={toggleRecording}
                  >
                    {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    {isRecording ? 'Stop' : 'Voice'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowVirtualKeyboard(!showVirtualKeyboard)}
                  >
                    <Keyboard className="w-4 h-4" />
                    Keyboard
                  </Button>
                </div>

                {/* Text Input */}
                <Textarea
                  ref={textareaRef}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={`Start typing in ${selectedLanguage.name}... Sam Keyboard will adapt to your style and emotions!`}
                  className="min-h-32 text-lg"
                />

                {/* Smart Suggestions */}
                {suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-muted-foreground">Suggestions:</span>
                    {suggestions.map((suggestion, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => applySuggestion(suggestion)}
                      >
                        {suggestion}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  <Button onClick={transformToGenZ} variant="outline" size="sm">
                    <Zap className="w-4 h-4 mr-1" />
                    Gen-Z Transform
                  </Button>
                  <Button onClick={adjustTone} variant="outline" size="sm">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Adjust Tone
                  </Button>
                  <Button onClick={copyText} variant="outline" size="sm">
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </Button>
                  <Button onClick={exportText} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    Export
                  </Button>
                  <Button onClick={() => setText('')} variant="outline" size="sm">
                    <RotateCcw className="w-4 h-4 mr-1" />
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Virtual Keyboard */}
            {showVirtualKeyboard && (
              <Card>
                <CardHeader>
                  <CardTitle>Virtual Keyboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {KEYBOARD_LAYOUTS.map((row, rowIndex) => (
                      <div key={rowIndex} className="flex justify-center gap-1">
                        {row.map((key) => (
                          <Button
                            key={key}
                            variant="outline"
                            size="sm"
                            className="w-8 h-8 p-0"
                            onClick={() => handleKeyPress(key)}
                          >
                            {key}
                          </Button>
                        ))}
                      </div>
                    ))}
                    <div className="flex justify-center gap-1 mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-16 h-8"
                        onClick={handleSpace}
                      >
                        Space
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-16 h-8"
                        onClick={handleBackspace}
                      >
                        ⌫
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* AI Controls Panel */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  AI Controls
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="emotions" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="emotions">Emotions</TabsTrigger>
                    <TabsTrigger value="context">Context</TabsTrigger>
                    <TabsTrigger value="tone">Tone</TabsTrigger>
                    <TabsTrigger value="genz">Gen-Z</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="emotions" className="space-y-4">
                    {/* Category Filter */}
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category} {category !== 'All' && `(${emotions.filter(e => e.category === category).length})`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Emotion Sliders */}
                    <div className="max-h-80 overflow-y-auto space-y-3">
                      {emotions
                        .filter(emotion => selectedCategory === 'All' || emotion.category === selectedCategory)
                        .map((emotion, index) => {
                          const globalIndex = emotions.findIndex(e => e.name === emotion.name);
                          return (
                            <div key={emotion.name} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm flex items-center gap-1">
                                  <span>{emotion.emoji}</span>
                                  {emotion.name}
                                  <Badge variant="outline" className="text-xs">
                                    {emotion.category}
                                  </Badge>
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  {emotion.value}%
                                </span>
                              </div>
                              <Slider
                                value={[emotion.value]}
                                onValueChange={(value) => {
                                  const newEmotions = [...emotions];
                                  newEmotions[globalIndex].value = value[0];
                                  setEmotions(newEmotions);
                                }}
                                max={100}
                                step={5}
                                className="w-full"
                              />
                            </div>
                          );
                        })}
                    </div>
                  </TabsContent>

                  <TabsContent value="context" className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Context & Situation</label>
                      <Textarea
                        value={contextText}
                        onChange={(e) => setContextText(e.target.value)}
                        placeholder="Describe the situation or context for better AI suggestions..."
                        className="min-h-20"
                      />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Adding context helps Sam Keyboard provide more accurate and appropriate suggestions.
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="tone" className="space-y-4">
                    <Select value={selectedTone} onValueChange={setSelectedTone}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {TONE_OPTIONS.map((tone) => (
                          <SelectItem key={tone.value} value={tone.value}>
                            {tone.emoji} {tone.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button onClick={adjustTone} className="w-full">
                      Apply Tone Adjustment
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="genz" className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Gen-Z Intensity</span>
                        <span className="text-sm text-muted-foreground">
                          {genzIntensity[0]}%
                        </span>
                      </div>
                      <Slider
                        value={genzIntensity}
                        onValueChange={setGenzIntensity}
                        max={100}
                        step={10}
                        className="w-full"
                      />
                    </div>
                    <Button onClick={transformToGenZ} className="w-full">
                      Transform to Gen-Z
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Language Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="w-5 h-5" />
                  Language Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="outline" className="w-full justify-center">
                  {selectedLanguage.flag} {selectedLanguage.name}
                </Badge>
                {selectedLanguage.transliteration && (
                  <Badge variant="secondary" className="w-full justify-center">
                    Transliteration Available
                  </Badge>
                )}
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Code-switching support</p>
                  <p>• Smart predictions</p>
                  <p>• Cultural context aware</p>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Session Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Characters:</span>
                  <span>{text.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Words:</span>
                  <span>{text.split(' ').filter(w => w.length > 0).length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Language:</span>
                  <span>{selectedLanguage.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tone:</span>
                  <span className="capitalize">{selectedTone}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};