
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend as RechartsLegend, ResponsiveContainer } from "recharts";

const productionData = [
  { year: 2000, films: 4 },
  { year: 2005, films: 10 },
  { year: 2010, films: 18 },
  { year: 2015, films: 22 },
  { year: 2020, films: 15 },
  { year: 2023, films: 25 },
];

const genreData = [
  { name: "Drame Social", percentage: 35 },
  { name: "Historique", percentage: 25 },
  { name: "Comédie", percentage: 20 },
  { name: "Documentaire", percentage: 15 },
  { name: "Thriller", percentage: 5 },
];

const Cinema = () => {
  return (
    <>
      <Navbar />
      
      <Hero
        title="Cinéma Marocain"
        subtitle="Des oasis aux médinas, la richesse du septième art marocain"
        backgroundImage="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        height="medium"
        alignment="center"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            La Renaissance du Cinéma Marocain
          </h2>
          <p className="text-lg text-gray-700">
            Depuis les années 2000, le cinéma marocain connaît un renouveau remarquable, 
            porté par une nouvelle génération de réalisateurs et un soutien institutionnel croissant.
            Entre tradition et modernité, il s'impose progressivement sur la scène internationale.
          </p>
        </div>
        
        <Tabs defaultValue="evolution" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="evolution">Évolution</TabsTrigger>
            <TabsTrigger value="directors">Réalisateurs Emblématiques</TabsTrigger>
            <TabsTrigger value="films">Films Incontournables</TabsTrigger>
            <TabsTrigger value="festivals">Festivals & Studios</TabsTrigger>
          </TabsList>
          
          <TabsContent value="evolution" className="mt-6 space-y-8">
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center">Production Cinématographique au Maroc</h3>
              
              <div className="h-80 mt-8">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={productionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <RechartsTooltip />
                    <Line type="monotone" dataKey="films" name="Films produits" stroke="#EF4444" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                Évolution du nombre de longs-métrages produits au Maroc entre 2000 et 2023
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Des Racines Historiques</h3>
                <p className="text-gray-700 mb-6">
                  Le cinéma marocain puise ses racines dans les années 1940-1950, lorsque le Maroc servait déjà de décor 
                  pour des productions étrangères. Ce n'est qu'après l'indépendance, en 1956, que naît véritablement 
                  un cinéma national, avec la création du Centre Cinématographique Marocain.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-morocco-red/20 flex items-center justify-center text-morocco-red font-bold mr-4">
                      1944
                    </div>
                    <div>
                      <h4 className="font-medium">Création du CCM</h4>
                      <p className="text-sm text-gray-600">Centre Cinématographique Marocain</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-morocco-red/20 flex items-center justify-center text-morocco-red font-bold mr-4">
                      1958
                    </div>
                    <div>
                      <h4 className="font-medium">Premier film marocain</h4>
                      <p className="text-sm text-gray-600">"Le fils maudit" de Mohammed Ousfour</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-morocco-red/20 flex items-center justify-center text-morocco-red font-bold mr-4">
                      1982
                    </div>
                    <div>
                      <h4 className="font-medium">Festival de Marrakech</h4>
                      <p className="text-sm text-gray-600">Première édition du festival national</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Tendances Actuelles</h3>
                <p className="text-gray-700 mb-6">
                  Le cinéma marocain contemporain se caractérise par une diversité thématique reflétant les mutations 
                  de la société. Il aborde des questions sociales parfois tabous, revisite l'histoire nationale 
                  et explore de nouvelles formes narratives entre tradition et modernité.
                </p>
                
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={genreData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={100} />
                      <RechartsTooltip 
                        formatter={(value) => [`${value}%`, "Part de la production"]}
                      />
                      <Bar dataKey="percentage" fill="#EF4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">
                  Répartition des genres dans la production cinématographique marocaine récente
                </p>
              </div>
            </div>
            
            <div className="bg-morocco-red/10 rounded-xl p-8">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center">Les Défis du Cinéma Marocain</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="w-12 h-12 rounded-full bg-morocco-red flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-lg mb-2">Financement</h4>
                  <p className="text-gray-700">
                    Malgré le Fonds d'aide à la production cinématographique, les budgets restent limités 
                    face aux ambitions artistiques des cinéastes.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="w-12 h-12 rounded-full bg-morocco-red flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-lg mb-2">Distribution</h4>
                  <p className="text-gray-700">
                    La fermeture de nombreuses salles et la concurrence du streaming compliquent 
                    la diffusion des films marocains auprès du grand public.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="w-12 h-12 rounded-full bg-morocco-red flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-lg mb-2">Rayonnement International</h4>
                  <p className="text-gray-700">
                    Bien que reconnu dans les festivals, le cinéma marocain peine encore 
                    à s'exporter largement sur les marchés étrangers.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="directors" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1579310962131-aa21f240d986?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Nabil Ayouch" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-semibold">Nabil Ayouch</h3>
                    <Badge variant="outline" className="bg-morocco-red/10 text-morocco-red border-morocco-red">Contemporain</Badge>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Cinéaste franco-marocain, figure de proue du cinéma marocain contemporain. Son œuvre, engagée socialement, 
                    aborde des sujets de société sensibles avec un regard humaniste et sans compromis.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-red mr-2"></span>
                      <span className="text-sm italic">Ali Zaoua, prince de la rue (2000)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-red mr-2"></span>
                      <span className="text-sm italic">Much Loved (2015)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-red mr-2"></span>
                      <span className="text-sm italic">Razzia (2017)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-red mr-2"></span>
                      <span className="text-sm italic">Haut et Fort (2021)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Faouzi Bensaïdi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-semibold">Faouzi Bensaïdi</h3>
                    <Badge variant="outline" className="bg-morocco-blue/10 text-morocco-blue border-morocco-blue">Auteur</Badge>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Réalisateur, scénariste et acteur, son cinéma poétique et absurde propose une vision singulière 
                    du Maroc contemporain, entre tradition et modernité, avec une forte dimension esthétique.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-blue mr-2"></span>
                      <span className="text-sm italic">Mille mois (2003)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-blue mr-2"></span>
                      <span className="text-sm italic">WWW - What a Wonderful World (2006)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-blue mr-2"></span>
                      <span className="text-sm italic">Mort à vendre (2011)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-blue mr-2"></span>
                      <span className="text-sm italic">Volubilis (2017)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1607313861242-0dbe768b9b18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Leila Marrakchi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-semibold">Leila Marrakchi</h3>
                    <Badge variant="outline" className="bg-morocco-green/10 text-morocco-green border-morocco-green">Féminin</Badge>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Réalisatrice incarnant la voix féminine du cinéma marocain moderne. Son travail, entre comédie et drame, 
                    explore les contradictions de la société marocaine et la place des femmes.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-green mr-2"></span>
                      <span className="text-sm italic">Marock (2005)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-green mr-2"></span>
                      <span className="text-sm italic">Rock the Casbah (2013)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-green mr-2"></span>
                      <span className="text-sm italic">Série "Le Bureau des Légendes" (2015)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Farida Benlyazid" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-semibold">Farida Benlyazid</h3>
                    <Badge variant="outline" className="bg-morocco-ochre/10 text-morocco-ochre border-morocco-ochre">Pionnière</Badge>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Pionnière du cinéma marocain au féminin, scénariste et réalisatrice. Son œuvre explore l'identité féminine 
                    marocaine entre tradition et émancipation, avec une sensibilité particulière pour le patrimoine culturel.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-ochre mr-2"></span>
                      <span className="text-sm italic">Une porte sur le ciel (1988)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-ochre mr-2"></span>
                      <span className="text-sm italic">Keïd Ensa (1999)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-ochre mr-2"></span>
                      <span className="text-sm italic">Casablanca, Casablanca (2002)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-morocco-ochre mr-2"></span>
                      <span className="text-sm italic">Les jardins de Samira (2007)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="films" className="mt-6">
            <div className="space-y-10">
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="h-64 md:h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Much Loved" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-8">
                    <div className="flex flex-col h-full">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-serif text-2xl font-semibold">Much Loved</h3>
                          <Badge>2015</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Réalisé par Nabil Ayouch</p>
                        <p className="text-gray-700 mb-6">
                          Film controversé qui suit le quotidien de quatre prostituées à Marrakech. 
                          Interdit au Maroc, ce drame social sans concession a provoqué un débat intense sur 
                          les tabous de la société marocaine et la condition féminine.
                        </p>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-morocco-red/10 rounded-full text-sm text-morocco-red">Drame</span>
                          <span className="px-3 py-1 bg-morocco-red/10 rounded-full text-sm text-morocco-red">Social</span>
                          <span className="px-3 py-1 bg-morocco-red/10 rounded-full text-sm text-morocco-red">Controversé</span>
                        </div>
                        <div className="flex items-center">
                          <div className="text-yellow-500 mr-2">★★★★☆</div>
                          <span className="text-sm text-gray-500">Prix de la mise en scène, Festival d'Angoulême</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="h-64 md:h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1541600383005-565c949cf777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Adam" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-8">
                    <div className="flex flex-col h-full">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-serif text-2xl font-semibold">Adam</h3>
                          <Badge>2019</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Réalisé par Maryam Touzani</p>
                        <p className="text-gray-700 mb-6">
                          Dans une petite médina de Casablanca, la rencontre entre Abla, veuve et mère d'une fillette de 8 ans, 
                          et Samia, jeune femme enceinte sans ressources. Un drame intimiste et lumineux sur la solidarité féminine 
                          et la maternité dans la société marocaine.
                        </p>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-morocco-blue/10 rounded-full text-sm text-morocco-blue">Drame</span>
                          <span className="px-3 py-1 bg-morocco-blue/10 rounded-full text-sm text-morocco-blue">Intimiste</span>
                          <span className="px-3 py-1 bg-morocco-blue/10 rounded-full text-sm text-morocco-blue">Féminin</span>
                        </div>
                        <div className="flex items-center">
                          <div className="text-yellow-500 mr-2">★★★★★</div>
                          <span className="text-sm text-gray-500">Sélection Un Certain Regard, Festival de Cannes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="h-64 md:h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1604218374640-5b554c1c69fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Horses of God" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-8">
                    <div className="flex flex-col h-full">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-serif text-2xl font-semibold">Les Chevaux de Dieu</h3>
                          <Badge>2012</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Réalisé par Nabil Ayouch</p>
                        <p className="text-gray-700 mb-6">
                          Adaptation du roman "Les Étoiles de Sidi Moumen" de Mahi Binebine, le film retrace le parcours 
                          de jeunes issus d'un bidonville de Casablanca qui deviendront les auteurs des attentats-suicides 
                          de mai 2003. Une œuvre puissante sur la radicalisation.
                        </p>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-morocco-green/10 rounded-full text-sm text-morocco-green">Drame</span>
                          <span className="px-3 py-1 bg-morocco-green/10 rounded-full text-sm text-morocco-green">Politique</span>
                          <span className="px-3 py-1 bg-morocco-green/10 rounded-full text-sm text-morocco-green">Adaptation</span>
                        </div>
                        <div className="flex items-center">
                          <div className="text-yellow-500 mr-2">★★★★☆</div>
                          <span className="text-sm text-gray-500">Sélection Un Certain Regard, Festival de Cannes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="h-64 md:h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1521967694202-9694978762c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Sofia" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-8">
                    <div className="flex flex-col h-full">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-serif text-2xl font-semibold">Sofia</h3>
                          <Badge>2018</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Réalisé par Meryem Benm'Barek</p>
                        <p className="text-gray-700 mb-6">
                          L'histoire de Sofia, 20 ans, qui vit à Casablanca avec ses parents et découvre qu'elle est enceinte 
                          alors que les relations sexuelles hors mariage sont punies par la loi au Maroc. Un drame social qui 
                          révèle les fractures de classe et les contradictions de la société marocaine.
                        </p>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-morocco-ochre/10 rounded-full text-sm text-morocco-ochre">Drame</span>
                          <span className="px-3 py-1 bg-morocco-ochre/10 rounded-full text-sm text-morocco-ochre">Social</span>
                          <span className="px-3 py-1 bg-morocco-ochre/10 rounded-full text-sm text-morocco-ochre">Féministe</span>
                        </div>
                        <div className="flex items-center">
                          <div className="text-yellow-500 mr-2">★★★★☆</div>
                          <span className="text-sm text-gray-500">Prix du scénario, Un Certain Regard, Festival de Cannes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="festivals" className="mt-6 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-morocco-red/20 flex items-center justify-center text-morocco-red text-xl font-bold mr-4">
                      FIFM
                    </div>
                    <h3 className="font-serif text-2xl font-semibold">Festival International du Film de Marrakech</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Créé en 2001, c'est l'un des festivals de cinéma les plus prestigieux d'Afrique, attirant des stars 
                    internationales et promouvant le cinéma marocain sur la scène mondiale.
                  </p>
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Festival de Marrakech" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">International</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Décembre</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Étoile d'Or</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-morocco-blue/20 flex items-center justify-center text-morocco-blue text-xl font-bold mr-4">
                      FIDADOC
                    </div>
                    <h3 className="font-serif text-2xl font-semibold">Festival International de Documentaire d'Agadir</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Premier festival dédié au cinéma documentaire au Maroc et dans le monde arabe. 
                    Depuis 2008, il valorise la création documentaire et encourage les jeunes réalisateurs marocains.
                  </p>
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1568438350562-2eae6aa8abc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="FIDADOC" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Documentaire</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Mai</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Formation</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-center">Studios et Lieux de Tournage</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <h4 className="font-serif text-xl font-medium mb-3">Atlas Studios à Ouarzazate</h4>
                  <p className="text-gray-700 mb-4">
                    Fondés en 1983, les Atlas Studios sont parmi les plus grands studios cinématographiques au monde. 
                    Leur décor désertique a servi à de nombreuses productions internationales comme "Gladiator", 
                    "La Momie", "Game of Thrones" et bien d'autres.
                  </p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1599484206589-e9e7c3132e6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Atlas Studios" 
                      className="w-full h-52 object-cover"
                    />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <h4 className="font-serif text-xl font-medium mb-3">Médinas et Kasbahs</h4>
                  <p className="text-gray-700 mb-4">
                    Les médinas de Fès, Marrakech, Essaouira, ainsi que les kasbahs du Sud marocain comme 
                    Aït Benhaddou (classée au patrimoine mondial de l'UNESCO), sont des décors naturels privilégiés 
                    par les cinéastes du monde entier.
                  </p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1548019904-fb7d8e0a4f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Kasbah d'Aït Benhaddou" 
                      className="w-full h-52 object-cover"
                    />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <h4 className="font-serif text-xl font-medium mb-3">Centre Cinématographique Marocain (CCM)</h4>
                  <p className="text-gray-700 mb-4">
                    Institution publique créée en 1944, le CCM est l'organe régulateur du cinéma au Maroc. 
                    Il soutient la production nationale via le Fonds d'aide, assure la promotion du cinéma marocain
                    et gère les archives cinématographiques du pays.
                  </p>
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-morocco-blue/20 flex items-center justify-center text-morocco-blue text-xl font-bold">
                      CCM
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <h4 className="font-serif text-xl font-medium mb-3">Écoles et Formation</h4>
                  <p className="text-gray-700 mb-4">
                    L'Institut Spécialisé du Cinéma et de l'Audiovisuel (ISCA) à Rabat et l'École Supérieure des Arts Visuels 
                    (ESAV) à Marrakech forment les futurs talents du cinéma marocain, réalisateurs, techniciens et scénaristes.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <div className="w-16 h-16 rounded-full bg-morocco-green/20 flex items-center justify-center text-morocco-green text-sm font-bold">
                      ISCA
                    </div>
                    <div className="w-16 h-16 rounded-full bg-morocco-red/20 flex items-center justify-center text-morocco-red text-sm font-bold">
                      ESAV
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <section className="bg-morocco-red/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center">Le Cinéma à travers les Villes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1579177881798-49efa0828685?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Cinéma à Fès" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Fès</h3>
                <p className="text-gray-700 mb-4">
                  Sa médina labyrinthique, patrimoine mondial, a servi de décor à de nombreux films historiques et drames sociaux.
                </p>
                <div className="flex justify-end">
                  <a href="/fes" className="text-morocco-blue hover:underline">Explorer Fès &rarr;</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1560442436-398e174dad7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Cinéma à Meknès" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Meknès</h3>
                <p className="text-gray-700 mb-4">
                  Son architecture monumentale et ses grands espaces ont inspiré des récits historiques liés à l'héritage alaouite.
                </p>
                <div className="flex justify-end">
                  <a href="/meknes" className="text-morocco-ochre hover:underline">Explorer Meknès &rarr;</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1540991825428-5b54b09f7338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Cinéma à Rabat" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Rabat</h3>
                <p className="text-gray-700 mb-4">
                  Centre institutionnel du cinéma marocain, accueillant le CCM et divers studios de post-production.
                </p>
                <div className="flex justify-end">
                  <a href="/rabat" className="text-morocco-blue hover:underline">Explorer Rabat &rarr;</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1548706041-a73b4633b3d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Cinéma à Marrakech" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Marrakech</h3>
                <p className="text-gray-700 mb-4">
                  Épicentre du cinéma marocain avec son festival international annuel et ses nombreuses productions locales et étrangères.
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

export default Cinema;
