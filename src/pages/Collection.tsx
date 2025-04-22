
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Tooltip as RechartsTooltip
} from "recharts";

// Données des collections
const COLORS = ["#10B981", "#F59E0B", "#3B82F6", "#EF4444"];

const cityCollectibles = [
  { name: "Fès", value: 12, collected: 4 },
  { name: "Meknès", value: 8, collected: 2 },
  { name: "Rabat", value: 10, collected: 3 },
  { name: "Marrakech", value: 12, collected: 5 },
];

const collectibles = [
  {
    id: 1,
    name: "Porte Bab Boujloud",
    city: "Fès",
    category: "Monument",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "La porte bleue emblématique de la médina de Fès, construite en 1913.",
    collected: true
  },
  {
    id: 2,
    name: "Medersa Bou Inania",
    city: "Fès",
    category: "Monument",
    image: "https://images.unsplash.com/photo-1626108870346-b113cb168a95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "École coranique fondée en 1351, chef-d'œuvre de l'architecture mérinide.",
    collected: true
  },
  {
    id: 3,
    name: "Tanneries Chouara",
    city: "Fès",
    category: "Artisanat",
    image: "https://images.unsplash.com/photo-1537634205471-a679adb3959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Les tanneries millénaires où se perpétue la tradition du cuir marocain.",
    collected: true
  },
  {
    id: 4,
    name: "Place Nejjarine",
    city: "Fès",
    category: "Monument",
    image: "https://images.unsplash.com/photo-1512813498716-3e640fed3f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Place ornée d'une magnifique fontaine et entourée d'ateliers de menuisiers.",
    collected: true
  },
  {
    id: 5,
    name: "Bab Mansour",
    city: "Meknès",
    category: "Monument",
    image: "https://images.unsplash.com/photo-1579019243425-45ab8d8580fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "La plus imposante porte du Maroc, construite sous le règne de Moulay Ismaïl.",
    collected: true
  },
  {
    id: 6,
    name: "Grenier Heri es-Souani",
    city: "Meknès",
    category: "Monument",
    image: "https://images.unsplash.com/photo-1594311601064-d374df526626?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Anciennes écuries royales et greniers souterrains à l'architecture impressionnante.",
    collected: true
  },
  {
    id: 7,
    name: "Tour Hassan",
    city: "Rabat",
    category: "Monument",
    image: "https://images.unsplash.com/photo-1577494200743-4d58a69b6d83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Minaret inachevé du XIIe siècle et emblème de la capitale marocaine.",
    collected: true
  },
  {
    id: 8,
    name: "Kasbah des Oudayas",
    city: "Rabat",
    category: "Monument",
    image: "https://images.unsplash.com/photo-1580877854178-95067799fb4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Ancienne forteresse offrant une vue imprenable sur l'océan Atlantique.",
    collected: true
  },
  {
    id: 9,
    name: "Musée Mohammed VI",
    city: "Rabat",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1572946598531-c20fbae6ec6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Musée d'art moderne et contemporain inauguré en 2014.",
    collected: true
  },
  {
    id: 10,
    name: "Koutoubia",
    city: "Marrakech",
    category: "Monument",
    image: "https://images.unsplash.com/photo-1539020140153-e069e36d287c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Minaret emblématique de Marrakech, construit au XIIe siècle.",
    collected: true
  },
  {
    id: 11,
    name: "Place Jemaa el-Fna",
    city: "Marrakech",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1510992107199-28fe7a1bf51e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Place historique et animation permanente, inscrite au patrimoine de l'UNESCO.",
    collected: true
  },
  {
    id: 12,
    name: "Palais Bahia",
    city: "Marrakech",
    category: "Monument",
    image: "https://images.unsplash.com/photo-1588855198509-013b6b29cb8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Joyau architectural du XIXe siècle avec jardins et cours intérieures.",
    collected: true
  },
  {
    id: 13,
    name: "Jardins Majorelle",
    city: "Marrakech",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1535916707207-35025f9f2c1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Oasis urbaine créée par Jacques Majorelle et sauvée par Yves Saint Laurent.",
    collected: true
  },
  {
    id: 14,
    name: "Musée du Tapis",
    city: "Marrakech",
    category: "Artisanat",
    image: "https://images.unsplash.com/photo-1584278860437-ef1094fb2f48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Collection de tapis traditionnels berbères et techniques de tissage.",
    collected: true
  },
];

