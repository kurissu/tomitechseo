import React from 'react'
import Link from 'next/link'

const blogs = () => {
  return (
    <main className="grid">
    <h1 className="text-3xl font-bold underline">Blogs</h1>
    <Link href="/blogs/popular">popular</Link>

    </main>  )
}

export default blogs