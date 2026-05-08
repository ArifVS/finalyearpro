import { createFileRoute } from "@tanstack/react-router";
import { CyberBackground } from "@/components/traffic/Background";
import { Nav } from "@/components/traffic/Nav";
import { Hero } from "@/components/traffic/Hero";
import { Dashboard } from "@/components/traffic/Dashboard";
import { Analytics } from "@/components/traffic/Analytics";
import { Federated } from "@/components/traffic/Federated";
import { Features } from "@/components/traffic/Features";
import { UploadSection } from "@/components/traffic/Upload";
import { Detection } from "@/components/traffic/Detection";
import { About } from "@/components/traffic/About";
import { Team } from "@/components/traffic/Team";
import { Footer } from "@/components/traffic/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeuroTraffic — Edge Federated Learning for Smart Cities" },
      { name: "description", content: "AI-powered real-time traffic prediction using edge-based federated learning. Privacy-preserving, low-latency, built for smart cities." },
      { property: "og:title", content: "NeuroTraffic — Smart City Traffic AI" },
      { property: "og:description", content: "Edge-based federated learning for real-time traffic prediction." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark relative min-h-screen overflow-hidden text-foreground">
      <CyberBackground />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Dashboard />
        <Analytics />
        <Federated />
        <Features />
        <UploadSection />
        <Detection />
        <About />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
