
import React, { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer 
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight } from "lucide-react";

// Données pour le parcours animé
const pathData = [
  { x: 0, y: 40, city: "Fès", value: 10 },
  { x: 25, y: 30, city: "Meknès", value: 25 },
  { x: 50, y: 10, city: "Rabat", value: 40 },
  { x: 75, y: 40, city: "Marrakech", value: 60 },
  { x: 100, y: 30, city: "", value: 75 }
];

const cityData = [
  {
    id: "fes",
    name: "Fès",
    title: "La Cité du Savoir",
    color: "green",
    order: 1,
    coordinates: { lat: 34.0181, lng: -5.0078 },
    description: "Première étape de notre voyage impérial, Fès nous plonge dans son patrimoine riche et son artisanat ancestral.",
    highlights: ["Université Al Quaraouiyine", "Médina labyrinthique", "Tanneries traditionnelles"]
  },
  {
    id: "meknes",
    name: "Meknès",
    title: "La Ville des Palais",
    color: "ochre",
    order: 2,
    coordinates: { lat: 33.8731, lng: -5.5407 },
    description: "Deuxième ville impériale, Meknès nous révèle les splendeurs architecturales de l'époque de Moulay Ismaïl.",
    highlights: ["Bab Mansour", "Heri es-Souani", "Mausolée Moulay Ismaïl"]
  },
  {
    id: "rabat",
    name: "Rabat",
    title: "Capitale Moderne",
    color: "blue", 
    order: 3,
    coordinates: { lat: 34.0209, lng: -6.8416 },
    description: "La capitale administrative conjugue patrimoine historique et modernité, entre monuments anciens et art contemporain.",
    highlights: ["Tour Hassan", "Kasbah des Oudayas", "Musée Mohammed VI"]
  },
  {
    id: "marrakech",
    name: "Marrakech",
    title: "Vibrante et Artistique",
    color: "red",
    order: 4,
    coordinates: { lat: 31.6295, lng: -7.9811 },
    description: "Dernière étape du circuit impérial, Marrakech nous éblouit par ses couleurs, ses sons et son énergie créative.",
    highlights: ["Place Jemaa el-Fna", "Palais Bahia", "Jardins Majorelle"]
  }
];

// Données pour les graphiques
const visitorData = [
  { month: "Jan", visitors: 120 },
  { month: "Fév", visitors: 150 },
  { month: "Mar", visitors: 200 },
  { month: "Avr", visitors: 280 },
  { month: "Mai", visitors: 350 },
  { month: "Juin", visitors: 280 },
  { month: "Juil", visitors: 230 },
  { month: "Aoû", visitors: 390 },
  { month: "Sep", visitors: 320 },
  { month: "Oct", visitors: 230 },
  { month: "Nov", visitors: 180 },
  { month: "Déc", visitors: 210 },
];

