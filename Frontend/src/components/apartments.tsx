import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Apartment } from '@/data/apartments'

interface ApartmentsProps {
    apartments: Apartment[]
}
export default function Apartments({ apartments }: ApartmentsProps) {
    return (
        <section className="w-full flex flex-col items-center gap-8 m-8 px-8">
            <h2 className="text-5xl font-extrabold text-center text-primary mb-4">Apartments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {apartments.map((apartment, index) => (
                    <div key={index} className="flex flex-col items-center gap-4 p-4">
                        <Link underlayColor="rgba(30, 65, 100, 0.2)" className="flex flex-col items-center gap-4 w-full"
                            href={`/apartment/${apartment.title.toLowerCase().replace(" ", "-")}`}>
                            <Image className="rounded-[2rem] p-4"
                                src={apartment.image}
                                alt="apartment image"
                                width={1000}
                                height={1000}
                            />
                            <h3 className="text-2xl font-bold text-primary">{apartment.title}</h3>
                        </Link>
                        <p className="text-center w-2/3 lg:w-full">{apartment.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}