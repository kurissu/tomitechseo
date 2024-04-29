import React from 'react'
import Link from 'next/link'

const about = () => {
  return (
    <main className="grid">
    <h1 className="text-3xl font-bold underline">contacts</h1>
    <Link href="/about/teams">teams</Link>
    </main>
  )
}

export default about