import React from 'react'
import CustomCarousel from "@/components/carousel"

interface HeroProps {
    images: string[]
}

export default function Hero({images}: HeroProps) {
    return (
        <section className="w-full h-[75vh] grid">

            <CustomCarousel opts={{ loop: true, }} 
                autoplayOptions={{ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false}}
                className="h-full w-full m-auto"
                images={images}
            />
            <div className="">
                <h1 className="text-5xl font-extrabold text-center text-primary mb-4">Apartments</h1>
                <p className="text-2xl text-center text-primary">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed etiam, purus euismod.</p>
                <p className="text-2xl text-center text-primary">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed etiam, purus euismod.</p>
                <p className="text-2xl text-center text-primary">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed etiam, purus euismod.</p>
                
            </div>
        </section>
    )
}