export const getDetallado = async() =>{
    
    const response = await fetch(`https://rickandmortyapi.com/api/character/2`)
    const data = await response.json()
    return data
}