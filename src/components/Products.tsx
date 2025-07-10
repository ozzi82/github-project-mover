import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const ledSignsImage = "/src/assets/led-signs.jpg";
const vinylBannersImage = "/src/assets/vinyl-banners.jpg";
const pylonSignsImage = "/src/assets/pylon-signs.jpg";

const Products = () => {
  const products = [
    {
      image: ledSignsImage,
      title: "LED Channel Letters",
      description: "Custom illuminated signage for storefronts and buildings",
      price: "Starting at $299",
      features: ["Custom fonts", "LED illumination", "Weather resistant", "UL listed"]
    },
    {
      image: vinylBannersImage,
      title: "Digital Graphics",
      description: "Large format prints and vinyl graphics for any application",
      price: "Starting at $4.99/sq ft",
      features: ["UV resistant", "Custom sizes", "Multiple substrates", "Laminated options"]
    },
    {
      image: pylonSignsImage,
      title: "Pylon Signs",
      description: "High-visibility roadside signs for maximum impact",
      price: "Starting at $2,999",
      features: ["LED lighting", "Custom height", "Multi-tenant options", "Permit ready"]
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
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {product.title}
                  </CardTitle>
                  <span className="text-accent font-semibold text-lg">
                    {product.price}
                  </span>
                </div>
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
                <div className="flex gap-2">
                  <Button variant="default" className="flex-1">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;