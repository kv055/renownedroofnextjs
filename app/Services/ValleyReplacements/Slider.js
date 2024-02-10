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

import Valley1 from '../../../public/Group4WebsiteSliderPics.jpg'
import Valley2 from '../../../public/Group5WebsiteSliderPics2.jpg'
import Valley3 from '../../../public/Group7WebsiteSliderPics3.jpg'
import ValleyBefore from '../../../public/ServicesValleyBefore.jpeg'
import ValleyAfter from '../../../public/ServicesValleyAfter.jpeg'


const images = [
    Valley1,
    Valley2,
    Valley3,
    ValleyBefore,
    ValleyAfter
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