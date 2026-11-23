import React from "react";
import { Header } from "@/components/Header";
import { HeroSpatial } from "@/components/HeroSpatial";
import { LookbookGallery } from "@/components/LookbookGallery";
import { MomentsGrid } from "@/components/MomentsGrid";
import { ManifestoRoi } from "@/components/ManifestoRoi";
import { SpatialJourney } from "@/components/SpatialJourney";
import { CuratedCatalog } from "@/components/CuratedCatalog";
import { TurnkeyMethod } from "@/components/TurnkeyMethod";
import { IntegratedEngineering } from "@/components/IntegratedEngineering";
import { ShowroomSection } from "@/components/ShowroomSection";
import { Footer } from "@/components/Footer";
import { WhatsAppDock } from "@/components/WhatsAppDock";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSpatial />
        <LookbookGallery />
        <MomentsGrid />
        <ManifestoRoi />
        <SpatialJourney />
        <CuratedCatalog />
        <TurnkeyMethod />
        <IntegratedEngineering />
        <ShowroomSection />
      </main>
      <Footer />
      <WhatsAppDock />
    </>
  );
}
