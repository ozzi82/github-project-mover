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
    if (isTransitioning) return;

    setIsTransitioning(true);

    // After the slide animation completes, change the image and slide back
    setTimeout(() => {
      setCurrentView(currentView === 'day' ? 'night' : 'day');
      setTimeout(() => setIsTransitioning(false), 800);
    }, 600);
  };

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-xl bg-gradient-to-br from-muted/50 to-muted/20">

        {/* Both images - positioned absolutely for smooth transition */}
        <img
          src={dayImage}
          alt={`${productTitle} - Day View`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${
            currentView === 'day' ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <img
          src={nightImage}
          alt={`${productTitle} - Night View`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${
            currentView === 'night' ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Left-to-Right Sliding Overlay */}
        {isTransitioning && (
          <>
            {/* Sliding curtain effect */}
            <div className={`absolute inset-0 z-20 bg-gradient-to-r from-primary via-accent to-primary transform transition-transform duration-1200 ease-in-out ${
              isTransitioning
                ? 'translate-x-0'
                : '-translate-x-full'
            }`}
            style={{
              animation: isTransitioning ? 'slideReveal 1.2s ease-in-out' : undefined
            }}
            />

            {/* Sparkling overlay effect */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <Zap className="w-12 h-12 text-yellow-300 animate-pulse" />
                    <div className="absolute inset-0 w-12 h-12 animate-ping">
                      <Zap className="w-12 h-12 text-yellow-300/50" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Moving light streaks */}
              <div className="absolute inset-0 overflow-hidden">
                <div className={`h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform transition-transform duration-1000 ${
                  isTransitioning ? 'translate-x-full' : '-translate-x-full'
                }`} style={{ width: '200%', marginLeft: '-50%' }} />
              </div>
            </div>
          </>
        )}

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
      <div className="flex justify-center mt-8">
        <div className="bg-muted/50 backdrop-blur-sm rounded-xl p-1.5 flex gap-1 border border-border/50 shadow-lg">
          <Button
            variant={currentView === 'day' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => toggleView()}
            disabled={isTransitioning}
            className={`flex items-center gap-2 transition-all duration-300 ${
              currentView === 'day'
                ? 'bg-yellow-500/90 hover:bg-yellow-500 text-white shadow-lg shadow-yellow-500/25'
                : 'hover:bg-yellow-500/10 hover:text-yellow-600'
            }`}
          >
            <Sun className={`w-4 h-4 ${currentView === 'day' ? 'animate-pulse' : ''}`} />
            Day View
          </Button>
          <Button
            variant={currentView === 'night' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => toggleView()}
            disabled={isTransitioning}
            className={`flex items-center gap-2 transition-all duration-300 ${
              currentView === 'night'
                ? 'bg-slate-700 hover:bg-slate-600 text-blue-100 shadow-lg shadow-slate-700/25'
                : 'hover:bg-slate-700/10 hover:text-slate-600'
            }`}
          >
            <Moon className={`w-4 h-4 ${currentView === 'night' ? 'animate-pulse' : ''}`} />
            Night View
          </Button>
        </div>
      </div>

      {/* Quick Toggle with Animation */}
      <div className="flex justify-center mt-6">
        <Button
          variant="outline"
          onClick={toggleView}
          disabled={isTransitioning}
          className="group relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 border-primary/20 hover:border-primary/40 transition-all duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              {isTransitioning ? 'Switching...' : `Switch to ${currentView === 'day' ? 'Night' : 'Day'} View`}
            </span>
            {isTransitioning ? (
              <Zap className="w-4 h-4 text-yellow-500 animate-spin" />
            ) : (
              <div className={`transition-transform duration-300 ${currentView === 'day' ? 'rotate-0' : 'rotate-180'}`}>
                →
              </div>
            )}
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </Button>
      </div>
    </div>
  );
};

export default ImageSlider;
