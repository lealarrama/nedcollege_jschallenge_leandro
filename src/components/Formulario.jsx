import {useState, useEffect} from 'react';
import Error from './Error';


//aplicamos desctructuring y extraemos setPosts
const Formulario = ({posts, setPosts, post, setPost}) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [fecha, setFecha] = useState('');
  const [publicacion, setPublicacion] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
      if(Object.keys(posts).length > 0){
        setTitulo(post.titulo)
        setAutor(post.autor)
        setFecha(post.fecha)
        setPublicacion(post.publicacion)
      }
  },[post])

  const generarId = () =>{
    const random = Math.random().toString(36).substr(2);    ;
    const fecha = Date.now();
    return random + fecha 
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    //Validacion del Formulario
    if([titulo, autor, fecha, publicacion].includes('')){
      console.log('Hay al menos un campo vacio')

      setError(true)
      return;
    }
    setError(false)

      //const Objeto de posts
      const objetoPost = {
        titulo,
        autor,
        fecha,
        publicacion
      }

      if(post.id){
        //Editando registro
        objetoPost.id = post.id;
        const postsActualizados = posts.map(postState => postState.id ===
        post.id ? objetoPost : postState)

        setPosts(postsActualizados)
        setPost({})

      }else{
        // nuevo registro
        // toma una copia de posts y la agrega un 
        //nuevo elemento al arreglo objeto posts
        objetoPost.id = generarId(); //antes de almacenarlo en state
        //genero el id
        setPosts([...posts, objetoPost]);

      }

      // reiniciar formulario
      setTitulo('')
      setAutor('')
      setFecha('')
      setPublicacion('')

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
    
      <h2 className="font-black text-3xl mt-5 text-center mb-10">
        Create your post here and {''}
        <span className="text-indigo-600 font-bold text-3xl">
        Manage them</span>
      </h2>
      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg mx-5 py-10 px-5 mb-10"
      >
        {/* // si es error es true imprime lo siguiente*/}
        {error && <Error mensaje='All fields are mandatory'
        
      
        />}
       
        <div className= "mb-5">
          <label htmlFor="titulo" className="block text-gray-700 uppercase font-bold">Title</label>
          <input
            id="titulo"
            type="text"
            placeholder="Post title"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            value={titulo}
            onChange={(e)=> setTitulo(e.target.value)} //Evento de React
          />
        </div>

        <div className= "mb-5">
          <label htmlFor="autor" className="block text-gray-700 uppercase font-bold">Author</label>
          <input
            id="autor"
            type="text"
            placeholder="Name of Author"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            value={autor}
            onChange={(e)=> setAutor(e.target.value)}          
          />
        </div>

        <div className= "mb-5">
          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Date of Post</label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}          
          />
        </div>

        <div className= "mb-5">
          <label htmlFor="publicacion" className="block text-gray-700 uppercase font-bold">Post</label>
          <textarea
            id="publicacion"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            placeholder="What do you want to talk about? "
            value={publicacion}
            onChange={(e)=> setPublicacion(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase
          font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={post.id ? "Edit Post" : "Post"}

        />



      </form>
    
    </div>
  )
}

export default Formulario