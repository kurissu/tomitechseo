import Image from "next/image";
import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Home</h1>
      <Link href="/profile">profile</Link>
      <Link href="/service">Service</Link>
      <Link href="/news">news</Link>
      <Link href="/blogs">blogs</Link>
      <Link href="/about">about</Link>
      <Link href="/contacts">contacts</Link>
    </main>
  );
}