const Circuit = () => {
  const [currentPathPosition, setCurrentPathPosition] = useState(0);
  const [activeCity, setActiveCity] = useState(cityData[0]);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Animation du parcours
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const elapsed = timestamp - lastTimeRef.current;
      
      if (elapsed > 50) { // Vitesse de l'animation
        lastTimeRef.current = timestamp;
        setCurrentPathPosition((prev) => {
          const newPos = prev + 0.5;
          
          // Mise à jour de la ville active en fonction de la position
          if (newPos > 0 && newPos < 25) setActiveCity(cityData[0]);
          else if (newPos >= 25 && newPos < 50) setActiveCity(cityData[1]);
          else if (newPos >= 50 && newPos < 75) setActiveCity(cityData[2]);
          else if (newPos >= 75) setActiveCity(cityData[3]);
          
          return newPos > 100 ? 0 : newPos;
        });
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Interpolation pour obtenir la position actuelle sur le chemin
  const getCurrentPosition = () => {
    let startIndex = 0;
    let endIndex = 1;
    
    // Trouver les points de début et de fin pour l'interpolation
    for (let i = 0; i < pathData.length - 1; i++) {
      if (currentPathPosition >= pathData[i].x && currentPathPosition <= pathData[i + 1].x) {
        startIndex = i;
        endIndex = i + 1;
        break;
      }
    }
    
    const startPoint = pathData[startIndex];
    const endPoint = pathData[endIndex];
    
    // Calculer le facteur d'interpolation
    const t = (currentPathPosition - startPoint.x) / (endPoint.x - startPoint.x);
    
    // Interpoler les coordonnées
    const x = startPoint.x + t * (endPoint.x - startPoint.x);
    const y = startPoint.y + t * (endPoint.y - startPoint.y);
    
    return { x, y };
  };

  const position = getCurrentPosition();

  return (
    <>
      <Navbar />
      
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Circuit Impérial Marocain
            </h1>
            <p className="text-xl text-gray-700">
              Un voyage à travers les quatre villes historiques qui ont été le siège du pouvoir 
              au cours de l'histoire marocaine : Fès, Meknès, Rabat et Marrakech.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
            <div className="p-6 md:p-8">
              <h2 className="font-serif text-2xl font-semibold mb-6 text-center">
                Parcours Animé des Villes Impériales
              </h2>
              
              <div className="relative h-80 mb-6">
                {/* Graphique principal avec le chemin animé */}
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={pathData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorPath" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="x" hide={true} />
                    <YAxis hide={true} />
                    <RechartsTooltip content={() => null} />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#8884d8" 
                      fillOpacity={1} 
                      fill="url(#colorPath)" 
                      strokeWidth={2}
                    />
                    
                    {/* Points pour les villes */}
                    {pathData.slice(0, 4).map((point, index) => (
                      <g key={index}>
                        <circle 
                          cx={`${point.x}%`} 
                          cy={point.y} 
                          r={activeCity.id === cityData[index].id ? 8 : 6}
                          fill={activeCity.id === cityData[index].id ? `var(--morocco-${cityData[index].color})` : "#fff"}
                          stroke={`var(--morocco-${cityData[index].color})`}
                          strokeWidth={2}
                          className="transition-all duration-300"
                        />
                        <text 
                          x={`${point.x}%`} 
                          y={point.y - 15} 
                          textAnchor="middle" 
                          fill={activeCity.id === cityData[index].id ? `var(--morocco-${cityData[index].color})` : "#555"}
                          fontWeight={activeCity.id === cityData[index].id ? "bold" : "normal"}
                          className="transition-all duration-300"
                        >
                          {point.city}
                        </text>
                      </g>
                    ))}
                    
                    {/* Indicateur animé de la position actuelle */}
                    <circle 
                      cx={`${position.x}%`} 
                      cy={position.y} 
                      r={4} 
                      fill="#f44336"
                    >
                      <animate 
                        attributeName="r" 
                        values="4;6;4" 
                        dur="2s" 
                        repeatCount="indefinite" 
                      />
                      <animate 
                        attributeName="fillOpacity" 
                        values="1;0.8;1" 
                        dur="2s" 
                        repeatCount="indefinite" 
                      />
                    </circle>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              {/* Information sur la ville active */}
              <div className={`p-6 rounded-lg bg-morocco-${activeCity.color}/10 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <div className="flex items-center mb-3 md:mb-0 md:mr-6">
                    <div className={`w-10 h-10 rounded-full bg-morocco-${activeCity.color} flex items-center justify-center text-white font-bold mr-3`}>
                      {activeCity.order}
                    </div>
                    <h3 className="font-serif text-2xl font-semibold">{activeCity.name}</h3>
                  </div>
                  <Badge className={`bg-morocco-${activeCity.color}/20 text-morocco-${activeCity.color} border-morocco-${activeCity.color}`}>
                    {activeCity.title}
                  </Badge>
                </div>
                
                <p className="text-gray-700 mb-4">{activeCity.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeCity.highlights.map((highlight, index) => (
                    <span key={index} className={`px-3 py-1 bg-morocco-${activeCity.color}/10 text-gray-700 rounded-full text-sm flex items-center`}>
                      <MapPin size={14} className="mr-1" />
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <Link to={`/${activeCity.id}`}>
                    <Button className={`bg-morocco-${activeCity.color} hover:bg-morocco-${activeCity.color}/90`}>
                      Explorer {activeCity.name} <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-4">Meilleures Périodes de Visite</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={visitorData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <RechartsTooltip 
                        formatter={(value) => [`${value} milliers`, 'Visiteurs']}
                        labelFormatter={(label) => `${label}`}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="visitors" 
                        stroke="#8884d8" 
                        activeDot={{ r: 8 }} 
                        name="Visiteurs"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">
                  Affluence mensuelle des visiteurs dans les villes impériales (en milliers)
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-4">Itinéraires Recommandés</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                    <div className="w-10 h-10 rounded-full bg-morocco-blue flex items-center justify-center text-white font-bold mr-3">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Circuit Classique (7 jours)</h4>
                      <p className="text-sm text-gray-600">Fès (2j) → Meknès (1j) → Rabat (2j) → Marrakech (2j)</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-gray-400" />
                  </div>
                  
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                    <div className="w-10 h-10 rounded-full bg-morocco-green flex items-center justify-center text-white font-bold mr-3">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Circuit Culturel (10 jours)</h4>
                      <p className="text-sm text-gray-600">Fès (3j) → Meknès (2j) → Rabat (2j) → Marrakech (3j)</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-gray-400" />
                  </div>
                  
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                    <div className="w-10 h-10 rounded-full bg-morocco-red flex items-center justify-center text-white font-bold mr-3">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Circuit Complet (14 jours)</h4>
                      <p className="text-sm text-gray-600">Fès (3j) → Meknès (2j) → Rabat (3j) → Côte Atlantique (2j) → Marrakech (4j)</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-gray-400" />
                  </div>
                  
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                    <div className="w-10 h-10 rounded-full bg-morocco-ochre flex items-center justify-center text-white font-bold mr-3">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Circuit Artistique (12 jours)</h4>
                      <p className="text-sm text-gray-600">Fès (Arts traditionnels, 3j) → Meknès (Architecture, 2j) → Rabat (Art contemporain, 3j) → Marrakech (Arts vivants, 4j)</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-gray-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Link to="/">
              <Button variant="outline" size="lg" className="mr-4">
                Retour à l'Accueil
              </Button>
            </Link>
            <Link to="/fes">
              <Button size="lg">
                Commencer l'Exploration
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Circuit;
