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

import RePeddingRePointing1 from '../../../public/Group10WebsiteSliderPics.jpg'
import RePeddingRePointing2 from '../../../public/Group11WebsiteSliderPics.jpg'
import RePeddingRePointing3 from '../../../public/Group12WebsiteSliderPics.jpg'
import RePeddingRePointing4 from '../../../public/Group13WebsiteSliderPics.jpg' 
import ReBeddingRePointingBefore from '../../../public/ServicesReBeddingRePointingBefore.jpeg'
import ReBeddingRePointingAfter from '../../../public/ServicesReBeddingRePointingAfter.jpeg'

const images = [
    RePeddingRePointing1,
    RePeddingRePointing2,
    RePeddingRePointing3,
    RePeddingRePointing4,
    ReBeddingRePointingBefore,
    ReBeddingRePointingAfter
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