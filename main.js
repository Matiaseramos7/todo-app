const inputTitulo = document.querySelector('#miInput')
const inputDescripcion = document.querySelector('#miInputDesc')
const btnAdd = document.querySelector('#add-task')
const contenedor = document.querySelector('.tareas')

btnAdd.addEventListener('click', () => {
    const valueTitle = inputTitulo.value.charAt(0).toUpperCase() + inputTitulo.value.slice(1).toLowerCase();
    const valueDesc = inputDescripcion.value

    if (valueTitle != '' && valueDesc != '') {

        const divCard = document.createElement('DIV')
        divCard.className = 'card'
        divCard.innerHTML = `
                    <div class="card-content">
                        <h1 class="title-task">${valueTitle}</h1>
                        <p class="p-task">${valueDesc}</p>
                    </div>
                    <div class="card-button">
                        <button type="button" class="button-delete" id="button-delete">Delete</button>
                    </div>
        `
        contenedor.appendChild(divCard)

        const btnDelete = divCard.querySelector('.button-delete')
        btnDelete.addEventListener('click', () => {
            eliminarTarjeta(divCard)
        })

        inputTitulo.value = ""
        inputDescripcion.value = ""
    }


})


function eliminarTarjeta(tarjeta) {
    contenedor.removeChild(tarjeta);
}