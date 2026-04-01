import bestWestern from "@/assets/logos/best-western.png";
import choiceHotels from "@/assets/logos/choice-hotels.png";
import wyndham from "@/assets/logos/wyndham.png";
import motel6 from "@/assets/logos/motel6.png";
import marriott from "@/assets/logos/marriott.png";
import hilton from "@/assets/logos/hilton.png";
import ihg from "@/assets/logos/ihg.png";

const logos = [
  { name: "Best Western", image: bestWestern },
  { name: "Choice Hotels", image: choiceHotels },
  { name: "Wyndham", image: wyndham },
  { name: "Motel 6", image: motel6 },
  { name: "Marriott", image: marriott },
  { name: "Hilton", image: hilton },
  { name: "IHG", image: ihg },
];

export const LogoCarousel = () => {
  return (
    <section className="py-10 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground text-base md:text-lg font-medium mb-8">
          Trusted by leading hotel management companies, brands, and operators
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div className="flex w-max animate-marquee">
          {/* Render logos twice for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center mx-10 md:mx-14"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="h-14 md:h-[72px] w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-500"
                style={{
                  filter: "grayscale(100%) contrast(1.3) brightness(0.9)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%) contrast(1) brightness(1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%) contrast(1.3) brightness(0.9)";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
