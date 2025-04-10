import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Página no encontrada 😢</h1>
      <p className="mb-4">No pudimos encontrar lo que buscabas.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Volver al inicio
      </Link>
    </main>
  )
}

export default NotFoundPage
