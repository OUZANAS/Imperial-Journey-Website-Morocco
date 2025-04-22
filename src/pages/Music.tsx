
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend as RechartsLegend, ResponsiveContainer } from "recharts";

const musicInfluenceData = [
  { name: "Andalou", influence: 90, region: "Nord", venues: 35 },
  { name: "Gnaoua", influence: 85, region: "Sud", venues: 45 },
  { name: "Amazigh", influence: 80, region: "Moyen Atlas", venues: 30 },
  { name: "Chaâbi", influence: 95, region: "National", venues: 60 },
  { name: "Aïta", influence: 75, region: "Plaines", venues: 25 },
  { name: "Melhoun", influence: 70, region: "Urbain", venues: 20 },
];

const festivalTimelineData = [
  { year: 2000, festivals: 5 },
  { year: 2005, festivals: 12 },
  { year: 2010, festivals: 24 },
  { year: 2015, festivals: 38 },
  { year: 2020, festivals: 30 },
  { year: 2025, festivals: 45 },
];

const Music = () => {
  return (
    <>
      <Navbar />
      
      <Hero
        title="Musique & Spectacles"
        subtitle="L'âme sonore du Maroc : des rythmes ancestraux aux festivals contemporains"
        backgroundImage="https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        height="medium"
        alignment="center"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            La Richesse Musicale Marocaine
          </h2>
          <p className="text-lg text-gray-700">
            De la musique andalouse raffinée aux rythmes hypnotiques gnaoua, 
            le Maroc offre un paysage musical d'une richesse exceptionnelle,
            reflétant son histoire et la diversité de ses cultures.
          </p>
        </div>
        
        <Tabs defaultValue="traditions" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="traditions">Traditions Musicales</TabsTrigger>
            <TabsTrigger value="instruments">Instruments Emblématiques</TabsTrigger>
            <TabsTrigger value="festivals">Festivals & Événements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="traditions" className="mt-6 space-y-8">
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center">Influence des Styles Musicaux</h3>
              
              <div className="h-96 mt-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={musicInfluenceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <RechartsTooltip />
                    <RechartsLegend />
                    <Bar yAxisId="left" dataKey="influence" name="Influence Culturelle (%)" fill="#8884d8" />
                    <Bar yAxisId="right" dataKey="venues" name="Lieux de Performance" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                Influence culturelle des principaux styles musicaux marocains et nombre de lieux dédiés à leur performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-3">Musique Andalouse</h3>
                  <p className="text-gray-700 mb-4">
                    Héritage direct de l'Andalousie médiévale, cette musique savante s'est développée dans les centres urbains 
                    du nord du Maroc. Caractérisée par ses orchestres de cordes, ses modes musicaux complexes (noubas) 
                    et sa poésie raffinée.
                  </p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1556379118-7034d926d258?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Orchestre andalou" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-3">Musique Gnaoua</h3>
                  <p className="text-gray-700 mb-4">
                    Tradition musicale et spirituelle issue des communautés d'origine subsaharienne. Les cérémonies gnaoua,
                    dirigées par un maâlem (maître), combinent rythmes hypnotiques, danses et rituels de transe à visée thérapeutique.
                  </p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1517722014278-c256a91a6fba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Musicien gnaoua" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-3">Musique Amazighe</h3>
                  <p className="text-gray-700 mb-4">
                    Expression musicale des populations berbères, variant selon les régions. Dans le Moyen Atlas, 
                    l'ahidous associe chants collectifs et danses en cercle, tandis que dans le Sud, 
                    l'ahwach mêle percussions puissantes et poésie improvisée.
                  </p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Danseurs amazighs" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-3">Chaâbi</h3>
                  <p className="text-gray-700 mb-4">
                    Musique populaire urbaine apparue au milieu du XXe siècle, le chaâbi fusionne éléments traditionnels 
                    et influences modernes. Avec ses paroles en dialecte marocain et son rythme entraînant, 
                    il est omniprésent dans les célébrations familiales.
                  </p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1485811904074-04513843270c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Musiciens chaâbi" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="instruments" className="mt-6 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-serif text-xl font-medium mb-3 text-center">Instruments à Cordes</h4>
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1631461205110-7b13e47f3000?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Oud" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-morocco-blue mr-2"></span>
                    <span><strong>Oud</strong> : Luth à manche court et corps piriforme</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-morocco-blue mr-2"></span>
                    <span><strong>Rebab</strong> : Violon à deux cordes traditionnnel</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-morocco-blue mr-2"></span>
                    <span><strong>Gimbri</strong> : Luth-tambour à trois cordes gnaoua</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-serif text-xl font-medium mb-3 text-center">Instruments à Percussion</h4>
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Bendir" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-morocco-green mr-2"></span>
                    <span><strong>Bendir</strong> : Tambour sur cadre avec timbre</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-morocco-green mr-2"></span>
                    <span><strong>Darbouka</strong> : Tambour en forme de gobelet</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-morocco-green mr-2"></span>
                    <span><strong>Qraqeb</strong> : Castagnettes métalliques gnaoua</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-serif text-xl font-medium mb-3 text-center">Instruments à Vent</h4>
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1527868368705-b13fb4f7977a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Nay" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-morocco-red mr-2"></span>
                    <span><strong>Nay</strong> : Flûte en roseau à embouchure terminale</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-morocco-red mr-2"></span>
                    <span><strong>Ghaita</strong> : Hautbois traditionnel au son puissant</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-morocco-red mr-2"></span>
                    <span><strong>Mizmar</strong> : Instrument à anche double conique</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="font-serif text-2xl font-semibold mb-4">L'Art de la Fabrication</h3>
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                La fabrication des instruments traditionnels marocains est un art à part entière, transmis de génération en génération. 
                Les artisans sélectionnent soigneusement les matériaux - bois précieux, peaux d'animaux, métaux - et appliquent 
                des techniques ancestrales pour créer des instruments aux sonorités uniques.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-3xl mb-2 text-morocco-blue">🪵</div>
                  <h5 className="font-medium mb-1">Sélection du Bois</h5>
                  <p className="text-sm text-gray-600">Cèdre, noyer, olivier selon l'instrument</p>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="text-3xl mb-2 text-morocco-green">🧵</div>
                  <h5 className="font-medium mb-1">Cordage</h5>
                  <p className="text-sm text-gray-600">Boyau, nylon ou métal selon la sonorité recherchée</p>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="text-3xl mb-2 text-morocco-ochre">🔨</div>
                  <h5 className="font-medium mb-1">Sculpture</h5>
                  <p className="text-sm text-gray-600">Façonnage manuel avec outils traditionnels</p>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="text-3xl mb-2 text-morocco-red">🎨</div>
                  <h5 className="font-medium mb-1">Décoration</h5>
                  <p className="text-sm text-gray-600">Incrustations, motifs géométriques, calligraphie</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="festivals" className="mt-6 space-y-8">
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center">Évolution des Festivals de Musique au Maroc</h3>
              
              <div className="h-80 mt-8">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={festivalTimelineData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <RechartsTooltip />
                    <Line type="monotone" dataKey="festivals" stroke="#8884d8" activeDot={{ r: 8 }} name="Nombre de Festivals" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                Croissance du nombre de festivals de musique au Maroc depuis l'an 2000, avec projection jusqu'en 2025
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-morocco-blue/20 flex items-center justify-center text-morocco-blue text-xl font-bold mr-4">
                      F
                    </div>
                    <h3 className="font-serif text-2xl font-semibold">Festival de Fès des Musiques Sacrées du Monde</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Créé en 1994, ce festival célèbre les musiques spirituelles des différentes cultures du monde. 
                    Il se déroule dans des lieux patrimoniaux de Fès, notamment Bab Al Makina et le Jardin Jnan Sbil.
                  </p>
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Festival de Fès" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Musique sacrée</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Juin</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">International</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-50 to-red-50 border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-morocco-red/20 flex items-center justify-center text-morocco-red text-xl font-bold mr-4">
                      G
                    </div>
                    <h3 className="font-serif text-2xl font-semibold">Festival Gnaoua et Musiques du Monde d'Essaouira</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Festival emblématique mettant à l'honneur la musique gnaoua tout en favorisant les fusions avec le jazz, 
                    le blues et d'autres genres. Depuis 1998, il attire des musiciens du monde entier.
                  </p>
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Festival Gnaoua" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Gnaoua</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Juin</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Fusion</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-morocco-green/20 flex items-center justify-center text-morocco-green text-xl font-bold mr-4">
                      M
                    </div>
                    <h3 className="font-serif text-2xl font-semibold">Mawazine - Rythmes du Monde</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    L'un des plus grands festivals d'Afrique, Mawazine se tient à Rabat et présente aussi bien des stars 
                    internationales que des artistes arabes et africains. Il propose également une programmation dédiée aux musiques traditionnelles.
                  </p>
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Festival Mawazine" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Pop</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Mai-Juin</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Massif</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-morocco-ochre/20 flex items-center justify-center text-morocco-ochre text-xl font-bold mr-4">
                      T
                    </div>
                    <h3 className="font-serif text-2xl font-semibold">Festival Timitar d'Agadir</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Dédié à la culture amazighe, ce festival met en valeur les musiques et artistes berbères 
                    tout en proposant des rencontres avec des musiques du monde entier.
                  </p>
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Festival Timitar" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Amazigh</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Juillet</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Gratuit</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <section className="bg-morocco-blue/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center">Découvrir la Musique par Ville</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1518878850348-137aa58cf030?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Musique à Fès" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Fès</h3>
                <p className="text-gray-700 mb-4">
                  Capitale de la musique andalouse et des traditions soufies, avec son festival mondialement reconnu des Musiques Sacrées.
                </p>
                <div className="flex justify-end">
                  <a href="/fes" className="text-morocco-blue hover:underline">Explorer Fès &rarr;</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1543702440-74b472cc5f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Musique à Meknès" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Meknès</h3>
                <p className="text-gray-700 mb-4">
                  Foyer du melhoun, poésie chantée urbaine, et de la hadra, musique spirituelle des confréries religieuses.
                </p>
                <div className="flex justify-end">
                  <a href="/meknes" className="text-morocco-ochre hover:underline">Explorer Meknès &rarr;</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Musique à Rabat" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Rabat</h3>
                <p className="text-gray-700 mb-4">
                  Scène musicale contemporaine dynamique, accueillant le festival Mawazine et de nombreux concerts internationaux.
                </p>
                <div className="flex justify-end">
                  <a href="/rabat" className="text-morocco-blue hover:underline">Explorer Rabat &rarr;</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Musique à Marrakech" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Marrakech</h3>
                <p className="text-gray-700 mb-4">
                  Place Jemaa el-Fna, théâtre quotidien de performances musicales traditionnelles, et ville de nombreux festivals d'été.
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

export default Music;
