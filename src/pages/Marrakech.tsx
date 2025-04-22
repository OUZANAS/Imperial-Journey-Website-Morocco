
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InteractiveSection from "@/components/InteractiveSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { 
  PieChart, 
  Pie, 
  Cell, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend
} from "recharts";

const COLORS = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6"];

const touristData = [
  { country: "France", visitors: 8200 },
  { country: "Espagne", visitors: 6800 },
  { country: "Allemagne", visitors: 5100 },
  { country: "Royaume-Uni", visitors: 4500 },
];

const experienceData = [
  { subject: 'Gastronomie', A: 120, B: 110, fullMark: 150 },
  { subject: 'Artisanat', A: 98, B: 130, fullMark: 150 },
  { subject: 'Musique', A: 86, B: 130, fullMark: 150 },
  { subject: 'Architecture', A: 99, B: 100, fullMark: 150 },
  { subject: 'Jardin', A: 85, B: 90, fullMark: 150 },
  { subject: 'Hammam', A: 65, B: 85, fullMark: 150 },
];

interface SoundButtonProps {
  soundName: string;
  label: string;
  iconColor: string;
}

const SoundButton: React.FC<SoundButtonProps> = ({ soundName, label, iconColor }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
    // Ici, on simulerait la lecture du son
    console.log(`${isPlaying ? 'Stopping' : 'Playing'} sound: ${soundName}`);
  };

  return (
    <button 
      onClick={toggleSound}
      className={`flex items-center justify-between w-full p-3 rounded-lg transition-all
        ${isPlaying 
          ? `bg-${iconColor}/20 border border-${iconColor}` 
          : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
    >
      <span className="font-medium text-sm">{label}</span>
      <span className={`text-${iconColor}`}>
        {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </span>
    </button>
  );
};

interface SpiceColorPickerProps {
  colors: string[];
  activeColor: string;
  onChange: (color: string) => void;
}

const SpiceColorPicker: React.FC<SpiceColorPickerProps> = ({ colors, activeColor, onChange }) => {
  return (
    <div className="flex space-x-2 my-3">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-8 h-8 rounded-full transition-transform ${activeColor === color ? 'transform scale-125 ring-2 ring-white ring-offset-2' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
          aria-label={`Select color ${color}`}
        />
      ))}
    </div>
  );
};

const Marrakech = () => {
  const [activePerfume, setActivePerfume] = useState<string | null>(null);
  const [spiceColor, setSpiceColor] = useState("#C53030");
  const [backgroundColor, setBackgroundColor] = useState("#FECACA");

  useEffect(() => {
    // Change background color when spice color changes
    switch (spiceColor) {
      case "#C53030": // Rouge
        setBackgroundColor("#FECACA");
        break;
      case "#B45309": // Ocre
        setBackgroundColor("#FDE68A");
        break;
      case "#047857": // Vert
        setBackgroundColor("#A7F3D0");
        break;
      case "#1E40AF": // Bleu
        setBackgroundColor("#BFDBFE");
        break;
      default:
        setBackgroundColor("#FECACA");
    }
  }, [spiceColor]);

  const perfumes = [
    { id: "rose", name: "Rose", color: "morocco-red", description: "Floral et romantique, la rose est l'essence signature des parfums de Marrakech." },
    { id: "orange", name: "Fleur d'Oranger", color: "morocco-ochre", description: "Douce et délicate, apporte une fraîcheur printanière aux compositions." },
    { id: "santal", name: "Bois de Santal", color: "morocco-terracotta", description: "Note de fond chaude et crémeuse, idéale pour les parfums orientaux." },
    { id: "jasmin", name: "Jasmin", color: "morocco-green", description: "Intensément floral, le jasmin est présent dans de nombreux parfums de luxe." },
  ];

  const handlePerfumeClick = (id: string) => {
    setActivePerfume(id === activePerfume ? null : id);
  };

  const soundButtons = [
    { soundName: "market", label: "Sons du souk", iconColor: "morocco-red" },
    { soundName: "gnaoua", label: "Musique Gnaoua", iconColor: "morocco-blue" },
    { soundName: "street", label: "Conteurs de rue", iconColor: "morocco-ochre" },
    { soundName: "drums", label: "Tambours berbères", iconColor: "morocco-green" },
  ];

  return (
    <>
      <Navbar />
      
      <Hero
        title="Marrakech – Vibrante et Artistique"
        subtitle="Ressentez l'effervescence de la place Jemaa el-Fna, vivez musique, spectacles & artisanat berbère à Marrakech."
        backgroundImage="https://images.unsplash.com/photo-1519110196045-43ad19b0c97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        buttonText="Explorer Marrakech"
        buttonLink="#explore"
        height="large"
      />
      
      <section id="explore" className="py-16 bg-morocco-red/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-4">
                Journal de Bord - La Ville Rouge
              </h2>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 py-4">
                <div className="w-full md:w-1/3 text-center">
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-morocco-red/20 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-morocco-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">Où Sommes-Nous</h3>
                  <p className="text-gray-600 mt-2">
                    Dernière étape du circuit impérial, au pied du Haut-Atlas.
                  </p>
                </div>
                
                <div className="w-full md:w-1/3 text-center">
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-morocco-red/20 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-morocco-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">À Découvrir</h3>
                  <p className="text-gray-600 mt-2">
                    Place Jemaa el-Fna, médina labyrinthique, Jardin Majorelle, souks animés.
                  </p>
                </div>
                
                <div className="w-full md:w-1/3 text-center">
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-morocco-red/20 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-morocco-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">Expériences</h3>
                  <p className="text-gray-600 mt-2">
                    Musique gnaoua, gastronomie, artisanat, parfums et traditions berbères.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 mb-12">
              <iframe
                className="w-full h-[400px] rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/pPyVG0OfFDM"
                title="Découvrir Marrakech"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <InteractiveSection
        title="Place Jemaa el-Fna - Le Cœur Battant"
        subtitle="Une symphonie vivante de sons, de couleurs et de saveurs qui ne s'arrête jamais"
      >
        <div className="mb-10">
          <ChartContainer
            className="h-[400px]"
            config={{
              "France": { color: "#EF4444" },
              "Espagne": { color: "#F59E0B" },
              "Allemagne": { color: "#10B981" },
              "Royaume-Uni": { color: "#3B82F6" },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={touristData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="visitors"
                >
                  {touristData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  content={({ payload }) => {
                    if (payload && payload.length) {
                      return (
                        <div className="bg-white p-3 border rounded shadow">
                          <p className="font-bold">{payload[0].name}</p>
                          <p>Visiteurs: {payload[0].value}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
          <p className="text-center text-sm text-gray-500 mt-2">Principaux pays d'origine des visiteurs de Marrakech</p>
        </div>

        <Tabs defaultValue="spectacles" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="spectacles">Spectacles</TabsTrigger>
            <TabsTrigger value="gastro">Gastronomie</TabsTrigger>
            <TabsTrigger value="artisanat">Artisanat</TabsTrigger>
          </TabsList>
          
          <TabsContent value="spectacles" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-red">
                  Les Halkas - Cercles de Spectacles
                </h3>
                <p className="text-gray-700 mb-4">
                  Sur la place Jemaa el-Fna, les conteurs, acrobates, charmeurs de serpents et musiciens forment des cercles appelés "halkas" où les spectateurs se rassemblent pour profiter du spectacle.
                </p>
                <p className="text-gray-700 mb-4">
                  Ces traditions orales perpétuent des histoires anciennes et des légendes marocaines transmises de génération en génération.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-morocco-red mr-2">●</span>
                    <span>Conteurs traditionnels (Hakawati)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-red mr-2">●</span>
                    <span>Acrobates berbères et jongleurs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-red mr-2">●</span>
                    <span>Musiciens Gnaoua aux rythmes hypnotiques</span>
                  </li>
                </ul>
                <div className="grid grid-cols-2 gap-3">
                  {soundButtons.slice(0, 2).map(button => (
                    <SoundButton 
                      key={button.soundName}
                      soundName={button.soundName}
                      label={button.label}
                      iconColor={button.iconColor}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Spectacles sur Jemaa el-Fna" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519110196045-43ad19b0c97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Musiciens traditionnels" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-red">
                  La Musique Omniprésente
                </h3>
                <p className="text-gray-700 mb-4">
                  La place s'anime de sons de tambours, de flûtes et d'instruments à cordes jouant des rythmes traditionnels berbères, arabes et gnaouas.
                </p>
                <p className="text-gray-700 mb-4">
                  Chaque soir, des groupes de musiciens transforment la place en une scène à ciel ouvert où les traditions musicales ancestrales rencontrent les influences contemporaines.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {soundButtons.slice(2, 4).map(button => (
                    <SoundButton 
                      key={button.soundName}
                      soundName={button.soundName}
                      label={button.label}
                      iconColor={button.iconColor}
                    />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="gastro" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-red">
                  Le Grand Restaurant en Plein Air
                </h3>
                <p className="text-gray-700 mb-4">
                  Chaque soir, la place Jemaa el-Fna se transforme en un immense restaurant à ciel ouvert où des dizaines de stands proposent une variété de plats traditionnels marocains.
                </p>
                <p className="text-gray-700 mb-4">
                  Des brochettes grillées aux escargots, en passant par les soupes harira et les desserts sucrés, c'est une véritable fête pour les papilles.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-morocco-red mr-2">●</span>
                    <span>Tajines mijotés aux épices parfumées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-red mr-2">●</span>
                    <span>Couscous traditionnels du vendredi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-red mr-2">●</span>
                    <span>Jus d'orange frais pressés à la demande</span>
                  </li>
                </ul>
                <div>
                  <h4 className="font-medium text-sm mb-2">Palette d'épices</h4>
                  <SpiceColorPicker 
                    colors={["#C53030", "#B45309", "#047857", "#1E40AF"]}
                    activeColor={spiceColor}
                    onChange={setSpiceColor}
                  />
                  <div 
                    className="p-3 rounded-lg mt-3 transition-colors duration-500"
                    style={{ backgroundColor: backgroundColor }}
                  >
                    <div className="flex items-center">
                      <div 
                        className="w-6 h-6 rounded-full mr-2"
                        style={{ backgroundColor: spiceColor }}
                      />
                      <span className="font-medium">
                        {spiceColor === "#C53030" && "Paprika pimenté"}
                        {spiceColor === "#B45309" && "Curcuma doré"}
                        {spiceColor === "#047857" && "Coriandre fraîche"}
                        {spiceColor === "#1E40AF" && "Cumin aromatique"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Cuisine de rue à Marrakech" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="artisanat" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-red">
                  Les Trésors des Souks
                </h3>
                <p className="text-gray-700 mb-4">
                  Autour de la place Jemaa el-Fna s'étend un labyrinthe de souks où les artisans perpétuent des techniques vieilles de plusieurs siècles.
                </p>
                <p className="text-gray-700 mb-4">
                  Chaque quartier est spécialisé dans un artisanat particulier : le cuir, le métal, le bois, les textiles ou encore la poterie.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-morocco-red mr-2">●</span>
                    <span>Tapis berbères aux motifs géométriques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-red mr-2">●</span>
                    <span>Lanternes en métal ajouré</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-red mr-2">●</span>
                    <span>Marqueterie et objets en bois de thuya</span>
                  </li>
                </ul>
                <Button className="bg-morocco-red hover:bg-morocco-red/90">
                  Parcours des Artisans
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560805966-c349181fca2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Artisanat marocain" 
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
                Radar des Expériences Sensorielles
              </h2>
              <p className="text-xl text-gray-300">
                Comparaison entre l'intensité ressentie par les touristes et les locaux
              </p>
            </div>
            
            <ChartContainer
              className="h-[400px]"
              config={{
                "A": { color: "#F87171" },
                "B": { color: "#FBBF24" },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={150} data={experienceData}>
                  <PolarGrid stroke="#666" />
                  <PolarAngleAxis dataKey="subject" stroke="#FFF" />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#FFF" />
                  <Radar
                    name="Touristes"
                    dataKey="A"
                    stroke="#F87171"
                    fill="#F87171"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Locaux"
                    dataKey="B"
                    stroke="#FBBF24"
                    fill="#FBBF24"
                    fillOpacity={0.6}
                  />
                  <RechartsTooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-gray-800 p-3 border border-gray-700 rounded shadow">
                            <p className="font-bold text-white">{payload[0].payload.subject}</p>
                            <p className="text-[#F87171]">
                              Touristes: {payload[0].value}
                            </p>
                            <p className="text-[#FBBF24]">
                              Locaux: {payload[1].value}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <RechartsLegend 
                    content={(props) => {
                      const { payload } = props;
                      return (
                        <div className="flex justify-center space-x-8 mt-4">
                          {payload?.map((entry, index) => (
                            <div key={`item-${index}`} className="flex items-center">
                              <div 
                                className="w-3 h-3 mr-2"
                                style={{ backgroundColor: entry.color }}
                              />
                              <span className="text-white text-sm">
                                {entry.value === "A" ? "Touristes" : "Locaux"}
                              </span>
                            </div>
                          ))}
                        </div>
                      );
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </section>
      
      <InteractiveSection
        title="L'Art du Parfum"
        subtitle="Découvrez les essences qui composent les fragrances emblématiques de Marrakech"
        className="bg-morocco-red/10"
      >
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-red">
                Les Parfumeurs de Marrakech
              </h3>
              <p className="text-gray-700 mb-4">
                L'art du parfum est profondément enraciné dans la culture marocaine. Dans les souks de Marrakech, les parfumeurs traditionnels, appelés "attarine", créent des fragrances uniques à partir d'essences naturelles.
              </p>
              <p className="text-gray-700 mb-4">
                De la rose de Dadès à l'ambre, en passant par le bois de cèdre et le musc, ces maîtres composent des parfums qui racontent des histoires et éveillent les sens.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                {perfumes.map((perfume) => (
                  <div 
                    key={perfume.id}
                    className={`rounded-lg p-4 cursor-pointer transition-all duration-300 
                      ${activePerfume === perfume.id 
                        ? `bg-${perfume.color}/20 border border-${perfume.color} shadow-md` 
                        : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'}`}
                    onClick={() => handlePerfumeClick(perfume.id)}
                  >
                    <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-xl bg-${perfume.color}/40`}>
                      ✿
                    </div>
                    <h4 className="text-center font-medium text-sm">
                      {perfume.name}
                    </h4>
                  </div>
                ))}
              </div>
              
              {activePerfume && (
                <div className={`p-4 rounded-lg bg-${perfumes.find(p => p.id === activePerfume)?.color}/10 border border-${perfumes.find(p => p.id === activePerfume)?.color}/30 animate-fade-in mb-6`}>
                  <h4 className="font-medium mb-2">
                    {perfumes.find(p => p.id === activePerfume)?.name}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {perfumes.find(p => p.id === activePerfume)?.description}
                  </p>
                </div>
              )}
              
              <Button className="bg-morocco-red hover:bg-morocco-red/90">
                Créer Votre Parfum
              </Button>
            </div>
            
            <div className="lg:col-span-2 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1505575967455-40e256ab47e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Parfumerie traditionnelle"
                className="w-full h-96 object-cover rounded-t-xl"
              />
              <div className="p-4 bg-morocco-sand/30">
                <h4 className="font-serif text-lg font-semibold mb-2">
                  Savoir-faire ancestral
                </h4>
                <p className="text-sm text-gray-700">
                  Les techniques d'extraction des essences et de composition des parfums se transmettent de génération en génération. Chaque parfumeur détient ses propres secrets et recettes.
                </p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-morocco-red/20 flex items-center justify-center mx-auto">
                      <span className="text-morocco-red text-xs">10+</span>
                    </div>
                    <p className="text-xs mt-1">Essences</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-morocco-red/20 flex items-center justify-center mx-auto">
                      <span className="text-morocco-red text-xs">8h</span>
                    </div>
                    <p className="text-xs mt-1">Préparation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-morocco-red/20 flex items-center justify-center mx-auto">
                      <span className="text-morocco-red text-xs">3+</span>
                    </div>
                    <p className="text-xs mt-1">Années</p>
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
              Fin du Circuit Impérial
            </h2>
            <p className="text-gray-600 mb-8">
              Vous avez terminé votre exploration des villes impériales du Maroc
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/rabat">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border-2 border-morocco-blue">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                      alt="Rabat"
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                      <h3 className="text-white font-serif text-xl font-bold">
                        Rabat
                      </h3>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-sm py-1 px-3 rounded-full">
                        Étape Précédente
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <p className="font-serif font-medium text-gray-800">
                      Capitale Moderne
                    </p>
                    <div className="text-morocco-blue">
                      <ChevronLeft size={20} />
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link to="/">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border-2 border-morocco-green">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1517821099606-cef63a9dcb9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                      alt="Accueil"
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                      <h3 className="text-white font-serif text-xl font-bold">
                        Accueil
                      </h3>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-sm py-1 px-3 rounded-full">
                        Retour
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <p className="font-serif font-medium text-gray-800">
                      Circuit Impérial
                    </p>
                    <div className="text-morocco-green">
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
        <div className="absolute inset-0 bg-morocco-red/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-4 max-w-4xl mx-auto">
            <Link to="/rabat">
              <Button variant="outline" className="border-morocco-blue text-morocco-blue flex items-center gap-2">
                <ChevronLeft size={20} /> Rabat
              </Button>
            </Link>
            <Link to="/">
              <Button className="bg-morocco-green hover:bg-morocco-green/90 text-white flex items-center gap-2">
                Retour accueil <ChevronRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Marrakech;
