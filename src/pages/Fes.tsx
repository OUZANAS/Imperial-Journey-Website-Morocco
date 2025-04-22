
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InteractiveSection from "@/components/InteractiveSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Fes = () => {
  return (
    <>
      <Navbar />
      
      <Hero
        title="Fès - La Cité du Savoir"
        subtitle="Explorez l'une des plus anciennes médinas du monde, découvrez l'artisanat traditionnel et plongez dans l'architecture fascinante."
        backgroundImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        buttonText="Explorer Fès"
        buttonLink="#explore"
        height="large"
      />
      
      <section id="explore" className="py-16 bg-fes">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-4">
                Journal de Bord Interactif
              </h2>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 py-4">
                <div className="w-full md:w-1/3 text-center">
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-morocco-green/20 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-morocco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">Où Sommes-Nous</h3>
                  <p className="text-gray-600 mt-2">
                    Première étape de notre circuit impérial, au nord-est du Maroc.
                  </p>
                </div>
                
                <div className="w-full md:w-1/3 text-center">
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-morocco-green/20 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-morocco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">À Découvrir</h3>
                  <p className="text-gray-600 mt-2">
                    Médina classée UNESCO, université Al Quaraouiyine, tanneries et artisanat.
                  </p>
                </div>
                
                <div className="w-full md:w-1/3 text-center">
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-morocco-green/20 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-morocco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">Expériences</h3>
                  <p className="text-gray-600 mt-2">
                    Architecture zellige, métiers traditionnels et musique andalouse.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 mb-12">
              <iframe
                className="w-full h-[400px] rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/videoseries?list=PLrXkZUpxsHfZl3eMoYqeLRpFIgN022AKw"
                title="Introduction à Fès"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <InteractiveSection
        title="Architecture Expliquée"
        subtitle="Découvrez l'art unique de la céramique zellige, du bois sculpté et des portes monumentales"
      >
        <Tabs defaultValue="zellige" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="zellige">Zellige</TabsTrigger>
            <TabsTrigger value="woodcarving">Bois Sculpté</TabsTrigger>
            <TabsTrigger value="doors">Portes Monumentales</TabsTrigger>
          </TabsList>
          
          <TabsContent value="zellige" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-green">
                  L'Art Géométrique du Zellige
                </h3>
                <p className="text-gray-700 mb-4">
                  Le zellige est un art de la mosaïque marocaine qui date du 10ème siècle. C'est une forme d'art mathématique où des carreaux de céramique sont taillés puis assemblés pour créer des motifs géométriques complexes.
                </p>
                <p className="text-gray-700 mb-4">
                  À Fès, capitale spirituelle du zellige, les artisans perpétuent cette tradition en utilisant des techniques transmises de génération en génération.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">●</span>
                    <span>Chaque motif a une signification symbolique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">●</span>
                    <span>Les artisans coupent les carreaux à la main</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">●</span>
                    <span>Les motifs sont basés sur des principes mathématiques précis</span>
                  </li>
                </ul>
                <Button className="bg-morocco-green hover:bg-morocco-green/90">
                  Créer Votre Motif
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1547995886-6dc09384c6e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Zellige marocain" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="woodcarving" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-green">
                  L'Art du Bois Sculpté
                </h3>
                <p className="text-gray-700 mb-4">
                  La sculpture sur bois est l'un des arts décoratifs les plus importants du Maroc. Les artisans de Fès excellent dans la création de plafonds, de portes et de meubles ornés de motifs complexes.
                </p>
                <p className="text-gray-700 mb-4">
                  Les sculptures incorporent souvent la calligraphie arabe, des motifs géométriques et des designs floraux, témoignant de l'influence andalouse.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">●</span>
                    <span>Le cèdre est le bois traditionnel de prédilection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">●</span>
                    <span>Les techniques de sculpture datent du 14ème siècle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">●</span>
                    <span>Chaque pièce peut prendre des semaines ou des mois à réaliser</span>
                  </li>
                </ul>
                <Button className="bg-morocco-green hover:bg-morocco-green/90">
                  Découvrir les Techniques
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Bois sculpté marocain" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="doors" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-green">
                  Les Portes Monumentales
                </h3>
                <p className="text-gray-700 mb-4">
                  Les portes monumentales de Fès sont des chefs-d'œuvre architecturaux qui marquent l'entrée de la médina, des palais et des mosquées. Elles représentent la puissance et la sophistication artistique de la ville.
                </p>
                <p className="text-gray-700 mb-4">
                  Chaque porte raconte une histoire à travers ses matériaux, ses motifs et son emplacement stratégique dans la ville.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">●</span>
                    <span>Bab Boujloud (Porte Bleue) est l'entrée principale de la médina</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">●</span>
                    <span>Les portes combinent métal, bois et céramique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">●</span>
                    <span>Elles sont souvent ornées de versets du Coran</span>
                  </li>
                </ul>
                <Button className="bg-morocco-green hover:bg-morocco-green/90">
                  Visite Virtuelle
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1532453288350-76a6e8d563f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Porte monumentale à Fès" 
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
                Métiers Traditionnels
              </h2>
              <p className="text-xl text-gray-300">
                Les artisans de Fès perpétuent des savoir-faire ancestraux
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507217633297-c9815ce2f885?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Tanneries de Fès" 
                  className="w-full h-64 object-cover"
                />
                <div className="bg-morocco-green p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Les Tanneries
                  </h3>
                  <p className="text-gray-100 mb-4">
                    Les tanneries Chouara, datant du 11ème siècle, utilisent des techniques traditionnelles pour transformer les peaux en cuir de haute qualité. Les artisans travaillent dans des conditions difficiles, utilisant des colorants naturels comme l'indigo et le safran.
                  </p>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Voir le Processus
                  </Button>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573506254685-02bcf93236e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Artisanat du cuir" 
                  className="w-full h-64 object-cover"
                />
                <div className="bg-morocco-blue p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Artisanat du Cuir
                  </h3>
                  <p className="text-gray-100 mb-4">
                    Une fois le cuir tanné, il est transformé en une variété d'objets artisanaux : babouches, sacs, poufs, ceintures et bien plus. Chaque pièce est conçue à la main, avec des techniques de couture et de broderie spécifiques à Fès.
                  </p>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Rencontrer les Artisans
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <InteractiveSection
        title="Musique Andalouse"
        subtitle="Un héritage musical précieux issu de l'Espagne musulmane"
        className="bg-fes"
      >
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-morocco-green">
                Al-Âla - L'Orchestre Andalou
              </h3>
              <p className="text-gray-700 mb-4">
                La musique andalouse de Fès, connue sous le nom d'Al-Âla, est l'un des trésors culturels les plus précieux du Maroc. Apportée par les réfugiés musulmans d'Espagne au 15ème siècle, elle est préservée par des orchestres traditionnels.
              </p>
              <p className="text-gray-700 mb-4">
                Cette musique savante se caractérise par sa structure en noubas (suites musicales), ses modes mélodiques spécifiques et ses rythmes complexes qui évoluent progressivement.
              </p>
              
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-2">Instruments Traditionnels</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-morocco-green/20 rounded-full p-3 inline-block mb-2">
                      <span className="text-2xl">🎻</span>
                    </div>
                    <p className="text-sm">Rebab</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-morocco-green/20 rounded-full p-3 inline-block mb-2">
                      <span className="text-2xl">🪕</span>
                    </div>
                    <p className="text-sm">Oud</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-morocco-green/20 rounded-full p-3 inline-block mb-2">
                      <span className="text-2xl">🥁</span>
                    </div>
                    <p className="text-sm">Tar</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-morocco-green/20 rounded-full p-3 inline-block mb-2">
                      <span className="text-2xl">🪘</span>
                    </div>
                    <p className="text-sm">Darbouka</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-morocco-green hover:bg-morocco-green/90">
                  Écouter un Extrait
                </Button>
                <Button variant="outline" className="border-morocco-green text-morocco-green hover:bg-morocco-green/10">
                  Voir les Paroles Traduites
                </Button>
              </div>
            </div>
            
            <div className="bg-morocco-sand rounded-xl overflow-hidden shadow-md">
              <div className="p-6">
                <h4 className="font-serif text-lg font-semibold mb-3">
                  Mini Player
                </h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-3 flex items-center shadow-sm">
                    <div className="bg-morocco-green text-white rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Nouba Raml al-Maya</p>
                      <p className="text-xs text-gray-500">Orchestre de Fès</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 flex items-center shadow-sm">
                    <div className="bg-morocco-green text-white rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Nouba al-Istihlál</p>
                      <p className="text-xs text-gray-500">Ensemble Andalou</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 flex items-center shadow-sm">
                    <div className="bg-morocco-green text-white rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Muwashshah Ya Ghusnu Naqâ</p>
                      <p className="text-xs text-gray-500">Mohamed Briouel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InteractiveSection>
      
      <section className="py-20 bg-morocco-sand/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Mini-Jeu: Créez Votre Zellige
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expérimentez avec les formes et les couleurs pour créer votre propre motif de zellige marocain
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-6 md:col-span-2 bg-gray-50">
                <div className="aspect-w-1 aspect-h-1 bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2 text-gray-800">
                      Zone de Création
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Sélectionnez des formes et des couleurs dans le menu, puis placez-les ici pour créer votre motif.
                    </p>
                    <Button className="bg-morocco-green hover:bg-morocco-green/90">
                      Commencer
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-morocco-green/10">
                <h3 className="font-serif text-lg font-semibold mb-4 text-gray-800">
                  Éléments de Design
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2 text-sm uppercase tracking-wide text-gray-600">Formes</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white border border-gray-200 rounded p-2 flex items-center justify-center h-12 cursor-pointer hover:bg-gray-50">
                        <div className="bg-morocco-blue w-8 h-8 transform rotate-45"></div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded p-2 flex items-center justify-center h-12 cursor-pointer hover:bg-gray-50">
                        <div className="bg-morocco-blue w-8 h-8"></div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded p-2 flex items-center justify-center h-12 cursor-pointer hover:bg-gray-50">
                        <div className="bg-morocco-blue w-8 h-8 rounded-full"></div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded p-2 flex items-center justify-center h-12 cursor-pointer hover:bg-gray-50">
                        <div className="bg-morocco-blue w-8 h-6 rounded-t-full"></div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded p-2 flex items-center justify-center h-12 cursor-pointer hover:bg-gray-50">
                        <div className="bg-morocco-blue w-4 h-8 rounded-l-full"></div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded p-2 flex items-center justify-center h-12 cursor-pointer hover:bg-gray-50">
                        <div className="bg-morocco-blue w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-morocco-blue"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-sm uppercase tracking-wide text-gray-600">Couleurs</h4>
                    <div className="grid grid-cols-6 gap-2">
                      <div className="w-8 h-8 rounded-full bg-morocco-blue cursor-pointer ring-2 ring-white"></div>
                      <div className="w-8 h-8 rounded-full bg-morocco-green cursor-pointer ring-2 ring-white"></div>
                      <div className="w-8 h-8 rounded-full bg-morocco-ochre cursor-pointer ring-2 ring-white"></div>
                      <div className="w-8 h-8 rounded-full bg-morocco-red cursor-pointer ring-2 ring-white"></div>
                      <div className="w-8 h-8 rounded-full bg-morocco-terracotta cursor-pointer ring-2 ring-white"></div>
                      <div className="w-8 h-8 rounded-full bg-white cursor-pointer ring-2 ring-gray-300"></div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-sm uppercase tracking-wide text-gray-600">Actions</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="text-gray-700">
                        Rotation
                      </Button>
                      <Button variant="outline" size="sm" className="text-gray-700">
                        Miroir
                      </Button>
                      <Button variant="outline" size="sm" className="text-gray-700">
                        Dupliquer
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                        Effacer
                      </Button>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-morocco-green hover:bg-morocco-green/90">
                    Enregistrer Votre Création
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6 text-gray-900">
              Continuez Votre Circuit
            </h2>
            <p className="text-gray-600 mb-8">
              Poursuivez votre exploration des villes impériales du Maroc en découvrant la prochaine étape
            </p>
            
            <Link to="/meknes">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border-2 border-morocco-ochre">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Meknès"
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                    <h3 className="text-white font-serif text-xl font-bold">
                      Meknès
                    </h3>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-sm py-1 px-3 rounded-full">
                      Prochaine Étape
                    </span>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <p className="font-serif font-medium text-gray-800">
                    La Ville des Palais
                  </p>
                  <div className="text-morocco-ochre">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Fes;
