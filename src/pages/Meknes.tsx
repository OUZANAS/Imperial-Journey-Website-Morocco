
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InteractiveSection from "@/components/InteractiveSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const COLORS = ["#E9B949", "#D97706", "#B45309", "#92400E", "#7C2D12"];

const imperialHeritageData = [
  { name: "Bab Mansour", value: 35 },
  { name: "Grenier Royal", value: 25 },
  { name: "Heri Souani", value: 15 },
  { name: "Médina", value: 15 },
  { name: "Koubbat As-Sufara", value: 10 },
];

const tourismData = [
  { name: "Jan", monuments: 2400, culture: 1400 },
  { name: "Fév", monuments: 1398, culture: 1800 },
  { name: "Mar", monuments: 9800, culture: 7000 },
  { name: "Avr", monuments: 3908, culture: 5800 },
  { name: "Mai", monuments: 4800, culture: 4800 },
  { name: "Juin", monuments: 3800, culture: 6800 },
];

interface DraggableItemProps {
  id: string;
  children: React.ReactNode;
  onDragStart: (e: React.DragEvent, id: string) => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, children, onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      className="p-3 bg-white border border-morocco-ochre/50 rounded-lg shadow-sm cursor-move flex items-center justify-center transition-all hover:shadow-md"
    >
      {children}
    </div>
  );
};

interface DropZoneProps {
  id: string;
  onDrop: (e: React.DragEvent, zoneId: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  children?: React.ReactNode;
  isCorrect: boolean;
  hasItem: boolean;
}

const DropZone: React.FC<DropZoneProps> = ({ id, onDrop, onDragOver, children, isCorrect, hasItem }) => {
  return (
    <div
      onDrop={(e) => onDrop(e, id)}
      onDragOver={onDragOver}
      className={`border-2 border-dashed rounded-lg p-4 min-h-[100px] flex items-center justify-center transition-colors
        ${hasItem ? 'border-solid' : 'border-dashed'} 
        ${hasItem && isCorrect ? 'bg-green-100 border-green-500' : ''} 
        ${hasItem && !isCorrect ? 'bg-red-100 border-red-500' : ''} 
        ${!hasItem ? 'bg-gray-50 border-gray-300' : ''}`}
    >
      {children || (
        <p className="text-gray-500 text-center text-sm">
          {hasItem ? "" : "Déposez un élément ici"}
        </p>
      )}
    </div>
  );
};

const Meknes = () => {
  const [draggedItems, setDraggedItems] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const correctPlacements = {
    "zone1": "item1", // Dôme
    "zone2": "item3", // Porte
    "zone3": "item2", // Arcades
    "zone4": "item4", // Mosaïque
  };

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, zoneId: string) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('text/plain');
    
    // Remove item from previous zone if it exists
    const updatedItems = { ...draggedItems };
    Object.keys(updatedItems).forEach(key => {
      if (updatedItems[key] === itemId) {
        delete updatedItems[key];
      }
    });
    
    // Add to new zone
    updatedItems[zoneId] = itemId;
    setDraggedItems(updatedItems);
    
    // Calculate score
    let newScore = 0;
    Object.entries(updatedItems).forEach(([zone, item]) => {
      if (correctPlacements[zone as keyof typeof correctPlacements] === item) {
        newScore++;
      }
    });
    
    setScore(newScore);
    
