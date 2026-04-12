"use client";

import React from "react";
import { SoundProvider } from "@components/providers/SoundProvider";
import Navbar from "@layout/Navbar";
import ContactSection from "@sections/ContactSection";
import Footer from "@layout/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SoundProvider>
      <Navbar />
      {children}
      <ContactSection />
      <Footer />
    </SoundProvider>
  );
}
