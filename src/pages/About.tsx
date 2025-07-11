import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Shield, Clock, Award, Factory, Truck } from "lucide-react";
const About = () => {
  const milestones = [{
    year: "1999",
    event: "Company Founded",
    description: "Started as a small fabrication shop"
  }, {
    year: "2005",
    event: "First Major Expansion",
    description: "Added automated cutting equipment"
  }, {
    year: "2010",
    event: "LED Technology Leader",
    description: "Early adopter of LED lighting systems"
  }, {
    year: "2015",
    event: "Trimless Innovation",
    description: "Developed proprietary trimless channel letter process"
  }, {
    year: "2020",
    event: "National Distribution",
    description: "Serving all 50 states and Canada"
  }, {
    year: "2024",
    event: "25 Years Strong",
    description: "Industry leader in wholesale manufacturing"
  }];
  const capabilities = [{
    icon: <Factory className="w-8 h-8" />,
    title: "50,000 sq ft Manufacturing",
    description: "State-of-the-art facility with advanced CNC equipment, laser cutting, and automated LED assembly lines."
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Team",
    description: "Skilled craftspeople, engineers, and quality control specialists with decades of combined experience."
  }, {
    icon: <Shield className="w-8 h-8" />,
    title: "Quality Standards",
    description: "ISO 9001 certified quality management system ensuring consistent, reliable manufacturing processes."
  }, {
    icon: <Truck className="w-8 h-8" />,
    title: "Nationwide Shipping",
    description: "Fast, secure shipping to all 50 states and Canada with tracking and white-glove delivery options."
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-200">About Sunlite Signs Manufacturing</h1>
            <p className="text-xl mb-8 opacity-90 text-slate-400">
              25 years of innovation in wholesale signage manufacturing. Trusted by sign companies 
              across North America for quality, reliability, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 1999, Sunlite Signs began as a small fabrication shop with a simple mission: 
                create the highest quality channel letters and signage products for the sign industry.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over 25 years, we've grown into one of North America's leading wholesale signage manufacturers, 
                pioneering innovations like true trimless channel letters and advanced LED integration systems.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we serve over 2,500 sign companies across the USA and Canada, maintaining our commitment 
                to quality, innovation, and the partnerships that built our success.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary">2,500+</div>
                  <div className="text-sm text-muted-foreground">Sign Company Partners</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary">150,000+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Company Timeline</h3>
              {milestones.map((milestone, index) => <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">{milestone.event}</h4>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Manufacturing Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Advanced equipment, skilled craftspeople, and rigorous quality control processes 
              ensure every product meets the highest industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => <Card key={index} className="bg-card shadow-card border-border">
                <CardContent className="p-8">
                  <div className="text-primary mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Quality & Certifications
              </h2>
              <p className="text-xl text-muted-foreground">
                Our commitment to quality is backed by industry certifications and rigorous testing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">UL Listed</h3>
                <p className="text-sm text-muted-foreground">All LED components meet UL safety standards</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">ISO 9001</h3>
                <p className="text-sm text-muted-foreground">Certified quality management system</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">5 Year Warranty</h3>
                <p className="text-sm text-muted-foreground">Comprehensive warranty on all LED systems</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">100% QC</h3>
                <p className="text-sm text-muted-foreground">Every product tested before shipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;