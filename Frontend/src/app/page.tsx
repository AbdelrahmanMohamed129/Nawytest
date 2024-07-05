import Image from "next/image";
import Hero from "@/components/hero";
import Apartments from "@/components/apartments";
import { apartments } from "@/data/apartments";

export default function Home() {
  const images = [
    "https://www.nawy.com/_next/static/media/landing-background.edcd0e3d.webp",
    "https://media.gettyimages.com/id/451379105/photo/close-up-58.jpg?s=612x612&w=0&k=20&c=EvlvdyumX7dE5u0uHrMGVZ1LEqfOKSN4Cw-JUynzxeE=",
    "https://media.gettyimages.com/id/1349023634/photo/woman-teeth-before-and-after-whitening.jpg?s=612x612&w=0&k=20&c=v5TKPiZ86JNSSw-Ou2MZLpplQLSa4YRKxemYI47Ts9g=",
    "https://media.gettyimages.com/id/74409357/photo/woman-wearing-lip-gloss.jpg?s=612x612&w=0&k=20&c=pPIgpUTOhlF0NOlGp357JVRrR7o_jh-B_sIiE1crikU="
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero images={images}/>
      <Apartments apartments={apartments}/>
    </main>
  );
}
