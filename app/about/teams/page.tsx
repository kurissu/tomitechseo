import Link from 'next/link'
import React from 'react'

const teams = () => {
  return (
    <main className="grid">
    <h1 className="text-3xl font-bold underline">team</h1>
    <Link href="/about/teams/biography">biography</Link>
    </main>
  )
}

export default teams