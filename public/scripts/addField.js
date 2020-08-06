// Procurar o botão 
document.querySelector("#add-time")

// Ao clicar, ativar o clone
.addEventListener('click', cloneField)

// Executa o clone dos dados
function cloneField() {

    // Duplicar os campos: que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //node=html (doc object model)
    
    // Pegar os campos: que campos? (input)
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        // Pegar um field específico e limpa ele
        field.value = ""
    })

    // Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}