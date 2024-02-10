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

import FullResto1 from '../../../public/Group1WebsiteSliderPics.jpg'
import FullResto2 from '../../../public/Group2WebsiteSliderPics.jpg'
import FullResto3 from '../../../public/Group3WebsiteSliderPics.jpg'
import FullResto4 from '../../../public/Group5WebsiteSliderPics.jpg'
import FullResto5 from '../../../public/Group6WebsiteSliderPics.jpg'
import FullResto6 from '../../../public/Group7WebsiteSliderPics.jpg'
import FullRestorationBefore from '../../../public/ServicesFullRestorationsBefore.jpeg'
import FullRestorationAfter from '../../../public/ServicesFullRestorationsAfter.jpeg'

const images = [
    FullRestorationBefore,
    FullRestorationAfter,
    FullResto1,
    FullResto2,
    FullResto3,
    FullResto4,
    FullResto5,
    FullResto6,
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