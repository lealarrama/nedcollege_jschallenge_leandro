import {useEffect, useState} from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPosts from "./components/ListadoPosts"
import Footer from './components/Footer'

function App() {
  const [posts, setPosts] = useState ([])
  //boton Editar
  const[post, setPost]= useState({});

  useEffect(()=>{
    const obtnerLS = ()=>{
      const postsLS = JSON.parse(localStorage.getItem('posts')) ?? [];
      setPosts(postsLS)
    }
    obtnerLS();
  },[])

//Local Storage

useEffect(() => {
  localStorage.setItem('posts', JSON.stringify(posts))
},[posts])




  const eliminarPost = (id) => {
    const postsActulizados = posts.filter(post => post.id !== id);
    setPosts(postsActulizados)
  }
// no muta el estado original, retorna uno nuevo.

  return (
    <div className="container mx-auto mt-28">
      <Header/>

      <div className="mt-12 md:flex">
        <Formulario
        // props y extraemos las propiedades en formulario
          posts={posts}
          setPosts={setPosts}
          post={post}
          setPost={setPost}
        />
        <ListadoPosts
        posts={posts}
        setPost={setPost}
        eliminarPost={eliminarPost}
        />
        
      </div>
      <Footer/>
    </div>
  )
}

export default App