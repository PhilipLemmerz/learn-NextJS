import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header.jsx";


export default function Home() {
  console.log('server')
  return (
    <>
      <main>  
        <Header />      
        <p>🔥 Let&apos;s get started! 🔥</p>
        <p><Link href="/about">about-page</Link></p>
      </main>
    </>
  );
}
