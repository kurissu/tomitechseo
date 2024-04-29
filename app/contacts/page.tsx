import React from 'react'
import Link from 'next/link'

const contacts = () => {
  return (
    <main className="grid">
    <h1 className="text-3xl font-bold underline">contacts</h1>
    <Link href="contacts/faq">faq</Link>
    <Link href="/contacts/contact-form">contact-form</Link>
    </main>  )
}

export default contacts