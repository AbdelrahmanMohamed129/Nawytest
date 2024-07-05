"use client";
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { cn } from '@/lib/utils'
import Autoplay from "embla-carousel-autoplay"

interface carouselProps {
    images: string[]
    opts: { loop: boolean }
    autoplayOptions: { delay: number, stopOnMouseEnter: boolean, stopOnInteraction: boolean }
    className: string
}
export default function CustomCarousel(
    { images, opts, autoplayOptions, className }: carouselProps
) {
    return (
        <Carousel opts={opts}
            plugins={[
                Autoplay(autoplayOptions)
            ]}
            className={cn(className, "*:w-full *:h-full")}>
            <CarouselContent className='w-full h-full m-auto'>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                            <img
                                className="w-full object-contain m-auto"
                                src={image}
                                alt=""
                            />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}