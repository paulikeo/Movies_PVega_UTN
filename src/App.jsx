import { useState, useEffect } from 'react'
import {consultar} from "./api/api"
import Tarjeta from './components/Tarjeta'
import Contenedor from './components/Contenedor'

function App() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const cargarPeliculas = async () => {
      const data = await consultar()
      setPeliculas(data)
    }
    cargarPeliculas()
  }, [])


  return (
    <div className="bg-gradient-to-b from-pink-600 to-pink-300 min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Películas Populares!!!!!!!!!!!!!!!!</h1>

      <Contenedor>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {peliculas.map((peli) => (
            <Tarjeta
              key={peli.id}
              titulo={peli.title}
              descripcion={peli.overview}
              poster={peli.poster_path}
              rating={peli.vote_average}
            />
          ))}
        </div>
      </Contenedor>
    </div>
  )
}

export default App