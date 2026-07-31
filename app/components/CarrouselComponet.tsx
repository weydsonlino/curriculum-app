"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type ProjectsCarouselProps = {
  children: React.ReactNode;
};

export default function ProjectsCarousel({ children }: ProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
      }),
    ],
  );

  //   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  //   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-8">{children}</div>
    </div>
  );
}
