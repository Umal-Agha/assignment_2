import Navbar from "@/app/components/navbar";
import HeroSection from "@/app/components/hero_section";
import Card from "@/app/components/cards";

export default function Home() {
  return (
    <div className="h-[1132px] bg-[#252B42]">
      <Navbar />
      <HeroSection />
      <Card />
    </div>
  );
}
