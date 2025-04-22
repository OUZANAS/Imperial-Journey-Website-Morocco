
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend as RechartsLegend, ResponsiveContainer } from "recharts";

const artsData = [
  { category: "Zellige", traditional: 85, contemporary: 50 },
  { category: "Calligraphie", traditional: 75, contemporary: 65 },
  { category: "Tadelakt", traditional: 90, contemporary: 40 },
  { category: "Sculpture", traditional: 60, contemporary: 80 },
  { category: "Peinture", traditional: 70, contemporary: 85 },
  { category: "Tapisserie", traditional: 80, contemporary: 45 },
];

const Arts = () => {
  return (
    <>
      <Navbar />
      
      <Hero
        title="Arts & Culture Marocains"
        subtitle="L'héritage artistique du Maroc à travers les âges et les techniques"
        backgroundImage="https://images.unsplash.com/photo-1559293113-507d5e4c9ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        height="medium"
        alignment="center"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Entre Tradition et Modernité
          </h2>
          <p className="text-lg text-gray-700">
            Le Maroc est un carrefour artistique où les techniques ancestrales rencontrent la créativité contemporaine.
            Explorez les différentes formes d'art qui ont façonné l'identité culturelle des villes impériales.
          </p>
        </div>
        
        <Tabs defaultValue="decorative" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="decorative">Arts Décoratifs</TabsTrigger>
            <TabsTrigger value="traditional">Savoir-faire Artisanal</TabsTrigger>
            <TabsTrigger value="evolution">Évolution Historique</TabsTrigger>
          </TabsList>
          
          <TabsContent value="decorative" className="mt-6 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-3">Le Zellige</h3>
                  <p className="text-gray-700 mb-4">
                    Mosaïque géométrique complexe composée de carreaux de céramique taillés à la main, le zellige représente 
                    la maîtrise mathématique et artistique des artisans marocains.
                  </p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1549137542-75e5c8402cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Zellige marocain" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-3">Le Tadelakt</h3>
                  <p className="text-gray-700 mb-4">
                    Technique d'enduit à la chaux, imperméable et résistant, utilisé dans les hammams et les palais. 
                    Sa finition satinée caractéristique est obtenue par polissage avec une pierre lisse.
                  </p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Tadelakt marocain" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-3">Le Plâtre Sculpté</h3>
                  <p className="text-gray-700 mb-4">
                    Appelé "gebs" en arabe, cet art orne les plafonds et murs des riads et palais avec des motifs floraux 
                    et géométriques d'une finesse extraordinaire.
                  </p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1618072596892-30de45e44444?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Plâtre sculpté" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-3">La Calligraphie</h3>
                  <p className="text-gray-700 mb-4">
                    Art sacré de l'écriture arabe, la calligraphie orne les monuments et manuscrits religieux, 
                    développant un style unique dans les écoles coraniques des villes impériales.
                  </p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1583329992148-318814286969?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Calligraphie arabe" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="traditional" className="mt-6 space-y-8">
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center">Transmission du Savoir Artisanal</h3>
              <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
                Les techniques artisanales marocaines sont transmises de génération en génération au sein des familles 
                et à travers les corporations d'artisans, préservant un patrimoine millénaire.
              </p>
              
              <div className="h-80 mt-10">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={artsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <RechartsTooltip 
                      formatter={(value, name) => [`${value}%`, name === "traditional" ? "Méthodes Traditionnelles" : "Applications Contemporaines"]}
                    />
                    <RechartsLegend 
                      formatter={(value) => value === "traditional" ? "Méthodes Traditionnelles" : "Applications Contemporaines"}
                    />
                    <Bar dataKey="traditional" fill="#10B981" />
                    <Bar dataKey="contemporary" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                Comparaison entre l'utilisation des méthodes traditionnelles et les applications contemporaines des différentes techniques artisanales
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-serif text-xl font-medium mb-3">Les Maîtres Artisans</h4>
                <p className="text-gray-700">
                  Porteurs du titre honorifique de "maalem", ces artisans expérimentés dirigent des ateliers et forment 
                  les apprentis selon des méthodes rigoureuses éprouvées au fil des siècles.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-serif text-xl font-medium mb-3">Les Corporations</h4>
                <p className="text-gray-700">
                  Organisations professionnelles traditionnelles regroupant les artisans par métier, elles maintiennent 
                  la qualité et les standards des productions artisanales.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-serif text-xl font-medium mb-3">Les Écoles d'Artisanat</h4>
                <p className="text-gray-700">
                  Institutions modernes qui allient enseignement traditionnel et innovation, formant la nouvelle génération 
                  d'artisans aux techniques ancestrales tout en encourageant la créativité.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="evolution" className="mt-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-center">Évolution des Arts Marocains</h3>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-morocco-blue/20"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-12">
                    <div className="w-1/2 pr-8 text-right">
                      <h4 className="font-serif text-xl font-medium mb-2 text-morocco-blue">Période Idrisside (789-974)</h4>
                      <p className="text-gray-700">
                        Fondation de Fès et début de l'influence islamique dans les arts décoratifs. 
                        Développement des premières mosquées et médersas ornées de motifs géométriques.
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-morocco-blue flex items-center justify-center text-white font-bold relative left-[-24px]">
                      8C
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                  
                  <div className="flex items-center mb-12">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-12 h-12 rounded-full bg-morocco-green flex items-center justify-center text-white font-bold relative left-[-24px]">
                      12C
                    </div>
                    <div className="w-1/2 pl-8">
                      <h4 className="font-serif text-xl font-medium mb-2 text-morocco-green">Dynastie Almohade (1147-1269)</h4>
                      <p className="text-gray-700">
                        Âge d'or architectural avec la construction de la Koutoubia à Marrakech et de 
                        la Tour Hassan à Rabat. Perfection des techniques de zellige et mosaïque.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-12">
                    <div className="w-1/2 pr-8 text-right">
                      <h4 className="font-serif text-xl font-medium mb-2 text-morocco-ochre">Dynastie Mérinide (1244-1465)</h4>
                      <p className="text-gray-700">
                        Raffinement des arts décoratifs à Fès et Meknès. Développement des médersas avec 
                        leur architecture sophistiquée et leurs décorations élaborées.
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-morocco-ochre flex items-center justify-center text-white font-bold relative left-[-24px]">
                      13C
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                  
                  <div className="flex items-center mb-12">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-12 h-12 rounded-full bg-morocco-red flex items-center justify-center text-white font-bold relative left-[-24px]">
                      17C
                    </div>
                    <div className="w-1/2 pl-8">
                      <h4 className="font-serif text-xl font-medium mb-2 text-morocco-red">Dynastie Alaouite (1666-présent)</h4>
                      <p className="text-gray-700">
                        Construction du palais de Moulay Ismaïl à Meknès. Influence andalouse plus marquée 
                        et développement des arts du bois sculpté et du stuc.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <h4 className="font-serif text-xl font-medium mb-2 text-blue-600">Époque Contemporaine</h4>
                      <p className="text-gray-700">
                        Renouveau des arts traditionnels et fusion avec l'art contemporain. 
                        Émergence de nouveaux artistes explorant les techniques ancestrales avec une vision moderne.
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold relative left-[-24px]">
                      21C
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <section className="bg-morocco-red/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center">Découvrir l'Art par Ville</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1519977015486-a11339a6aea7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Art à Fès" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Fès</h3>
                <p className="text-gray-700 mb-4">
                  Centre historique de la céramique et du zellige, avec ses ateliers traditionnels et son école renommée de miniature.
                </p>
                <div className="flex justify-end">
                  <a href="/fes" className="text-morocco-blue hover:underline">Explorer Fès &rarr;</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1528657249085-c4aa32f89aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Art à Meknès" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Meknès</h3>
                <p className="text-gray-700 mb-4">
                  Reconnue pour le travail du bois et la marqueterie, ainsi que pour ses ateliers de damasquinage et d'orfèvrerie.
                </p>
                <div className="flex justify-end">
                  <a href="/meknes" className="text-morocco-ochre hover:underline">Explorer Meknès &rarr;</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1577048982768-5cb3e7ddfa23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Art à Rabat" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Rabat</h3>
                <p className="text-gray-700 mb-4">
                  Capitale de la calligraphie moderne et de la tapisserie, abritant le Musée National d'Art Contemporain.
                </p>
                <div className="flex justify-end">
                  <a href="/rabat" className="text-morocco-blue hover:underline">Explorer Rabat &rarr;</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1553602878-4ee3d49b7394?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Art à Marrakech" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Marrakech</h3>
                <p className="text-gray-700 mb-4">
                  Carrefour artistique mêlant l'artisanat berbère traditionnel et l'art contemporain, avec ses galeries innovantes.
                </p>
                <div className="flex justify-end">
                  <a href="/marrakech" className="text-morocco-red hover:underline">Explorer Marrakech &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Arts;
