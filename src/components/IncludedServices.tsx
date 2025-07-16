import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileImage, Palette, Zap, Package, Shield, Eye } from "lucide-react";
const designRenderingImage = "/src/assets/3d-design-rendering.jpg"; // UPDATE: Technical drawing of ABC channel letters
const dayNightRenderingImage = "/src/assets/day-night-rendering.jpg"; // UPDATE: Isometric A letter day/night view
const touchUpPaintImage = "/src/assets/touch-up-paint.jpg";
const installationPatternImage = "/src/assets/installation-pattern.jpg";
const powerSuppliesImage = "/src/assets/power-supplies.jpg";
const warrantyImage = "/src/assets/warranty.jpg";
const IncludedServices = () => {
  const services = [
    {
      icon: <FileImage className="w-8 h-8" />,
      title: "Free Production Drawings",
      description:
        "Complete technical drawings with dimensions and specifications for every order.",
      image: designRenderingImage,
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "3D Day & Night Views",
      description:
        "Realistic 3D renderings showing your signage illuminated and non-illuminated.",
      highlight: true,
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Touch-Up Paint Included",
      description:
        "Matching touch-up paint provided with every painted product order.",
      image: touchUpPaintImage,
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "1:1 Installation Patterns",
      description:
        "Full-size paper patterns for precise field installation positioning.",
      image: installationPatternImage,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Power Supplies Included",
      description:
        "All necessary transformers and power supplies included with LED products.",
      image: powerSuppliesImage,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "3-Year Warranty",
      description:
        "Comprehensive 3-year warranty coverage on all manufactured products.",
      image: warrantyImage,
    },
  ];
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What's Included With Every Order
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Professional wholesale signage manufacturing includes everything
            your sign company needs for successful installation and customer
            satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-border ${
                service.highlight ? "ring-2 ring-primary/20" : ""
              }`}
            >
              {service.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <div className="text-primary mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="rounded-lg p-8 shadow-card bg-slate-900">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Process: Quote to Delivery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Quote Request
              </h4>
              <p className="text-sm text-muted-foreground">
                Submit specs or drawings for pricing
              </p>
              <div className="text-xs text-primary font-medium mt-1">
                24-48 hour response
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Production Drawings
              </h4>
              <p className="text-sm text-muted-foreground">
                Receive detailed drawings and 3D renderings
              </p>
              <div className="text-xs text-primary font-medium mt-1">
                24-48 hours after order
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Art Approval
              </h4>
              <p className="text-sm text-muted-foreground">
                Customer reviews and approves all drawings
              </p>
              <div className="text-xs text-primary font-medium mt-1">
                Customer timeline
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                4
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Production & Delivery
              </h4>
              <p className="text-sm text-muted-foreground">
                Manufacturing and nationwide shipping
              </p>
              <div className="text-xs text-primary font-medium mt-1">
                21 days from approval
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default IncludedServices;
