import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-800 text-white p-4">
      <div className="text-center text-white-600 text-sm">
        &copy; {new Date().getFullYear()} My blog. Todos los derechos reservados.
      </div>
    </footer>
    </div>
  )
}

export default Footer
