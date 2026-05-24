import Hero from "./components/Hero";
import WhySarvada from "./components/WhySarvada";
import HowWeWork from "./components/HowWeWork";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhySarvada />
      <HowWeWork />
    </div>
  );
}
