
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Fes from "./pages/Fes";
import Meknes from "./pages/Meknes";
import Rabat from "./pages/Rabat";
import Marrakech from "./pages/Marrakech";
import NotFound from "./pages/NotFound";
import FadeTransition from "@/components/FadeTransition";
import React from "react";
import Arts from "./pages/Arts";
import Music from "./pages/Music";
import Cinema from "./pages/Cinema";
import Circuit from "./pages/Circuit";
import About from "./pages/About";
import Collection from "./pages/Collection";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <FadeTransition keyId={location.pathname} duration={800} delay={50} className="min-h-screen">
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/fes" element={<Fes />} />
        <Route path="/meknes" element={<Meknes />} />
        <Route path="/rabat" element={<Rabat />} />
        <Route path="/marrakech" element={<Marrakech />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/music" element={<Music />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/circuit" element={<Circuit />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </FadeTransition>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
