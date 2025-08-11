import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, MapPin, Calendar } from "lucide-react";
const ProjectGallery = () => {
  const projects = [{
    id: 1,
    title: "Plaza Shopping Center",
    location: "Retail Complex",
    type: "Trimless Channel Letters",
    image: "/lovable-uploads/04527713-5a62-42a7-8c53-a76cc1d16206.png",
    description: "Large-scale trimless channel letters with perfect flush-face installation. Clean, professional appearance with no visible seams.",
    features: ["60\" tall letters", "White LED illumination", "Flush mounting", "Weather sealed"],
    category: "retail"
  }, {
    id: 2,
    title: "Resistor Technology",
    location: "Corporate Office",
    type: "Illuminated Channel Letters",
    image: "/lovable-uploads/35f59ec9-bce4-4cea-bf24-64fe074725e0.png",
    description: "Vibrant pink illuminated channel letters creating strong brand visibility. Custom color matching and precision fabrication.",
    features: ["Custom pink color", "High-visibility LED", "Corporate branding", "Night impact"],
    category: "corporate"
  }, {
    id: 3,
    title: "Professional Services",
    location: "Medical Building",
    type: "Halo-Lit Letters",
    image: "/lovable-uploads/4ab12be9-9199-4263-b08b-208aab0968ee.png",
    description: "Sophisticated halo-illuminated letters with warm backlighting effect. Perfect for upscale professional environments.",
    features: ["Warm white halo", "Standoff mounting", "Professional finish", "Architectural quality"],
    category: "professional"
  }, {
    id: 4,
    title: "Signature Styles",
    location: "Boutique Retail",
    type: "Trimless Channel Letters",
    image: "/lovable-uploads/71fcf487-152f-4a68-8ad8-9075fa11c370.png",
    description: "Elegant white channel letters with seamless trimless construction. Perfect for high-end retail applications.",
    features: ["Seamless design", "Premium white finish", "Retail optimization", "Brand enhancement"],
    category: "retail"
  }, {
    id: 5,
    title: "Subway Restaurant",
    location: "Quick Service",
    type: "Backlit Channel Letters",
    image: "/lovable-uploads/be85f9ad-8d0b-4c0f-8921-f630ba88ee69.png",
    description: "High-impact backlit letters for maximum visibility. Strategic lighting design for quick service restaurant branding.",
    features: ["High visibility", "Brand standard colors", "Quick service design", "Maximum impact"],
    category: "restaurant"
  }];
  const categories = [{
    id: "all",
    name: "All Projects",
    count: projects.length
  }, {
    id: "retail",
    name: "Retail",
    count: projects.filter(p => p.category === "retail").length
  }, {
    id: "corporate",
    name: "Corporate",
    count: projects.filter(p => p.category === "corporate").length
  }, {
    id: "professional",
    name: "Professional",
    count: projects.filter(p => p.category === "professional").length
  }, {
    id: "restaurant",
    name: "Restaurant",
    count: projects.filter(p => p.category === "restaurant").length
  }];
  return <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            See our trimless channel letters and illuminated signage in action. Real installations 
            for retail, corporate, and professional clients across North America.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => {})}
        </div>

        {/* Projects Grid */}
        

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-card shadow-card border-border inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Get wholesale pricing on trimless channel letters and illuminated signage. 
                24-48 hour quotes, professional drawings included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Request Quote
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/products">View All Products</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ProjectGallery;