    if (newScore === 4) {
      setShowSuccess(true);
    }
  };

  const isZoneCorrect = (zoneId: string) => {
    const itemInZone = draggedItems[zoneId];
    return itemInZone && correctPlacements[zoneId as keyof typeof correctPlacements] === itemInZone;
  };

  const hasItem = (zoneId: string) => {
    return Boolean(draggedItems[zoneId]);
  };

  const getItemInZone = (zoneId: string) => {
    const itemId = draggedItems[zoneId];
    if (itemId === "item1") return <div className="w-16 h-16 bg-morocco-ochre rounded-full"></div>;
    if (itemId === "item2") return <div className="w-16 h-16 flex justify-between"><div className="w-3 h-full bg-morocco-ochre"></div><div className="w-3 h-full bg-morocco-ochre"></div><div className="w-3 h-full bg-morocco-ochre"></div></div>;
    if (itemId === "item3") return <div className="w-16 h-16 border-4 border-morocco-ochre rounded-t-xl"></div>;
    if (itemId === "item4") return <div className="w-16 h-16 bg-morocco-ochre grid grid-cols-4 grid-rows-4 gap-0.5 p-1">{Array(16).fill(0).map((_, i) => <div key={i} className="bg-white"></div>)}</div>;
    return null;
  };

  const resetGame = () => {
    setDraggedItems({});
    setScore(0);
    setShowSuccess(false);
  };

  return (
    <>
      <Navbar />
      
      <Hero
        title="Meknès - La Ville des Palais"
        subtitle="Découvrez Bab Mansour et le patrimoine unique de Meknès, entre héritage impérial et traditions populaires."
        backgroundImage="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        buttonText="Explorer Meknès"
        buttonLink="#explore"
        height="large"
      />
      
      <section id="explore" className="py-16 bg-morocco-sand/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-4">
                Journal de Bord Impérial
              </h2>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 py-4">
                <div className="w-full md:w-1/3 text-center">
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-morocco-ochre/20 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-morocco-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">Où Sommes-Nous</h3>
                  <p className="text-gray-600 mt-2">
                    Deuxième étape du circuit impérial, à 60 km à l'ouest de Fès.
                  </p>
                </div>
                
                <div className="w-full md:w-1/3 text-center">
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-morocco-ochre/20 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-morocco-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">À Découvrir</h3>
                  <p className="text-gray-600 mt-2">
                    Bab Mansour, greniers royaux, écuries impériales et médina authentique.
                  </p>
                </div>
                
                <div className="w-full md:w-1/3 text-center">
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-morocco-ochre/20 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-morocco-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">Expériences</h3>
                  <p className="text-gray-600 mt-2">
                    Architecture monumentale, artisanat traditionnel et halqa (spectacles de rue).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 mb-12">
              <iframe
                className="w-full h-[400px] rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/KT7OCLhL5UM"
                title="Découvrir Meknès"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <InteractiveSection
        title="Patrimoine Impérial"
        subtitle="Explorez les sites majeurs de l'héritage de Moulay Ismaïl, le Sultan bâtisseur"
      >
        <div className="mb-10">
          <ChartContainer
            className="h-[400px]"
            config={{
              "monuments": { color: "#D97706" },
              "culture": { color: "#92400E" },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={imperialHeritageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {imperialHeritageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  content={({ payload }) => {
                    if (payload && payload.length) {
                      return (
                        <div className="bg-white p-3 border rounded shadow">
                          <p className="font-bold">{payload[0].name}</p>
                          <p>Importance: {payload[0].value}%</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <Tabs defaultValue="bab-mansour" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="bab-mansour">Bab Mansour</TabsTrigger>
            <TabsTrigger value="greniers">Greniers Royaux</TabsTrigger>
            <TabsTrigger value="medina">Médina</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bab-mansour" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-ochre">
                  La Porte Monumentale
                </h3>
                <p className="text-gray-700 mb-4">
                  Bab Mansour est considérée comme l'une des plus belles portes monumentales du Maroc et même d'Afrique du Nord. Construite entre 1732 et 1733 sous le règne de Moulay Ismaïl, elle fut achevée par son fils Moulay Abdallah.
                </p>
                <p className="text-gray-700 mb-4">
                  Son nom vient de son architecte, El-Mansour, un chrétien converti à l'Islam. La porte est ornée de colonnes de marbre provenant des ruines romaines de Volubilis.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-morocco-ochre mr-2">●</span>
                    <span>Mosaïques complexes en zellige et calligraphie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-ochre mr-2">●</span>
                    <span>Colonnes corinthiennes en marbre de Volubilis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-ochre mr-2">●</span>
                    <span>Symbolique de puissance et raffinement architectural</span>
                  </li>
                </ul>
                <Button className="bg-morocco-ochre hover:bg-morocco-ochre/90">
                  Visiter en 360°
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Bab Mansour" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="greniers" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-ochre">
                  Heri Souani - Les Greniers
                </h3>
                <p className="text-gray-700 mb-4">
                  Les Greniers Royaux, ou Heri Souani, constituaient une structure ingénieuse servant à stocker d'immenses quantités de grains et de fourrage pour l'armée et la population en cas de siège.
                </p>
                <p className="text-gray-700 mb-4">
                  Ce bâtiment massif était doté d'un système de ventilation naturelle qui permettait de conserver les provisions au frais et au sec pendant des années.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-morocco-ochre mr-2">●</span>
                    <span>Architecture fonctionnelle avant-gardiste</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-ochre mr-2">●</span>
                    <span>Système de refroidissement naturel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-ochre mr-2">●</span>
                    <span>Capacité de stockage pour plusieurs années</span>
                  </li>
                </ul>
                <Button className="bg-morocco-ochre hover:bg-morocco-ochre/90">
                  Explorer l'Architecture
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1532453288350-76a6e8d563f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Greniers de Heri Souani" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="medina" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-ochre">
                  Médina Authentique
                </h3>
                <p className="text-gray-700 mb-4">
                  Moins touristique que celle de Fès, la médina de Meknès offre une expérience plus authentique de la vie marocaine. Ses ruelles étroites regorgent d'artisans perpétuant des techniques ancestrales.
                </p>
                <p className="text-gray-700 mb-4">
                  Entourée de remparts imposants qui s'étendent sur plus de 40 km, elle abrite de nombreux souks, ateliers d'artisanat et pâtisseries traditionnelles.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-morocco-ochre mr-2">●</span>
                    <span>Souks authentiques sans foule touristique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-ochre mr-2">●</span>
                    <span>Artisans du damasquinage et du travail du cuivre</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-ochre mr-2">●</span>
                    <span>Pâtisseries traditionnelles renommées</span>
                  </li>
                </ul>
                <Button className="bg-morocco-ochre hover:bg-morocco-ochre/90">
                  Parcours Découverte
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Médina de Meknès" 
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
                Fréquentation Touristique
              </h2>
              <p className="text-xl text-gray-300">
                Évolution des visites par type d'attraction à Meknès
              </p>
            </div>
            
            <ChartContainer
              className="h-[400px]"
              config={{
                "monuments": { color: "#FFB86C" },
                "culture": { color: "#BD93F9" },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={tourismData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
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
                            <p className="font-bold text-white">{label}</p>
                            <p className="text-[#FFB86C]">
                              Monuments: {payload[0].value} visiteurs
                            </p>
                            <p className="text-[#BD93F9]">
                              Événements culturels: {payload[1].value} visiteurs
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend />
                  <Bar dataKey="monuments" name="Monuments" fill="#FFB86C" />
                  <Bar dataKey="culture" name="Événements culturels" fill="#BD93F9" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </section>
      
      <InteractiveSection
        title="Jeu: Reconstruisez Bab Mansour"
        subtitle="Testez vos connaissances architecturales en plaçant les éléments au bon endroit"
        className="bg-morocco-sand/10"
      >
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="mb-6 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="font-medium">Score: {score}/4</div>
              <Button 
                variant="outline" 
                onClick={resetGame}
                className="text-morocco-ochre border-morocco-ochre"
              >
                Réinitialiser
              </Button>
            </div>
            
            {showSuccess && (
              <div className="bg-green-100 border border-green-500 text-green-700 p-4 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Félicitations ! Vous avez correctement reconstruit Bab Mansour !
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-morocco-ochre">Éléments à placer</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {!Object.values(draggedItems).includes("item1") && (
                      <DraggableItem id="item1" onDragStart={handleDragStart}>
                        <div className="w-16 h-16 bg-morocco-ochre rounded-full"></div>
                        <span className="ml-2">Dôme</span>
                      </DraggableItem>
                    )}
                    {!Object.values(draggedItems).includes("item2") && (
                      <DraggableItem id="item2" onDragStart={handleDragStart}>
                        <div className="w-16 h-16 flex justify-between">
                          <div className="w-3 h-full bg-morocco-ochre"></div>
                          <div className="w-3 h-full bg-morocco-ochre"></div>
                          <div className="w-3 h-full bg-morocco-ochre"></div>
                        </div>
                        <span className="ml-2">Arcades</span>
                      </DraggableItem>
                    )}
                    {!Object.values(draggedItems).includes("item3") && (
                      <DraggableItem id="item3" onDragStart={handleDragStart}>
                        <div className="w-16 h-16 border-4 border-morocco-ochre rounded-t-xl"></div>
                        <span className="ml-2">Porte</span>
                      </DraggableItem>
                    )}
                    {!Object.values(draggedItems).includes("item4") && (
                      <DraggableItem id="item4" onDragStart={handleDragStart}>
                        <div className="w-16 h-16 bg-morocco-ochre grid grid-cols-4 grid-rows-4 gap-0.5 p-1">
                          {Array(16).fill(0).map((_, i) => (
                            <div key={i} className="bg-white"></div>
                          ))}
                        </div>
                        <span className="ml-2">Mosaïque</span>
                      </DraggableItem>
                    )}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-serif text-lg font-semibold mb-3 text-morocco-ochre">Instructions</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Faites glisser les éléments architecturaux vers les zones correspondantes pour reconstruire la porte Bab Mansour.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-center">
                      <span className="text-morocco-ochre mr-2">•</span>
                      Le dôme se place au sommet
                    </li>
                    <li className="flex items-center">
                      <span className="text-morocco-ochre mr-2">•</span>
                      La mosaïque décore les façades
                    </li>
                    <li className="flex items-center">
                      <span className="text-morocco-ochre mr-2">•</span>
                      Les arcades soutiennent la structure
                    </li>
                    <li className="flex items-center">
                      <span className="text-morocco-ochre mr-2">•</span>
                      La porte est l'élément central
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-morocco-ochre">Bab Mansour</h3>
                <div className="border border-morocco-ochre/50 rounded-lg p-4 bg-gray-50">
                  <div className="grid grid-rows-4 gap-4">
                    <DropZone
                      id="zone1"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      isCorrect={isZoneCorrect("zone1")}
                      hasItem={hasItem("zone1")}
                    >
                      {getItemInZone("zone1")}
                    </DropZone>
                    
                    <DropZone
                      id="zone4"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      isCorrect={isZoneCorrect("zone4")}
                      hasItem={hasItem("zone4")}
                    >
                      {getItemInZone("zone4")}
                    </DropZone>
                    
                    <DropZone
                      id="zone2"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      isCorrect={isZoneCorrect("zone2")}
                      hasItem={hasItem("zone2")}
                    >
                      {getItemInZone("zone2")}
                    </DropZone>
                    
                    <DropZone
                      id="zone3"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      isCorrect={isZoneCorrect("zone3")}
                      hasItem={hasItem("zone3")}
                    >
                      {getItemInZone("zone3")}
                    </DropZone>
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
              <Link to="/fes">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border-2 border-morocco-green">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                      alt="Fès"
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                      <h3 className="text-white font-serif text-xl font-bold">
                        Fès
                      </h3>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-sm py-1 px-3 rounded-full">
                        Étape Précédente
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <p className="font-serif font-medium text-gray-800">
                      La Cité du Savoir
                    </p>
                    <div className="text-morocco-green">
                      <ChevronLeft size={20} />
                    </div>
                  </div>
                </div>
              </Link>
              
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
                        Prochaine Étape
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <p className="font-serif font-medium text-gray-800">
                      Capitale Moderne
                    </p>
                    <div className="text-morocco-blue">
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
        <div className="absolute inset-0 bg-morocco-ochre/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-4 max-w-4xl mx-auto">
            <Link to="/fes">
              <Button variant="outline" className="border-morocco-green text-morocco-green flex items-center gap-2">
                <ChevronLeft size={20} /> Fès
              </Button>
            </Link>
            <Link to="/rabat">
              <Button className="bg-morocco-blue hover:bg-morocco-blue/90 text-white flex items-center gap-2">
                Rabat <ChevronRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Meknes;
