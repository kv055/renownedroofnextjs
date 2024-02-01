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

import Portrait from '../../public/PortraitSquare.jpg';

export default function Slideshow(Images) {
  console.log('feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',Images.src);
  return (
    <Carousel className="w-full max-w-xs">
    <CarouselContent>
      {Images.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img src={_.src} alt="Portrait of Kail Stefanatos" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel> 
  )
}

// {Images.map(image => (
//   <CarouselItem key={image.id}>
//     <CardContent>
//       <img
//         src={image.src}
//         alt={image.alt}
//       />
//     </CardContent>
//   </CarouselItem>
// ))}