const Collection = () => {
  const [filter, setFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCollectibles = collectibles.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "Tous" || item.city === filter;
    
    return matchesSearch && matchesFilter;
  });
  
  const totalCollected = cityCollectibles.reduce((acc, city) => acc + city.collected, 0);
  const totalCollectibles = cityCollectibles.reduce((acc, city) => acc + city.value, 0);
  const progressPercentage = Math.round((totalCollected / totalCollectibles) * 100);

  return (
    <>
      <Navbar />
      
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">
              Votre Journal de Voyage
            </h1>
            <p className="text-xl text-gray-700 text-center mb-8">
              Suivez votre progression et collectionnez les trésors des villes impériales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <Card className="h-full">
                <CardContent className="p-6">
                  <h2 className="font-serif text-2xl font-semibold mb-4">
                    Votre Progression
                  </h2>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold mr-4">
                      {progressPercentage}%
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Collections</span>
                        <span>{totalCollected}/{totalCollectibles}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-morocco-blue h-2.5 rounded-full" 
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {cityCollectibles.map((city, index) => (
                      <div key={city.name} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white mr-3"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                          >
                            {city.collected}
                          </div>
                          <h3 className="font-medium">{city.name}</h3>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full" 
                            style={{ 
                              width: `${(city.collected / city.value) * 100}%`,
                              backgroundColor: COLORS[index % COLORS.length]
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>{city.collected} collectés</span>
                          <span>{city.value} total</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="font-serif text-2xl font-semibold mb-4">
                  Collections par Ville
                </h2>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={cityCollectibles}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="collected"
                        nameKey="name"
                      >
                        {cityCollectibles.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <RechartsTooltip 
                        formatter={(value, name) => [`${value} collectés`, name]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {cityCollectibles.map((city, index) => (
                    <div key={city.name} className="flex items-center">
                      <span 
                        className="w-3 h-3 mr-2 rounded-full" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></span>
                      <span className="text-sm">{city.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
                <h2 className="font-serif text-2xl font-semibold mb-4 md:mb-0">
                  Vos Collections
                </h2>
                
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-morocco-blue/50"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-morocco-blue/50"
                  >
                    <option value="Tous">Toutes les villes</option>
                    <option value="Fès">Fès</option>
                    <option value="Meknès">Meknès</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Marrakech">Marrakech</option>
                  </select>
                </div>
              </div>
              
              <Tabs defaultValue="all">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">Tous</TabsTrigger>
                  <TabsTrigger value="monuments">Monuments</TabsTrigger>
                  <TabsTrigger value="culture">Culture</TabsTrigger>
                  <TabsTrigger value="artisanat">Artisanat</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="space-y-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCollectibles.map(item => (
                      <Card key={item.id} className={`overflow-hidden transition-all duration-300 ${item.collected ? 'border-morocco-green' : 'opacity-60'}`}>
                        <div className="relative h-48">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                          {item.collected && (
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-morocco-green">Collecté</Badge>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-serif text-lg font-semibold">{item.name}</h3>
                            <Badge variant="outline" className={`bg-morocco-${item.city === "Fès" ? "green" : item.city === "Meknès" ? "ochre" : item.city === "Rabat" ? "blue" : "red"}/10`}>
                              {item.city}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                          <Badge variant="secondary">{item.category}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="monuments" className="space-y-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCollectibles.filter(item => item.category === "Monument").map(item => (
                      <Card key={item.id} className={`overflow-hidden transition-all duration-300 ${item.collected ? 'border-morocco-green' : 'opacity-60'}`}>
                        <div className="relative h-48">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                          {item.collected && (
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-morocco-green">Collecté</Badge>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-serif text-lg font-semibold">{item.name}</h3>
                            <Badge variant="outline" className={`bg-morocco-${item.city === "Fès" ? "green" : item.city === "Meknès" ? "ochre" : item.city === "Rabat" ? "blue" : "red"}/10`}>
                              {item.city}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                          <Badge variant="secondary">{item.category}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="culture" className="space-y-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCollectibles.filter(item => item.category === "Culture").map(item => (
                      <Card key={item.id} className={`overflow-hidden transition-all duration-300 ${item.collected ? 'border-morocco-green' : 'opacity-60'}`}>
                        <div className="relative h-48">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                          {item.collected && (
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-morocco-green">Collecté</Badge>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-serif text-lg font-semibold">{item.name}</h3>
                            <Badge variant="outline" className={`bg-morocco-${item.city === "Fès" ? "green" : item.city === "Meknès" ? "ochre" : item.city === "Rabat" ? "blue" : "red"}/10`}>
                              {item.city}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                          <Badge variant="secondary">{item.category}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="artisanat" className="space-y-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCollectibles.filter(item => item.category === "Artisanat").map(item => (
                      <Card key={item.id} className={`overflow-hidden transition-all duration-300 ${item.collected ? 'border-morocco-green' : 'opacity-60'}`}>
                        <div className="relative h-48">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                          {item.collected && (
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-morocco-green">Collecté</Badge>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-serif text-lg font-semibold">{item.name}</h3>
                            <Badge variant="outline" className={`bg-morocco-${item.city === "Fès" ? "green" : item.city === "Meknès" ? "ochre" : item.city === "Rabat" ? "blue" : "red"}/10`}>
                              {item.city}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                          <Badge variant="secondary">{item.category}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-morocco-blue/5 border-none">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-4">Comment collecter des badges ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-morocco-blue mr-2">1.</span>
                    <span>Explorez les pages des différentes villes impériales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-blue mr-2">2.</span>
                    <span>Participez aux quiz et aux jeux interactifs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-blue mr-2">3.</span>
                    <span>Découvrez le contenu caché dans les différentes sections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-blue mr-2">4.</span>
                    <span>Complétez les défis proposés pour chaque ville</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-morocco-green/5 border-none">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-4">Avantages du Journal de Voyage</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">✓</span>
                    <span>Suivi personnalisé de votre exploration des villes impériales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">✓</span>
                    <span>Accès à du contenu exclusif en fonction de votre progression</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">✓</span>
                    <span>Certificat digital de "Connaisseur des Villes Impériales" à 100% de complétion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">✓</span>
                    <span>Journal de voyage imprimable avec toutes vos découvertes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/circuit">
              <Button size="lg" className="mr-4">
                Explorer le Circuit
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg">
                Retour à l'Accueil
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Collection;
