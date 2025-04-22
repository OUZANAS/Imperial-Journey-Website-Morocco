
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InteractiveSection from "@/components/InteractiveSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Play, PauseCircle } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const cinemaData = [
  { year: "2010", rabat: 5, national: 10 },
  { year: "2012", rabat: 8, national: 12 },
  { year: "2014", rabat: 12, national: 15 },
  { year: "2016", rabat: 18, national: 16 },
  { year: "2018", rabat: 25, national: 18 },
  { year: "2020", rabat: 22, national: 14 },
  { year: "2022", rabat: 35, national: 22 },
  { year: "2024", rabat: 42, national: 28 },
];

const heritageData = [
  { name: "T1", monuments: 1200, culture: 1800 },
  { name: "T2", monuments: 1900, culture: 2400 },
  { name: "T3", monuments: 2800, culture: 3200 },
  { name: "T4", monuments: 2100, culture: 2800 },
];

const Rabat = () => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [animationTimer, setAnimationTimer] = useState<NodeJS.Timeout | null>(null);

  const handleLetterHover = (letter: string) => {
    setActiveLetter(letter);
  };

  const handleLetterLeave = () => {
    setActiveLetter(null);
  };

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnimationProgress(0);
    
    const timer = setInterval(() => {
      setAnimationProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsAnimating(false);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    
    setAnimationTimer(timer);
  };

  const stopAnimation = () => {
    if (animationTimer) {
      clearInterval(animationTimer);
      setAnimationTimer(null);
    }
    setIsAnimating(false);
  };

  // Lettres arabes pour la calligraphie
  const arabicLetters = [
    { letter: "ا", name: "Alif", meaning: "Le Premier", color: "#4169E1" },
    { letter: "ب", name: "Ba", meaning: "La Porte", color: "#2E8B57" },
    { letter: "ر", name: "Ra", meaning: "L'Esprit", color: "#8A2BE2" },
    { letter: "ط", name: "Ta", meaning: "Le Chemin", color: "#DC143C" },
  ];

  return (
    <>
      <Navbar />
      
      <Hero
        title="Rabat – Capitale Moderne au Cœur Historique"
        subtitle="Explorez Rabat, où se rencontrent modernité, cinéma et patrimoine séculaire marocain."
        backgroundImage="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        buttonText="Explorer Rabat"
        buttonLink="#explore"
        height="large"
      />
      
      <section id="explore" className="py-16 bg-morocco-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-4">
                Journal de Bord - La Capitale
              </h2>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 py-4">
                <div className="w-full md:w-1/3 text-center">
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-morocco-blue/20 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-morocco-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">Où Sommes-Nous</h3>
                  <p className="text-gray-600 mt-2">
                    Troisième étape du circuit impérial, capitale administrative du Royaume.
                  </p>
                </div>
                
                <div className="w-full md:w-1/3 text-center">
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-morocco-blue/20 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-morocco-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">À Découvrir</h3>
                  <p className="text-gray-600 mt-2">
                    Tour Hassan, Kasbah des Oudayas, patrimoine et modernité cinématographique.
                  </p>
                </div>
                
                <div className="w-full md:w-1/3 text-center">
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-morocco-blue/20 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-morocco-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">Expériences</h3>
                  <p className="text-gray-600 mt-2">
                    Calligraphie arabe, cinéma marocain et architecture andalou-mauresque.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 mb-12">
              <iframe
                className="w-full h-[400px] rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/sPlUc-O5RJQ"
                title="Découvrir Rabat"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <InteractiveSection
        title="La Capitale du Cinéma Marocain"
        subtitle="Un pôle culturel en pleine croissance avec de nombreux festivals et productions"
      >
        <div className="mb-12">
          <ChartContainer
            className="h-[400px]"
            config={{
              "rabat": { color: "#0EA5E9" },
              "national": { color: "#6B7280" },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cinemaData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="year" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-3 border rounded shadow-lg">
                          <p className="font-bold text-gray-900">Année: {label}</p>
                          <p className="text-morocco-blue">
                            Productions à Rabat: {payload[0].value}
                          </p>
                          <p className="text-gray-600">
                            Moyenne nationale: {payload[1].value}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="rabat" 
                  name="Productions à Rabat" 
                  stroke="#0EA5E9" 
                  strokeWidth={3}
                  dot={{ r: 6 }}
                  activeDot={{ r: 8, strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="national" 
                  name="Moyenne nationale" 
                  stroke="#6B7280" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <Tabs defaultValue="festivals" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="festivals">Festivals</TabsTrigger>
            <TabsTrigger value="studios">Studios</TabsTrigger>
            <TabsTrigger value="acteurs">Acteurs & Réalisateurs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="festivals" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-blue">
                  Festivals Internationaux
                </h3>
                <p className="text-gray-700 mb-4">
                  Rabat accueille plusieurs festivals de cinéma prestigieux, dont le Festival International du Film de Femmes et le Festival du Court Métrage Méditerranéen.
                </p>
                <p className="text-gray-700 mb-4">
                  Ces événements attirent des cinéastes du monde entier et servent de plateforme aux talents marocains émergents pour présenter leurs œuvres sur la scène internationale.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-morocco-blue mr-2">●</span>
                    <span>Projections en plein air sur les sites historiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-blue mr-2">●</span>
                    <span>Masterclasses avec des cinéastes renommés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-blue mr-2">●</span>
                    <span>Compétitions de films documentaires et de fiction</span>
                  </li>
                </ul>
                <Button className="bg-morocco-blue hover:bg-morocco-blue/90">
                  Programme des Festivals
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Festival de cinéma à Rabat" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="studios" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-blue">
                  Studios et Productions
                </h3>
                <p className="text-gray-700 mb-4">
                  Le Centre Cinématographique Marocain (CCM), basé à Rabat, joue un rôle essentiel dans la promotion et le développement de l'industrie cinématographique nationale.
                </p>
                <p className="text-gray-700 mb-4">
                  La capitale abrite également plusieurs studios de production qui collaborent avec des équipes internationales pour des coproductions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-morocco-blue mr-2">●</span>
                    <span>Infrastructures modernes de post-production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-blue mr-2">●</span>
                    <span>École de cinéma formant la nouvelle génération</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-blue mr-2">●</span>
                    <span>Soutien financier aux productions nationales</span>
                  </li>
                </ul>
                <Button className="bg-morocco-blue hover:bg-morocco-blue/90">
                  Visiter les Studios
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Studio de cinéma" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="acteurs" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-blue">
                  Talents Marocains
                </h3>
                <p className="text-gray-700 mb-4">
                  Rabat a vu naître et a formé de nombreux acteurs et réalisateurs qui ont contribué au rayonnement du cinéma marocain tant au niveau national qu'international.
                </p>
                <p className="text-gray-700 mb-4">
                  Des figures comme Nabil Ayouch, Maryam Touzani et Nezha Rahil font partie des personnalités qui ont mis le cinéma marocain sur la carte mondiale.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-morocco-blue mr-2">●</span>
                    <span>Films sélectionnés dans des festivals prestigieux</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-blue mr-2">●</span>
                    <span>Aborde des thèmes sociaux contemporains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-blue mr-2">●</span>
                    <span>Mélange d'influences traditionnelles et modernes</span>
                  </li>
                </ul>
                <Button className="bg-morocco-blue hover:bg-morocco-blue/90">
                  Découvrir les Œuvres
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1533928298208-27ff66555d8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Acteurs marocains" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </InteractiveSection>
      
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Patrimoine Historique
              </h2>
              <p className="text-xl text-gray-300">
                L'alliance unique entre monuments historiques et rayonnement culturel
              </p>
            </div>
            
            <ChartContainer
              className="h-[400px]"
              config={{
                "monuments": { color: "#3B82F6" },
                "culture": { color: "#60A5FA" },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={heritageData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#666" />
                  <XAxis dataKey="name" stroke="#FFF" />
                  <YAxis stroke="#FFF" />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-gray-800 p-3 border border-gray-700 rounded shadow">
                            <p className="font-bold text-white">Trimestre: {label}</p>
                            <p className="text-[#3B82F6]">
                              Visites monuments: {payload[0].value}
                            </p>
                            <p className="text-[#60A5FA]">
                              Événements culturels: {payload[1].value}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="monuments"
                    name="Monuments historiques"
                    stackId="1"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                  />
                  <Area
                    type="monotone"
                    dataKey="culture"
                    name="Rayonnement culturel"
                    stackId="1"
                    stroke="#60A5FA"
                    fill="#60A5FA"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Tour Hassan Rabat" 
                  className="w-full h-64 object-cover"
                />
                <div className="bg-morocco-blue p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Tour Hassan
                  </h3>
                  <p className="text-gray-100 mb-4">
                    Ce minaret inachevé de la fin du XIIe siècle devait être la plus grande mosquée du monde. Aujourd'hui, ses ruines imposantes et le mausolée de Mohammed V témoignent de l'histoire glorieuse et de la continuité de la monarchie marocaine.
                  </p>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Visite Virtuelle
                  </Button>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Kasbah des Oudayas" 
                  className="w-full h-64 object-cover"
                />
                <div className="bg-morocco-sand p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2 text-gray-800">
                    Kasbah des Oudayas
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Cette citadelle aux murs rouges surplombe l'embouchure du Bouregreg. Avec ses ruelles aux murs bleu et blanc, son jardin andalou et son café maure, elle offre un havre de paix et une vue exceptionnelle sur l'océan.
                  </p>
                  <Button variant="outline" className="border-morocco-blue text-morocco-blue hover:bg-morocco-blue/20">
                    Découvrir les Jardins
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <InteractiveSection
        title="Art de la Calligraphie"
        subtitle="Expérimentez l'élégance de l'écriture arabe à travers une animation interactive"
        className="bg-morocco-blue/10"
      >
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-blue">
                La Poésie des Lettres Arabes
              </h3>
              <p className="text-gray-700 mb-4">
                La calligraphie arabe est un art majeur dans la culture islamique. À Rabat, de nombreux artisans perpétuent cette tradition millénaire qui transforme l'écriture en œuvre d'art.
              </p>
              <p className="text-gray-700 mb-4">
                Chaque lettre possède sa propre personnalité et symbolique. Leur forme et leur mouvement sont chorégraphiés selon des règles précises qui confèrent une harmonie visuelle aux textes sacrés et poétiques.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6 relative h-48 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-sm mx-auto">
                    <div className="flex space-x-8 justify-center">
                      {arabicLetters.map((item) => (
                        <div 
                          key={item.letter}
                          className="text-center cursor-pointer transform transition-all duration-300 hover:scale-125"
                          onMouseEnter={() => handleLetterHover(item.letter)}
                          onMouseLeave={handleLetterLeave}
                        >
                          <div 
                            className={`text-6xl mb-2 ${activeLetter === item.letter ? 'text-[' + item.color + ']' : 'text-gray-800'}`}
                            style={{ color: activeLetter === item.letter ? item.color : '' }}
                          >
                            {item.letter}
                          </div>
                          <div className={`text-xs ${activeLetter === item.letter ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {activeLetter && (
                      <div className="absolute -bottom-2 left-0 right-0 bg-white/80 backdrop-blur-sm p-2 rounded text-center text-sm animate-fade-in">
                        {arabicLetters.find(item => item.letter === activeLetter)?.meaning}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-4 text-morocco-blue">Animation Calligraphique</h4>
                
                <div className="relative h-20 bg-white rounded border border-gray-200 mb-4 overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-morocco-blue/20 transition-all duration-50"
                    style={{ width: `${animationProgress}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl font-arabic text-morocco-blue">
                      {animationProgress > 10 ? "ر" : ""}
                      {animationProgress > 30 ? "ب" : ""}
                      {animationProgress > 50 ? "ا" : ""}
                      {animationProgress > 70 ? "ط" : ""}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4">
                  {!isAnimating ? (
                    <Button 
                      onClick={startAnimation}
                      className="bg-morocco-blue hover:bg-morocco-blue/90 flex items-center gap-2"
                    >
                      <Play size={16} /> Animer "Rabat"
                    </Button>
                  ) : (
                    <Button 
                      onClick={stopAnimation}
                      variant="outline"
                      className="border-morocco-blue text-morocco-blue hover:bg-morocco-blue/10 flex items-center gap-2"
                    >
                      <PauseCircle size={16} /> Pause
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="p-6">
                <h4 className="font-serif text-lg font-semibold mb-3 text-morocco-blue">
                  Styles Calligraphiques
                </h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold mb-1 text-sm">Naskh</div>
                    <div className="h-12 flex items-center justify-center">
                      <p className="text-2xl font-arabic">بسم الله</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      Style clair et lisible utilisé pour les manuscrits du Coran
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold mb-1 text-sm">Diwani</div>
                    <div className="h-12 flex items-center justify-center">
                      <p className="text-2xl font-arabic italic">محمد</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      Style ornemental développé pendant l'Empire ottoman
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold mb-1 text-sm">Thuluth</div>
                    <div className="h-12 flex items-center justify-center">
                      <p className="text-2xl font-arabic font-bold">الله</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      Style majestueux aux lignes allongées et courbes gracieuses
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold mb-1 text-sm">Maghribi</div>
                    <div className="h-12 flex items-center justify-center">
                      <p className="text-2xl font-arabic">المغرب</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      Style développé en Afrique du Nord avec des courbes distinctives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InteractiveSection>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6 text-gray-900">
              Continuez Votre Circuit
            </h2>
            <p className="text-gray-600 mb-8">
              Poursuivez votre exploration des villes impériales du Maroc
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/meknes">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border-2 border-morocco-ochre">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                      alt="Meknès"
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                      <h3 className="text-white font-serif text-xl font-bold">
                        Meknès
                      </h3>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-sm py-1 px-3 rounded-full">
                        Étape Précédente
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <p className="font-serif font-medium text-gray-800">
                      La Ville des Palais
                    </p>
                    <div className="text-morocco-ochre">
                      <ChevronLeft size={20} />
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link to="/marrakech">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border-2 border-morocco-red">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1547995886-6dc09384c6e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                      alt="Marrakech"
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                      <h3 className="text-white font-serif text-xl font-bold">
                        Marrakech
                      </h3>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-sm py-1 px-3 rounded-full">
                        Prochaine Étape
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <p className="font-serif font-medium text-gray-800">
                      Ville Ocre
                    </p>
                    <div className="text-morocco-red">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-14">
        <div className="absolute inset-0 bg-morocco-blue/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-4 max-w-4xl mx-auto">
            <Link to="/meknes">
              <Button variant="outline" className="border-morocco-ochre text-morocco-ochre flex items-center gap-2">
                <ChevronLeft size={20} /> Meknès
              </Button>
            </Link>
            <Link to="/marrakech">
              <Button className="bg-morocco-red hover:bg-morocco-red/90 text-white flex items-center gap-2">
                Marrakech <ChevronRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Rabat;
