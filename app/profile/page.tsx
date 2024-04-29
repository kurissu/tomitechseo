import React from 'react'
import Link from 'next/link'

const profile = () => {
  return (
    <main className="grid">
    <h1 className="text-3xl font-bold underline">profile</h1>
    <Link href="/profile/project">project</Link>
    <Link href="/profile/page">page</Link>
    </main>
  )
}

export default profile