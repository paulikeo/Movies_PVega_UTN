export async function consultar() {
  try {
    const url = import.meta.env.VITE_URL
    const apiKey = import.meta.env.VITE_API_KEY

    const response = await fetch(`${url}?api_key=${apiKey}&language=es-ES&page=1`)
    const data = await response.json()

    return data.results ?? []
  } catch (error) {
    console.error("Error al consultar la API:", error)
    return []
  }
}
