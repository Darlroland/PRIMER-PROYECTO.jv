import {useState, useEffect} from "react"

const Form = ({onSubmit , corredorEditar }) => {
  
  const [form, setForm] = useState({
    nombre:'',
    edad:'',
    categoria:'',
    dorsal:''
  })

  useEffect(()=>{
    if (corredorEditar) {
      console.log("3. Llegó a Form:", corredorEditar)
      setForm(corredorEditar)
    }
  }, [corredorEditar])

  const handleChange= (event) => {
    const {name ,value}= event.target
    setForm({...form, [name]: value})
  }

  const  handleSubmit = (event) => {
    event.preventDefault()

    onSubmit(form)
    
    setForm({
      nombre:'',
      edad:'',
      formulario:'',
      dorsal:''
    })



  }

  return (
    <form id="form" className="mb-12 border border-neutral-200 rounded-xl p-6" noValidate
        onSubmit={handleSubmit}>
      <input type="hidden" id="corredorId" />

      <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 mb-4">inscripción</p>

      <div className="flex flex-col gap-4 mb-4">
        <label className="block text-xs text-neutral-500 mb-1">
          Nombre completo
          <input
            name="nombre" value={form.nombre} onChange={handleChange} type="text" placeholder="Ana Torres"
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
            />
        </label>

        <label className="block text-xs text-neutral-500 mb-1">
          Edad
          <input
            name="edad" value={form.edad} onChange={handleChange} type="number" placeholder="28"
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
          />
        </label>

        <label className="block text-xs text-neutral-500 mb-1">
          Categoría
          <select
            name="categoria" value={form.categoria} onChange={handleChange}
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
          >
            <option value="">Elegir</option>
            <option value="5K">5K</option>
            <option value="10K">10K</option>
            <option value="21K">21K</option>
            <option value="42K">42K</option>
          </select>
        </label>

          <label className="block text-xs text-neutral-500 mb-1">
            Dorsal
            <input
              name="dorsal" value={form.dorsal} onChange={handleChange} type="number" placeholder="101"
              className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm font-mono outline-none focus:border-neutral-900 transition-colors"
            />
          </label>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          type="submit" id="submitBtn"
          className="w-full bg-neutral-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-bib transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Inscribir
        </button>
        <button
          type="button" id="cancelBtn"
          className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors hidden"
        >
          Cancelar edición
        </button>
      </div>
      
    </form>
    
  )
}

export default Form