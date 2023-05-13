import React from 'react'


const Header = () => {
  return (
    <header className="bg-blue-800 mb-5 text-white py-4 px-8 flex justify-between items-center">
    <h1 className="text-2xl font-bold">My Blog</h1>
    <nav>
      <div className="flex">
       

          <button 
            type="button"
            className="py-2 px-10 mx-5 bg-indigo-400  hover:bg-indigo-500
            text-white font-bold rounded-lg"
            // onClick={()=>()}
            >Log in</button>

            <button 
            type="button"
            className="py-2 px-10 bg-red-600  hover:bg-red-700
            text-white font-bold rounded-lg"
            // onClick={handleEliminar}
            >Log out</button>


      </div>
    </nav>
  </header>
  )
}

export default Header