/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { CarsWeWorkOn } from './components/CarsWeWorkOn.tsx';
import { Reviews } from './components/Reviews.tsx';
import { LocationHours } from './components/LocationHours.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] flex flex-col selection:bg-[#8b1e1e] selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Services />
        <CarsWeWorkOn />
        <LocationHours />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
