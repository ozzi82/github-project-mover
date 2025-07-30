import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

interface ImageSliderProps {
  dayImage: string;
  nightImage: string;
  productTitle: string;
}

const ImageSlider = ({ dayImage, nightImage, productTitle }: ImageSliderProps) => {
  const [currentView, setCurrentView] = useState<'day' | 'night'>('day');

  const toggleView = () => {
    setCurrentView(currentView === 'day' ? 'night' : 'day');
  };

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border shadow-lg">
        <img
          src={currentView === 'day' ? dayImage : nightImage}
          alt={`${productTitle} - ${currentView === 'day' ? 'Day View' : 'Night View'}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* View Indicator */}
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 border border-border">
          <div className="flex items-center gap-2 text-sm font-medium">
            {currentView === 'day' ? (
              <>
                <Sun className="w-4 h-4 text-yellow-500" />
                <span>Day View</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-blue-400" />
                <span>Night View</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Toggle Controls */}
      <div className="flex justify-center mt-6">
        <div className="bg-muted rounded-lg p-1 flex gap-1">
          <Button
            variant={currentView === 'day' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentView('day')}
            className="flex items-center gap-2"
          >
            <Sun className="w-4 h-4" />
            Day View
          </Button>
          <Button
            variant={currentView === 'night' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentView('night')}
            className="flex items-center gap-2"
          >
            <Moon className="w-4 h-4" />
            Night View
          </Button>
        </div>
      </div>

      {/* Slider Toggle Alternative */}
      <div className="flex justify-center mt-4">
        <div className="text-sm text-muted-foreground">
          <Button
            variant="link"
            onClick={toggleView}
            className="p-0 h-auto text-primary hover:text-primary/80"
          >
            Switch to {currentView === 'day' ? 'Night' : 'Day'} View →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
