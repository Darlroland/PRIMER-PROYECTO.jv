const URL= 'https://apibox.vercel.app/jXBlSicCTYmH90nrRBfh7gR3tn8vpuyL/api/personajes'

const formulario = document.querySelector("#form-personaje");



const fetchPagina  = async () => {
  document.querySelector('#loading').classList.toggle('hidden')
  
  const respuesta = await fetch(URL);
  const data = await respuesta.json();
  console.log(data);

  document.querySelector('#loading').classList.toggle('hidden')
  
  renderizarPersonajes(data)
};




const renderizarPersonajes = (personajes =[]) => {
  

  const lista=document.querySelector("#lista")

  lista.innerHTML = ''

  const contador=document.querySelector("#contador")
  contador.textContent = personajes.length;


  personajes.forEach((personaje) => {
    const li = document.createElement("li");
    li.className = 'flex items-center gap-4 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-300 transition-colors';
    li.innerHTML = `

      <div class="shrink-0 w-20 h-20 rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50 p-2">      
        <img src="${personaje.image}" alt="${personaje.name}" class="w-full h-full object-contain rounded-lg" />   
      </div>

      <div class="flex-1 min-w-0">
          <p class="text-sm font-medium truncate">${personaje.name}</p>

          <div class="flex items-center gap-2 mt-1">

              <span class="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">KI:${personaje.ki}</span>
              <span class="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">${personaje.race}</span>
          
          </div>
      </div>

      <div class="flex items-center gap-3 shrink-0">

          <button data-action="editar" data-id="${personaje.id}" class="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">
              Editar
          </button>

          <button data-action="eliminar" data-id="${personaje.id}" class="text-xs text-neutral-400 hover:text-red-500 transition-colors">
              Eliminar
          </button>

      </div>
    `
    lista.appendChild(li);
  })
}

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const corredorFormul= document.forms['form-personaje']

  const id = corredorFormul.id.value;

  const name=corredorFormul.name.value;
  const gender=corredorFormul.gender.value;
  const race=corredorFormul.race.value;
  const ki=corredorFormul.ki.value;
  const image=corredorFormul.image.value;
  const description=corredorFormul.description.value;

  const postData = {
    name,
    gender,
    race,
    ki,
    image,
    description
  }

  const isEditing = id !== "";
  const fetchURL = isEditing ? `${URL}/${id}` : URL;
  const fetchMethod = isEditing ? 'PUT' : 'POST';


  try {
    const response = await fetch(fetchURL, {
      method: fetchMethod,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(postData)
    })

    if(!response.ok){
      throw new Error('problemas al guardar ')
    }

    fetchPagina ()
    formulario.reset()
    corredorFormul.id.value = ""; 
    document.querySelector("#btn-submit").textContent = "Agregar Personaje";

    } catch (error) {
      console.log(error)
    }
    
})


lista.addEventListener('click',async (event)=>{
  
  if (event.target.tagName ==='BUTTON'){
    const {action,id} = event.target.dataset

    if (action=== 'eliminar') {

      const opciones= {
        method : 'DELETE'
      }
      try{
        const response = await fetch(`${URL}/${id}`, opciones)
        fetchPagina ()
      } catch (error) {
        console.log(error);
      }
    }
    else if (action === 'editar') {
      try {
        const respuesta = await fetch(`${URL}/${id}`);
        const personaje = await respuesta.json();

        const corredorFormul = document.forms['form-personaje'];
        

        corredorFormul.id.value = personaje.id;
        corredorFormul.name.value = personaje.name;
        corredorFormul.gender.value = personaje.gender;
        corredorFormul.race.value = personaje.race;
        corredorFormul.ki.value = personaje.ki;
        corredorFormul.image.value = personaje.image;
        corredorFormul.description.value = personaje.description;


        document.querySelector("#btn-submit").textContent = "Actualizar Personaje";
        
      } catch (error) {
        console.log("Error al obtener los datos del personaje", error);
      }
    }  
  }  
})

fetchPagina ();