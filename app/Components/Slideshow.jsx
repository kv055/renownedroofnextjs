import React from 'react';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j5sxssx9aCb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CarouselPrevious, CarouselNext, CarouselItem, CarouselContent, Carousel } from "@/components/ui/carousel"
import { CardContent, Card } from "@/components/ui/card"
import Portrait from '../../public/PortraitSquare.jpg';

export default function Slideshow(Images) {
  return (
    <Carousel className="w-full max-w-md relative">
      <CarouselContent>
        <CarouselItem className="aspect-square relative">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                <img
                  alt="Image 1"
                  className="object-cover w-full h-full"
                  height="300"
                  // src={`${Images[0]}`}
                  src={Portrait.src}
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <p className="absolute bottom-0 bg-white bg-opacity-60 w-full text-center py-2">Image 1 description</p>
                <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full" />
                <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
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

