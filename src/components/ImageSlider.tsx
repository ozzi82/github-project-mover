import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Zap } from "lucide-react";

interface ImageSliderProps {
  dayImage: string;
  nightImage: string;
  productTitle: string;
}

const ImageSlider = ({ dayImage, nightImage, productTitle }: ImageSliderProps) => {
  const [currentView, setCurrentView] = useState<'day' | 'night'>('day');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleView = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(currentView === 'day' ? 'night' : 'day');
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-xl bg-gradient-to-br from-muted/50 to-muted/20">
        {/* Background overlay for transition effect */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`} />

        {/* Lightning effect during transition */}
        {isTransitioning && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 animate-pulse">
              <Zap className="w-8 h-8 text-yellow-400 animate-bounce" />
            </div>
          </div>
        )}

        <img
          src={currentView === 'day' ? dayImage : nightImage}
          alt={`${productTitle} - ${currentView === 'day' ? 'Day View' : 'Night View'}`}
          className={`w-full h-full object-cover transition-all duration-500 transform ${
            isTransitioning
              ? 'scale-105 blur-sm opacity-70'
              : 'scale-100 blur-0 opacity-100 hover:scale-102'
          }`}
        />

        {/* View Indicator */}
        <div className={`absolute top-4 left-4 bg-background/90 backdrop-blur-md rounded-full px-4 py-2 border border-border/50 shadow-lg transition-all duration-300 ${
          currentView === 'night' ? 'bg-slate-900/90 border-slate-700/50' : 'bg-background/90'
        }`}>
          <div className="flex items-center gap-2 text-sm font-medium">
            {currentView === 'day' ? (
              <>
                <Sun className="w-4 h-4 text-yellow-500 animate-pulse" />
                <span className="text-foreground">Day View</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-blue-400 animate-pulse" />
                <span className="text-blue-100">Night View</span>
              </>
            )}
          </div>
        </div>

        {/* Glowing effect for night view */}
        {currentView === 'night' && !isTransitioning && (
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent pointer-events-none" />
        )}
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
