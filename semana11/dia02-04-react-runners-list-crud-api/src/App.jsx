import { useEffect, useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

const App = () => {
  // TODO: Darle la funcionalidad completa a este componente. Implementar el CRUD completo(Lista, crear, actualizar y eliminar) usando el apibox
  
  const [corredores, setCorredores]= useState([])
  const API_URL='https://apibox.vercel.app/jXBlSicCTYmH90nrRBfh7gR3tn8vpuyL/api/corredores'
  
  const fetchCorredores = async () => {
    const response = await fetch(API_URL)

    return await response.json()
  }

  useEffect(()=> {
    fetchCorredores()
      .then(data=> setCorredores(data))
  }, [])



  return (
    <div className="bg-white text-neutral-900 min-h-screen">

      <main className="max-w-2xl mx-auto px-6 py-16">

        <Header />

        <div className="flex gap-4">
          <Form />

          <List />

          <pre>{JSON.stringify(corredores,null,2)}</pre>

        </div>

      </main>

      <Footer />
    </div>
  )
}

export default App