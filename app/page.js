import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import Link from "next/link";

export default function Page() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <h1 className="text-4xl font-bold text-white">Welkom op deze webpagina</h1>
        {/* <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:learning-normal`}></p> */}
        </div>
        <br />
        {/* Testing the Image function from NEXT.js */}
        <Image
          src="/picture.jpg"
          width={560}
          height={620}
          alt="Een afbeelding"
        />
    </main>
  );
}
