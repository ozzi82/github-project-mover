import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded CTA Card */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 mb-2 animate-fade-in">
          <div className="bg-background border border-border rounded-lg shadow-xl p-4 max-w-xs">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 p-1 hover:bg-muted rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="font-semibold text-foreground mb-2">Get Your Quote</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Ready to start your project? Get wholesale pricing and professional drawings in 24-48 hours.
            </p>
            <div className="space-y-2">
              <Button size="sm" className="w-full" asChild>
                <Link to="/contact">Request Quote</Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
        size="lg"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingCTA;
