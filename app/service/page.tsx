import React from 'react'
import Link from 'next/link'
const service = () => {
  return (
    <main className="grid">
    <h1 className="text-3xl font-bold underline">service</h1>
    <Link href="/service/mini-game">mini game</Link>
    <Link href="/service/mobile-game">mobile game</Link>
    <Link href="/service/art">art</Link>
    <Link href="/service/brand-website">brand website</Link>

    </main>
  )
}

export default service