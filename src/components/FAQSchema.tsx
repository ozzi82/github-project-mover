import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Download, FileText, Zap } from "lucide-react";
const FAQSchema = () => {
  console.log("FAQSchema component rendering");
  const faqs = [{
    question: "What are trimless channel letters?",
    answer: "Trimless channel letters feature a flush-face design with no visible trim or seams around the face. The LED modules are fully enclosed within the letter, creating a clean, seamless appearance that's superior to traditional trim-cap construction."
  }, {
    question: "What is the minimum stroke width for trimless letters?",
    answer: "Our trimless channel letters require a minimum stroke width of 1.5 inches to accommodate the LED modules and maintain structural integrity. For smaller text, we recommend our cast block acrylic letters."
  }, {
    question: "What is your lead time from art approval?",
    answer: "Production and delivery is 21 days from final art approval. We provide production drawings and 3D renderings within 24-48 hours of order placement for your approval before manufacturing begins."
  }, {
    question: "Are your channel letters UL 48 listed?",
    answer: "Yes, all our channel letters use UL 48 listed LED modules and are manufactured to UL standards. We provide UL documentation with every order and include appropriate power supplies."
  }, {
    question: "Do you ship to Canada?",
    answer: "Yes, we ship to both USA and Canada. All products are manufactured in Florida and shipped via freight carriers. Shipping costs are calculated based on weight, dimensions, and destination."
  }, {
    question: "What's included with every order?",
    answer: "Every order includes: production drawings, 3D day/night renderings, touch-up paint (for painted products), 1:1 installation patterns, power supplies (for LED products), and a comprehensive 3-year warranty."
  }];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(structuredData)
    }} />
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our wholesale trimless channel letters and cast block acrylic letters
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>

            {/* Resource Hub */}
            <div className="mt-16">
              
              
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default FAQSchema;