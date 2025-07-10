import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Truck, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "/lovable-uploads/04527713-5a62-42a7-8c53-a76cc1d16206.png";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional channel letter manufacturing facility" className="w-full h-full object-cover opacity-50 scale-105 transition-transform duration-700 hover:scale-110 bg-neutral-950" />
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-accent/20"></div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-32 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-primary-glow/20 rounded-full blur-3xl float" style={{
      animationDelay: '2s'
    }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl xl:text-8xl font-bold text-primary-foreground mb-8 leading-[0.9] md:text-5xl">
              Wholesale Trimless Channel Letters &
              <span className="block text-6xl xl:text-9xl mt-2 bg-gradient-to-r from-accent via-yellow-400 to-orange-400 bg-clip-text text-transparent font-extrabold md:text-5xl">Cast Block Acrylic</span>
              <span className="block text-2xl md:text-3xl xl:text-4xl font-normal mt-6 text-primary-foreground/90">Engineered for Sign Professionals</span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <p className="text-xl md:text-2xl xl:text-3xl text-primary-foreground/90 mb-10 max-w-3xl leading-relaxed">
              UL-listed trimless channel letters and precision-cut cast block acrylic letters. 
              German engineering precision meets Florida speed - serving sign companies across USA and Canada.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <Button variant="cta" size="lg" className="apple-glow-hero text-lg xl:text-xl px-12 py-8 font-bold" asChild>
              <Link to="/contact">
                Request Wholesale Quote
                <ArrowRight className="ml-3" />
              </Link>
            </Button>
            <Button variant="premium" size="lg" className="apple-glow-secondary text-lg xl:text-xl px-12 py-8 glass border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15 font-semibold" asChild>
              <Link to="/products">
                View Product Catalog
              </Link>
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center text-primary-foreground">
              <Factory className="w-8 h-8 mr-3 text-accent" />
              <div>
                <div className="text-xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years Manufacturing</div>
              </div>
            </div>
            <div className="flex items-center text-primary-foreground">
              <Truck className="w-8 h-8 mr-3 text-accent" />
              <div>
                <div className="text-xl font-bold">24-48h</div>
                <div className="text-sm opacity-90">Quote Response</div>
              </div>
            </div>
            <div className="flex items-center text-primary-foreground">
              <Award className="w-8 h-8 mr-3 text-accent" />
              <div>
                <div className="text-xl font-bold">UL</div>
                <div className="text-sm opacity-90">Listed Components</div>
              </div>
            </div>
            <div className="flex items-center text-primary-foreground">
              <Zap className="w-8 h-8 mr-3 text-accent" />
              <div>
                <div className="text-xl font-bold">LED</div>
                <div className="text-sm opacity-90">Efficient Lighting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;