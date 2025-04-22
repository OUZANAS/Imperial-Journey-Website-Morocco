
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  Legend as RechartsLegend, 
  ResponsiveContainer 
} from "recharts";

const projectData = [
  { year: 2020, progress: 20 },
  { year: 2021, progress: 35 },
  { year: 2022, progress: 55 },
  { year: 2023, progress: 70 },
  { year: 2024, progress: 90 },
  { year: 2025, progress: 100 },
];

const visitorTypeData = [
  { name: "Étudiants", percentage: 35 },
  { name: "Professionnels", percentage: 25 },
  { name: "Touristes", percentage: 30 },
  { name: "Chercheurs", percentage: 10 },
];

const About = () => {
  return (
    <>
      <Navbar />
      
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">
              À Propos du Circuit Impérial
            </h1>
            <p className="text-xl text-gray-700 text-center mb-8">
              Une plateforme interactive dédiée à la découverte du patrimoine culturel 
              des villes impériales du Maroc.
            </p>
            
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
              <img 
                src="https://images.unsplash.com/photo-1538503657467-6ccca16dc10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                alt="Villes impériales marocaines" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <Tabs defaultValue="mission" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Notre Mission</TabsTrigger>
              <TabsTrigger value="project">Le Projet</TabsTrigger>
              <TabsTrigger value="team">Équipe & Partenaires</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mission" className="mt-6 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-morocco-blue/5 border-none">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-morocco-blue/20 flex items-center justify-center text-morocco-blue mb-4 text-xl">
                      🔍
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3">Explorer</h3>
                    <p className="text-gray-700">
                      Offrir une plateforme digitale permettant d'explorer en profondeur le patrimoine culturel, 
                      architectural et artistique des quatre villes impériales du Maroc.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-morocco-green/5 border-none">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-morocco-green/20 flex items-center justify-center text-morocco-green mb-4 text-xl">
                      🎓
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3">Éduquer</h3>
                    <p className="text-gray-700">
                      Proposer un contenu pédagogique interactif pour sensibiliser le public, 
                      particulièrement les jeunes générations, à la richesse du patrimoine marocain.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-morocco-red/5 border-none">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-morocco-red/20 flex items-center justify-center text-morocco-red mb-4 text-xl">
                      🌍
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3">Préserver</h3>
                    <p className="text-gray-700">
                      Contribuer à la préservation et à la valorisation du patrimoine culturel immatériel 
                      en documentant les traditions, les savoir-faire et les expressions artistiques.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-center">
                    Notre Vision
                  </h3>
                  <p className="text-gray-700 mb-6 max-w-3xl mx-auto text-center">
                    Le Circuit Impérial ambitionne de devenir la référence digitale pour la découverte du patrimoine 
                    culturel des villes impériales marocaines, en offrant une expérience immersive, interactive et éducative.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-serif text-xl font-medium mb-3">Pour les visiteurs</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-morocco-blue mr-2">✓</span>
                          <span>Une préparation approfondie avant un voyage physique au Maroc</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-morocco-blue mr-2">✓</span>
                          <span>Une expérience virtuelle immersive pour ceux qui ne peuvent pas voyager</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-morocco-blue mr-2">✓</span>
                          <span>Un complément culturel pour approfondir une visite déjà effectuée</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-serif text-xl font-medium mb-3">Pour le patrimoine</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-morocco-green mr-2">✓</span>
                          <span>Documentation et archivage numériques des expressions culturelles</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-morocco-green mr-2">✓</span>
                          <span>Sensibilisation à l'importance de la préservation patrimoniale</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-morocco-green mr-2">✓</span>
                          <span>Valorisation des savoir-faire traditionnels auprès des nouvelles générations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="project" className="mt-6 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">
                    Genèse du Projet
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Le projet Circuit Impérial est né d'une volonté de conjuguer nouvelles technologies et patrimoine 
                    culturel pour offrir une expérience d'apprentissage innovante. Face aux défis de préservation 
                    des savoirs traditionnels et à l'intérêt croissant pour le tourisme culturel, notre équipe a imaginé 
                    cette plateforme interactive qui dépasse les frontières du guide touristique classique.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-morocco-blue/20 flex items-center justify-center text-morocco-blue font-bold mr-4">
                        2020
                      </div>
                      <div>
                        <h4 className="font-medium">Conception initiale</h4>
                        <p className="text-sm text-gray-600">Recherche documentaire et élaboration du concept</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-morocco-blue/20 flex items-center justify-center text-morocco-blue font-bold mr-4">
                        2022
                      </div>
                      <div>
                        <h4 className="font-medium">Développement de la plateforme</h4>
                        <p className="text-sm text-gray-600">Création de l'architecture et des contenus interactifs</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-morocco-blue/20 flex items-center justify-center text-morocco-blue font-bold mr-4">
                        2024
                      </div>
                      <div>
                        <h4 className="font-medium">Lancement officiel</h4>
                        <p className="text-sm text-gray-600">Mise en ligne et ouverture au public</p>
                      </div>
                    </div>
                  </div>
                  
                  <Card className="bg-morocco-blue/5 border-none p-4">
                    <CardContent className="p-2">
                      <h4 className="font-medium mb-2">Perspectives futures</h4>
                      <p className="text-sm text-gray-700">
                        Notre ambition est d'étendre le Circuit Impérial à d'autres villes historiques du Maroc et 
                        de développer des applications mobiles permettant des visites guidées géolocalisées et en réalité augmentée.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">
                    Évolution du Projet
                  </h3>
                  
                  <div className="h-64 mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={projectData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <RechartsTooltip 
                          formatter={(value) => [`${value}%`, 'Progression']}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="progress" 
                          stroke="#8884d8" 
                          activeDot={{ r: 8 }} 
                          name="Progression du projet"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={visitorTypeData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" width={100} />
                        <RechartsTooltip 
                          formatter={(value) => [`${value}%`, 'Pourcentage']}
                        />
                        <Bar dataKey="percentage" fill="#82ca9d" name="Répartition des visiteurs" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold mb-6 text-center">
                    Nos Objectifs
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-3xl mb-2 text-center">🎨</div>
                        <h4 className="font-medium mb-2 text-center">Documentation</h4>
                        <p className="text-sm text-gray-600">
                          Archivage numérique et documentation détaillée des expressions culturelles et artistiques des villes impériales.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-3xl mb-2 text-center">🔄</div>
                        <h4 className="font-medium mb-2 text-center">Interactivité</h4>
                        <p className="text-sm text-gray-600">
                          Création d'expériences immersives permettant aux utilisateurs d'interagir avec le patrimoine culturel.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-3xl mb-2 text-center">🌐</div>
                        <h4 className="font-medium mb-2 text-center">Accessibilité</h4>
                        <p className="text-sm text-gray-600">
                          Développement de contenus multilingues pour toucher un public international et diversifié.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-3xl mb-2 text-center">🤝</div>
                        <h4 className="font-medium mb-2 text-center">Collaboration</h4>
                        <p className="text-sm text-gray-600">
                          Partenariats avec institutions culturelles, universités et acteurs locaux pour enrichir les contenus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="team" className="mt-6 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">
                    Notre Équipe
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <Card>
                      <CardContent className="p-4">
                        <div className="rounded-full overflow-hidden w-20 h-20 mx-auto mb-3">
                          <img 
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Team member" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-medium text-center mb-1">Nadia Alaoui</h4>
                        <p className="text-sm text-gray-600 text-center">Directrice du Projet</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="rounded-full overflow-hidden w-20 h-20 mx-auto mb-3">
                          <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Team member" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-medium text-center mb-1">Karim Benjelloun</h4>
                        <p className="text-sm text-gray-600 text-center">Responsable Technique</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="rounded-full overflow-hidden w-20 h-20 mx-auto mb-3">
                          <img 
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Team member" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-medium text-center mb-1">Sofia El Mansouri</h4>
                        <p className="text-sm text-gray-600 text-center">Historienne de l'Art</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="rounded-full overflow-hidden w-20 h-20 mx-auto mb-3">
                          <img 
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Team member" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-medium text-center mb-1">Omar Tazi</h4>
                        <p className="text-sm text-gray-600 text-center">Designer UX</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <p className="text-gray-700">
                    Notre équipe pluridisciplinaire rassemble des experts en technologies numériques, 
                    des historiens de l'art, des designers et des spécialistes du patrimoine culturel marocain. 
                    Cette diversité de compétences nous permet d'aborder le patrimoine des villes impériales 
                    sous différents angles et d'offrir une expérience immersive complète.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">
                    Nos Partenaires
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-24">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-morocco-blue mb-1">
                          Ministère de la Culture
                        </div>
                        <div className="text-xs text-gray-500">Partenaire Institutionnel</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-24">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-morocco-green mb-1">
                          Université Al Quaraouiyine
                        </div>
                        <div className="text-xs text-gray-500">Partenaire Académique</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-24">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-morocco-red mb-1">
                          Fondation du Patrimoine
                        </div>
                        <div className="text-xs text-gray-500">Partenaire Associatif</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-24">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-morocco-ochre mb-1">
                          Digital Morocco
                        </div>
                        <div className="text-xs text-gray-500">Partenaire Technologique</div>
                      </div>
                    </div>
                  </div>
                  
                  <Card className="bg-morocco-blue/5 border-none mb-4">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Collaboration académique</h4>
                      <p className="text-sm text-gray-700">
                        Le Circuit Impérial collabore avec plusieurs universités et centres de recherche pour 
                        garantir la rigueur scientifique de ses contenus et intégrer les dernières avancées en matière
                        de technologies numériques appliquées au patrimoine culturel.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-morocco-green/5 border-none">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Financement et soutien</h4>
                      <p className="text-sm text-gray-700">
                        Ce projet bénéficie du soutien du Ministère de la Culture du Maroc, de l'UNESCO et de plusieurs
                        fondations privées engagées dans la préservation du patrimoine culturel et le développement de
                        l'économie créative.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold mb-6 text-center">
                    Nous Contacter
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-3xl mb-2 text-center">✉️</div>
                        <h4 className="font-medium mb-2 text-center">Email</h4>
                        <p className="text-sm text-center">
                          <a href="mailto:contact@circuit-imperial.ma" className="text-morocco-blue hover:underline">
                            contact@circuit-imperial.ma
                          </a>
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-3xl mb-2 text-center">📞</div>
                        <h4 className="font-medium mb-2 text-center">Téléphone</h4>
                        <p className="text-sm text-center">
                          <a href="tel:+212522456789" className="text-morocco-blue hover:underline">
                            +212 522 456 789
                          </a>
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-3xl mb-2 text-center">🌐</div>
                        <h4 className="font-medium mb-2 text-center">Réseaux Sociaux</h4>
                        <div className="flex justify-center space-x-3">
                          <a href="#" className="text-morocco-blue hover:text-morocco-blue/80">
                            Facebook
                          </a>
                          <a href="#" className="text-morocco-blue hover:text-morocco-blue/80">
                            Instagram
                          </a>
                          <a href="#" className="text-morocco-blue hover:text-morocco-blue/80">
                            Twitter
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 text-center">
            <Link to="/circuit">
              <Button size="lg" className="mr-4">
                Découvrir le Circuit
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

export default About;
