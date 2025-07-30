import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    image: string;
    title: string;
    description: string;
    features: string[];
    badges: string[];
    specifications: Record<string, string>;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-border overflow-hidden">
      {product.image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-2">
              {product.badges.map((badge, idx) => (
                <Badge 
                  key={idx} 
                  variant={badge === "Best Seller" ? "default" : "secondary"}
                >
                  {badge}
                </Badge>
              ))}
            </div>
            <CardTitle className="text-2xl font-semibold text-foreground">
              {product.title}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-muted-foreground text-base">
          {product.description}
        </CardDescription>
      </CardHeader>

            <CardContent className="space-y-6">
        {/* Specifications */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
          <div className="grid grid-cols-1 gap-2">
            {Object.entries(product.specifications).map(([key, value], idx) => (
              <div key={idx} className="text-sm text-muted-foreground flex items-start">
                <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span><span className="font-medium">{key}:</span> {value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <Button className="flex-1" asChild>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </Button>
          <Button variant="outline" className="flex-1" asChild>
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
