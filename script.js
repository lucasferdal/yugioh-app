let pantalla = document.getElementById('pantalla')
let selecterType = document.getElementById('selecterType')
let selecterRace = document.getElementById('selecterRace')
let boton = document.getElementById('boton')

async function elFetch() {
    try {
        let res = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        dato = await res.json()
    } catch (error) {
        console.log('omar algo anda mal')
    }
    console.log(dato.data)

    boton.addEventListener('click', () => {
        let seleccionTipo = selecterType.options[selecterType.selectedIndex].value
        let seleccionRaza = selecterRace.options[selecterRace.selectedIndex].value
        console.log(seleccionRaza)
        pantalla.innerHTML = ''


        for (let i = 0; i < dato.data.length; i++) {
            let element = dato.data[i];

            let llamar = () => {
                pantalla.innerHTML += `
                <div class='shadow card m-3 bg-light' style='align: center; float: left; width: 15rem; height: 30rem'>
                <img src='${dato.data[i].card_images[0].image_url}' class='card-img-top'>
                <div class='p-2' >
                <h5 class='card-title'>${dato.data[i].name}</h5>
                <hr>
                <p class='card-text' style='
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                line-clamp: 2;
                '>${dato.data[i].desc}</p>
                </div>
                </div>
                `
                // pantalla.innerHTML += `
                // <div class='m-2' style='float: left; padding: 0.5rem' >
                // <div class='text-center mb-3 fs-5 bg-light rounded lh-sm' style='width: 15rem; height: 4rem'>
                // <p> <strong>Clase: </strong>${element.type} </p>
                // <p class='mb-3'> <strong>Raza: </strong>${element.race} </p> 
                // </div>
                // <img src='${dato.data[i].card_images[0].image_url}' style='width: 15rem'/>
                // </div>
                // `
            }

            element.type === seleccionTipo && element.race === seleccionRaza ? llamar() : null
        }
    })

}
elFetch()