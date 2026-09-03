const searchInput= document.querySelector('#search-input')
const contactList= document.querySelector('#contact-list')
const contacts = document.querySelectorAll('.contact') 


searchInput.addEventListener('input' , function(event){
    const query =event.target.value



    contacts.forEach(function(contact) {
        const name =contact.querySelector('.name').textContent.toLocaleLowerCase()
        const email = contact.querySelector('.email').textContent.toLocaleLowerCase()

        const coincidencias = name.includes(query) || email.includes(query)

        if (coincidencias) {
            contact.classList.remove('hidden')
        } else {
            contact.classList.add('hidden')
        }

        console.log(name)
    })
})