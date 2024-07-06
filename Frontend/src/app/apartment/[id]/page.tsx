"use client";
import Hero from "@/components/apartmentHero";
import { images } from "@/data/home";
import { apartment } from "@/types";
import { useEffect, useState } from "react";


interface ApartmentsProps {
    params: {
        id: string;
    }
}

export default function ApartmentsPage({ params }: ApartmentsProps){
    const [apartment, setApartment] = useState<apartment>();

    useEffect(() => {
        fetch(`http://localhost:3001/apartments/${params.id}`)
            .then((res) => res.json())
            .then((data) => {setApartment(data); console.log(data);})
            .catch((err) => console.log(err));
    }, [params.id]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
          <Hero images={images}/>
          <section>
            <h3 className="text-5xl font-extrabold text-center text-primary mb-4">Details</h3>
            <p className="text-2xl text-center text-primary">{apartment?.location}</p>
            <p className="text-2xl text-center text-primary">{apartment?.size}</p>
            <p className="text-2xl text-center text-primary">{apartment?.bathrooms}</p>
            <p className="text-2xl text-center text-primary">{apartment?.bedrooms}</p>
          </section>
        </main>
      );
}