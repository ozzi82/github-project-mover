import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Clock } from "lucide-react";
const plazaLettersImage =
  "https://cdn.builder.io/api/v1/image/assets%2F91c68b23f3a04bf5a94564bf5338d5e4%2F2f66ed09023d40b3b70fa7bf13e196fc";
const haloLettersImage =
  "https://cdn.builder.io/api/v1/image/assets%2F91c68b23f3a04bf5a94564bf5338d5e4%2Fdc7335d63a994993b10b147eb551d888";
const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "trimless-channel-letters",
      image: plazaLettersImage,
      title: "Trimless Channel Letters",
      description:
        "True trimless design with no visible seams - our signature product that outperforms traditional channel letters.",
      features: [
        "Flush-face design, no trim lines",
        "UL listed LED modules included",
        "Weather sealed construction",
        "Custom fonts and sizes",
        "3-year comprehensive warranty",
      ],
      highlight: true,
      price: "Starting at $24/letter",
    },
    {
      id: "halo-lit-letters",
      image: haloLettersImage,
      title: "Halo-Lit Channel Letters",
      description:
        "Premium halo-illuminated letters with beautiful warm backlighting effects - perfect for sophisticated architectural applications.",
      features: [
        "Even halo illumination effect",
        "Multiple standoff heights available",
        "Premium brushed or painted faces",
        "Warm LED backlighting",
        "Architectural quality finish",
      ],
    },
  ];
  return (
    <section className="py-24 bg-gradient-surface relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Featured Products</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our most popular wholesale signage products, trusted by sign
            companies across North America. 24-48 hour quotes, professional
            drawings included, 21-day delivery from approval.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {featuredProducts.map((product, index) => (
            <Card
              key={index}
              className={`group bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500 border-border/50 overflow-hidden ${
                product.highlight ? "ring-2 ring-primary/30 shadow-hero" : ""
              } hover:scale-[1.02]`}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage:
                      index === 0
                        ? "url(https://cdn.builder.io/api/v1/image/assets%2F91c68b23f3a04bf5a94564bf5338d5e4%2Fd9657f0406e64cb4a79cc1ce8cf8e68f)"
                        : "url(https://cdn.builder.io/api/v1/image/assets%2F91c68b23f3a04bf5a94564bf5338d5e4%2Fdc7335d63a994993b10b147eb551d888)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {product.price}
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-semibold text-foreground">
                      {product.title}
                    </CardTitle>
                  </div>
                  {product.highlight && (
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  )}
                </div>
                <CardDescription className="text-muted-foreground text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-6">
                  <Button variant="cta" className="flex-1 btn-premium" asChild>
                    <Link to="/contact">
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="premium" className="flex-1" asChild>
                    <Link to="/products">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="glass rounded-2xl p-10 border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-primary p-4 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300 bg-slate-50">
                <Clock className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-3">
                24-48h
              </div>
              <div className="text-xl font-semibold text-foreground mb-3">
                Quote Response
              </div>
              <div className="text-muted-foreground">
                Fast quotes on all products
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-accent p-4 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-accent group-hover:scale-110 transition-transform duration-300 bg-slate-100">
                <CheckCircle className="w-10 h-10 text-accent-foreground" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-3">
                21 Days
              </div>
              <div className="text-xl font-semibold text-foreground mb-3">
                Total Delivery
              </div>
              <div className="text-muted-foreground">
                From art approval to your door
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-primary p-4 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-3">
                3 Years
              </div>
              <div className="text-xl font-semibold text-foreground mb-3">
                Warranty
              </div>
              <div className="text-muted-foreground">
                Comprehensive coverage
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Products */}
        <div className="text-center mt-16">
          <Button
            variant="hero"
            size="lg"
            className="text-xl px-12 py-8 btn-premium"
            asChild
          >
            <Link to="/products">
              <p>View Our Sunlite Signs Signage Selection Guide</p>
              <ArrowRight className="ml-3" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
