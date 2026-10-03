import { useEffect, useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

const App = () => {
  // TODO: Darle la funcionalidad completa a este componente. Implementar el CRUD completo(Lista, crear, actualizar y eliminar) usando el apibox
  
  const [corredores, setCorredores]= useState([])

  const [corredorEditar, setCorredorEditar]= useState(null)
  
  const API_URL='https://apibox.vercel.app/jXBlSicCTYmH90nrRBfh7gR3tn8vpuyL/api/corredores'
  
  const fetchCorredores = async () => {
    const response = await fetch(API_URL)

    return await response.json()
  }



  const handleDelete = async (id) =>{
    await fetch(`${API_URL}/${id}`,{
      method:'DELETE'
    })
    
    const data= await fetchCorredores()
    setCorredores(data)
  }

  const handleSave = async (datosCorredor) => {
    if (datosCorredor.id){
    const options = {
      method: 'PUT',
      headers: {'Content-Type' : 'application/json'},
      body : JSON.stringify(
        {
          nombre: datosCorredor.nombre,
          edad:Number(datosCorredor.edad),
          categoria:datosCorredor.categoria,
          dorsal: datosCorredor.dorsal          
        }
      )
    }
    
    await fetch(`${API_URL}/${datosCorredor.id}`,options)

    setCorredorEditar(null)

  }else {
    const options= {
      method:'POST',
      headers : {'Content-type' : 'application/json'},
      body : JSON.stringify(
        {
        nombre: datosCorredor.nombre,
        edad:Number(datosCorredor.edad),
        categoria:datosCorredor.categoria,
        dorsal: datosCorredor.dorsal
        }      
      )
    }
    await fetch(API_URL, options)
  }
  const data = await fetchCorredores()
  setCorredores(data)
  }



  useEffect(()=> {
    fetchCorredores()
      .then(data=> setCorredores(data))
  }, [])

  console.log("2. Memoria en App:", corredorEditar)
  return (
    <div className="bg-white text-neutral-900 min-h-screen">

      <main className="max-w-2xl mx-auto px-6 py-16">

        <Header />

        <div className="flex gap-4">
          <Form onSubmit={handleSave} corredorEditar={corredorEditar}/>

          <List corredores= {corredores} onDelete={handleDelete}  
          onEdit={setCorredorEditar}/>

          <pre>{JSON.stringify(corredores,null,2)}</pre>

        </div>

      </main>

      <Footer />

    </div>
  )
}

export default App