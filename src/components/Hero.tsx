import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Truck, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
// TinaCMS imports - will be available after running: npx tinacms build
let useTina: any, client: any;
try {
  ({ useTina } = require("tinacms/dist/react"));
  ({ client } = require("../../tina/__generated__/client"));
} catch (error) {
  // TinaCMS not yet initialized
  useTina = () => ({ data: null });
  client = null;
}

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  button_text: string;
  button_url: string;
  additional_data: {
    tagline: string;
    secondaryButtonText: string;
    secondaryButtonUrl: string;
    stats: Array<{
      icon: string;
      value: string;
      label: string;
    }>;
  };
}

interface TinaHeroContent {
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image_url: string;
  button_text: string;
  button_url: string;
  secondary_button_text: string;
  secondary_button_url: string;
  stats: Array<{
    icon: string;
    value: string;
    label: string;
  }>;
}

interface HeroProps {
  data?: any;
  query?: any;
  variables?: any;
}

const Hero = ({ data, query, variables }: HeroProps = {}) => {
  const [content, setContent] = useState<HeroContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Use Tina if data is available, otherwise fallback to Supabase
  const tinaProps = data ? { data, query, variables } : null;
  const { data: tinaData } = tinaProps ? useTina(tinaProps) : { data: null };

  const setFallbackContent = () => {
    setContent({
      title: "Wholesale Trimless Channel Letters &",
      subtitle: "Cast Block Acrylic",
      description:
        "UL-listed trimless channel letters and precision-cut cast block acrylic letters. German engineering precision meets Florida speed - serving sign companies across USA and Canada.",
      image_url: "/lovable-uploads/b65672d5-65aa-4d28-b91a-f20d6649be08.png",
      button_text: "Request Wholesale Quote",
      button_url: "/contact",
      additional_data: {
        tagline: "Engineered for Sign Professionals",
        secondaryButtonText: "View Product Catalog",
        secondaryButtonUrl: "/products",
        stats: [
          { icon: "Factory", value: "25+ Years", label: "Manufacturing" },
          { icon: "Truck", value: "24-48h", label: "Quote Response" },
          { icon: "Award", value: "UL Listed", label: "Components" },
          { icon: "Zap", value: "LED", label: "Efficient Lighting" },
        ],
      },
    });
    setIsLoading(false);
  };

  useEffect(() => {
    if (tinaData) {
      // Convert Tina data to our format
      const tinaContent = tinaData.heroContent as TinaHeroContent;
      setContent({
        title: tinaContent.title,
        subtitle: tinaContent.subtitle,
        description: tinaContent.description,
        image_url: tinaContent.image_url,
        button_text: tinaContent.button_text,
        button_url: tinaContent.button_url,
        additional_data: {
          tagline: tinaContent.tagline,
          secondaryButtonText: tinaContent.secondary_button_text,
          secondaryButtonUrl: tinaContent.secondary_button_url,
          stats: tinaContent.stats,
        },
      });
      setIsLoading(false);
      return;
    }

    const fetchHeroContent = async () => {
      try {
        // Set a timeout to avoid long loading times
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout')), 3000)
        );

        const supabasePromise = supabase
          .from("website_content")
          .select("*")
          .eq("content_type", "hero")
          .eq("is_active", true)
          .maybeSingle();

        const result = await Promise.race([supabasePromise, timeoutPromise]);
        const { data, error } = result as any;

        if (error) {
          console.warn("Supabase error (using fallback):", error.message);
          setFallbackContent();
          return;
        }

        if (data) {
          setContent({
            title: data.title,
            subtitle: data.subtitle,
            description: data.description,
            image_url: data.image_url,
            button_text: data.button_text,
            button_url: data.button_url,
            additional_data:
              data.additional_data as HeroContent["additional_data"],
          });
          setIsLoading(false);
        } else {
          console.info("No hero content found in database, using fallback");
          setFallbackContent();
        }
      } catch (err) {
        console.warn("Failed to fetch hero content (using fallback):", err instanceof Error ? err.message : String(err));
        setFallbackContent();
      }
    };

    fetchHeroContent();
  }, [tinaData]);

  const getIcon = (iconName: string) => {
    const icons = { Factory, Truck, Award, Zap };
    return icons[iconName as keyof typeof icons] || Factory;
  };

  if (isLoading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-background via-background/95 to-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading hero content...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={content.image_url}
          alt="Professional channel letter manufacturing facility"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Foreground content aligned to right */}
      <div
        className="container mx-auto px-6 relative z-10 flex justify-end items-center min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F91c68b23f3a04bf5a94564bf5338d5e4%2F106d1b9959194de5ac8f6e474874f43b)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-background/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 md:p-10 max-w-xl w-full m-5 mr-12">
          <div className="animate-fade-in">
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              {content.title}
              <span className="block text-4xl lg:text-6xl mt-1 bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent font-extrabold drop-shadow-lg">
                {content.subtitle}
              </span>
              <span className="block text-base lg:text-xl mt-3 text-white/90 drop-shadow-md">
                {content.additional_data.tagline}
              </span>
            </h1>
          </div>

          <div className="animate-fade-in mt-4">
            <p className="text-base lg:text-lg text-white/80 mb-6 leading-relaxed drop-shadow-md">
              {content.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <Button
              variant="cta"
              size="lg"
              className="text-base px-6 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold"
              asChild
            >
              <Link to={content.button_url}>
                {content.button_text}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-6 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold"
              asChild
            >
              <Link to={content.additional_data.secondaryButtonUrl}>
                {content.additional_data.secondaryButtonText}
              </Link>
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            {content.additional_data.stats.map((stat, index) => {
              const IconComponent = getIcon(stat.icon);
              return (
                <div key={index} className="flex items-center text-white">
                  <IconComponent className="w-5 h-5 mr-2 text-accent drop-shadow-md" />
                  <div>
                    <div className="font-bold">{stat.value}</div>
                    <div className="opacity-80 text-xs">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
