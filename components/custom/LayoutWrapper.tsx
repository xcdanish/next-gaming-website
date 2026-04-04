"use client";

import React from "react";
import { SoundProvider } from "@/components/providers/SoundProvider";
import Navbar from "@/components/custom/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/custom/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SoundProvider>
      <Navbar />
      {children}
      <ContactSection />
      <Footer />
    </SoundProvider>
  );
}
