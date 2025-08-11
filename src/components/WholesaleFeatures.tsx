import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Layers, Scissors, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
const WholesaleFeatures = () => {
  const features = [{
    icon: <Zap className="w-8 h-8" />,
    title: "Edgeluxe Trimless Channel Letters",
    description: "True trimless flush-face design with no visible trim lines - superior to traditional channel letters and competitive with quality.",
    benefits: ["No visible seams", "Weather sealed", "UL listed LEDs", "Custom fonts"],
    badge: "Most Popular"
  }, {
    icon: <Layers className="w-8 h-8" />,
    title: "Edgeluxe Cast Block Acrylic Letters",
    description: "Premium thick-cast acrylic letters with precision CNC cutting with superior quality and faster delivery.",
    benefits: ['1/2" to 2" thickness', "Polished edges", "Custom colors", "Weather resistant"],
    badge: "Premium Quality"
  }, {
    icon: <Scissors className="w-8 h-8" />,
    title: "Edgeluxe Flat Cut Metal Letters",
    description: "Precision laser cut aluminum and stainless steel letters with powder coat or brushed finishes.",
    benefits: ["Laser precision", "Multiple finishes", "Custom thickness", "Fast turnaround"],
    badge: "Quick Ship"
  }, {
    icon: <Wrench className="w-8 h-8" />,
    title: "Edgeluxe Custom Metal Fabrication",
    description: "Complete custom fabrication services for unique signage projects and special requirements.",
    benefits: ["Custom shapes", "Welded construction", "Powder coating", "Engineering support"],
    badge: "Custom"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Wholesale Manufacturing Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Advanced manufacturing technologies delivering superior quality
            trimless channel letters and cast block acrylic letters to sign
            companies across North America. 24-hour quotes, 21-day delivery from
            art approval, 3-year warranty.
          </p>
        </div>

        

        {/* Competitive Advantages */}
      </div>
    </section>;
};
export default WholesaleFeatures;