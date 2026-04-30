/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Ventures } from "./sections/Ventures";
import { Projects } from "./sections/Projects";
import { Services } from "./sections/Services";
import { Stack } from "./sections/Stack";
import { Writing } from "./sections/Writing";
import { Speaking } from "./sections/Speaking";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-brand-bg min-h-screen text-brand-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Projects />
        <Services />
        <Stack />
        <Writing />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
