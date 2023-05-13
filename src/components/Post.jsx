const Post = ({post, setPost, eliminarPost}) => {
  

    const{titulo, autor, fecha, publicacion, id} = post;
      
      const handleEliminar =() => {
        const respuesta = confirm('Do you want to delete the post??')
      
        if(respuesta){
          eliminarPost(id)
        }
      }  
      return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase ">Title: {''}
              <span className="font-normal normal-case">{titulo}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">Author: {''}
              <span className="font-normal normal-case">{autor}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">Date of post: {''}
              <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">Post: {''}
              <span className="font-normal normal-case">{publicacion}</span>
            </p>
  
          <div className="flex justify-between mt-10">
              <button 
              type="button"
              className="py-2 px-10 bg-indigo-600  hover:bg-indigo-700
              text-white font-bold rounded-lg"
              onClick={()=>setPost(post)}
              >Edit</button>
  
              <button 
              type="button"
              className="py-2 px-10 bg-red-600  hover:bg-red-700
              text-white font-bold rounded-lg"
              onClick={handleEliminar}
              >Delete</button>
          </div>
            
  
        </div>
    )
  }
  
  export default Post