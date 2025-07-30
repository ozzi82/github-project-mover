import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductById } from "@/data/products";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProductById(productId) : null;

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-2 left-8 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
          <div className="absolute top-8 left-1/3 w-16 h-16 bg-primary/5 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 text-sm">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <span className="text-muted-foreground/60">›</span>
            <Link
              to="/products"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Products
            </Link>
            <span className="text-muted-foreground/60">›</span>
            <span className="text-foreground font-semibold bg-primary/10 px-3 py-1 rounded-full">
              {product.title}
            </span>
          </div>

          {/* Product Category Badge */}
          <div className="mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent-foreground border border-accent/30">
              {product.category}
            </span>
          </div>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button variant="ghost" className="mb-8" asChild>
            <Link to="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div>
              <ImageSlider
                dayImage={product.dayImage}
                nightImage={product.nightImage}
                productTitle={product.title}
              />
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-8">
              {/* Product Header */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.badges.map((badge, idx) => (
                    <Badge 
                      key={idx} 
                      variant={badge === "Best Seller" ? "default" : "secondary"}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {product.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {product.description}
                </p>
                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Technical Support</Link>
                  </Button>
                </div>
              </div>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                  <CardDescription>
                    Professional-grade features for superior performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Technical Specifications</CardTitle>
                <CardDescription>
                  Detailed technical information and specifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value], idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-foreground">{key}:</span>
                      </div>
                      <p className="text-sm text-muted-foreground pl-4 border-l-2 border-primary/20">
                        {value}
                      </p>
                      {idx < Object.entries(product.specifications).length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Order {product.title}?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Get wholesale pricing and professional drawings. Our team provides 
                  24-48 hour quotes with complete technical specifications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Wholesale Quote</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/products">View All Products</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
