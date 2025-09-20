function Tarjeta({ titulo, descripcion, poster, rating }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 w-64">
      <img
        src={`https://image.tmdb.org/t/p/w300${poster}`}
        alt={titulo}
        className="w-full h-64 object-cover"
      />
      <div className="p-3">
        <h3 className="text-md font-semibold mb-1">{titulo}</h3>
        <p className="text-xs text-gray-300 h-14 overflow-hidden text-ellipsis">
          {descripcion}
        </p>
        <p className="mt-1 text-yellow-400 font-bold text-sm">⭐ {rating.toFixed(1)}</p>
      </div>
    </div>
  )
}


export default Tarjeta