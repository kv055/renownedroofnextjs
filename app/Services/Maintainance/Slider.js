import React from 'react';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j5sxssx9aCb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { CarouselPrevious, CarouselNext, CarouselItem, CarouselContent, Carousel } from "@/components/ui/carousel"
// import { CardContent, Card } from "@/components/ui/card"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import CleaningBeforeAfter from '../../../public/ServicesCleaning.jpeg'

const images = [
  CleaningBeforeAfter
];

export default function Slider() {

  return (
    <Carousel className="w-auto max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img src={image.src} alt="slideshow image" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='hidden'>
        <CarouselPrevious />
        <CarouselNext />
      </div>


    </Carousel>
  );
}