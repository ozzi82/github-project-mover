import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import trimlessChannelImage from "@/assets/trimless-channel-letters.jpg";
import haloLitImage from "@/assets/halo-lit-letters.jpg";
import castBlockImage from "@/assets/cast-block-acrylic.jpg";
import pylonSignImage from "@/assets/pylon-sign.jpg";

const Products = () => {
  const products = [
    {
      image: trimlessChannelImage,
      title: "Trimless Channel Letters",
      description: "Professional flush-mounted channel letters with no visible trim lines or seams",
      features: ["No visible trim lines", "UL listed LED modules", "Weather sealed", "Custom fonts available"]
    },
    {
      image: haloLitImage,
      title: "Halo-Lit Channel Letters", 
      description: "Premium backlit channel letters creating beautiful halo illumination effects",
      features: ["Even halo glow", "Multiple standoff heights", "Architectural grade", "Warm LED lighting"]
    },
    {
      image: castBlockImage,
      title: "Cast Block Acrylic Letters",
      description: "Thick dimensional acrylic letters precision-cut for professional signage",
      features: ["Precision cutting", "Multiple thicknesses", "Various acrylics", "Custom dimensions"]
    },
    {
      image: pylonSignImage,
      title: "Pylon Signs",
      description: "Large roadside signs for maximum visibility and business identification", 
      features: ["LED illumination", "Custom heights", "Multi-tenant options", "Permit assistance"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our most popular signage solutions designed to elevate your business presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="bg-card shadow-card hover:shadow-hero transition-all duration-300 overflow-hidden border-border">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground mb-3">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Button variant="cta" className="flex-1 apple-glow">
                    Get Quote
                  </Button>
                  <Button variant="premium" className="flex-1">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="apple-glow-hero">
            View Complete Product Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;