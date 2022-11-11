const pantalla = document.getElementById('pantalla')
const selecterType = document.getElementById('selecterType')
const selecterRace = document.getElementById('selecterRace')
const boton = document.getElementById('boton')

// function setClass() {
//     const monster = ['Normal', 'Effect', 'Ritual', 'Fusion', 'Synchro', 'Xyz', 'Pendulum', 'Link', 'Tokens']
//     const spell = ['Normal', 'Continuous', 'Equip', 'Quick-Play', 'Field']
//     const trap = ['Normal', 'Continuous', 'Counter', 'Equip', 'Field']
// }

function cambio(clase) {
    // const monster = ['Normal', 'Effect', 'Ritual', 'Fusion', 'Synchro', 'Xyz', 'Pendulum', 'Link', 'Tokens']
    const monster = () => {
        console.log('mostro')
        selecterType.innerHTML = `
        <option value='Ninguno' selected>Elegi un tipo de carta</option>
        
        <option value='Effect Monster'>Effect Monster</option>
        
        <option value='Normal Monster'>Normal Monster</option>
        
        <option value='Flip Effect Monster'>Flip Effect Monster</option>
        
            <option value='Union Effect Monster'>Union Effect Monster</option>
            
            <option value='Fusion Monster'>Fusion Monster</option>
            
            <option value='Pendulum Effect Monster'>Pendelum Effect Monster</option>
            
            <option value='Link Monster'>Link Monster</option>
            
            <option value="Synchro Monster">Synchro Monster</option>
            
            <option value="Tuner Monster">Tuner Monster</option>
            
            <option value="Ritual Monster">Ritual Monster</option>
            `
    }
    // const spell = ['Normal', 'Continuous', 'Equip', 'Quick-Play', 'Field']
    // const trap = ['Normal', 'Continuous', 'Counter', 'Equip', 'Field']
    const spell = () => {
        console.log('sep')
        selecterType.innerHTML = `
        <option value='Ninguno' selected>Elegi un tipo de carta</option>
        
        <option value='Spell Card'>Spell Card</option>
        
        `
    }
    const trap = () => {
        console.log('ta')
        selecterType.innerHTML = `
        <option value='Ninguno' selected>Elegi un tipo de carta</option>

            <option value='Trap Card'>Trap Card</option>
            
        `
    }

    (clase === 'Trap') ? trap() :
    (clase === 'Monster') ? monster() : spell();

}

async function elFetch() {
    try {
        let res = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        dato = await res.json()
    } catch (error) {
        console.log('omar algo anda mal')
    }
    // console.log(dato.data)

    boton.addEventListener('click', () => {
        let seleccionTipo = selecterType.options[selecterType.selectedIndex].value
        let seleccionRaza = selecterRace.options[selecterRace.selectedIndex].value
        console.log()
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

    //                                 < li class="juana" > <a class='dropdown-item juan' name='Normal' href="#">Normal</a></li >
    //                                 <li class="juana"><a class='dropdown-item juan' name='Effect' href="#">Effect</a></li>
    //                                 <li class="juana"><a class='dropdown-item juan' name='Ritual' href="#">Ritual</a></li>
    //                                 <li class="juana"><a class='dropdown-item juan' name='Fusion' href="#">Fusion</a></li>
    //                                 <li class="juana"><a class='dropdown-item juan' name='Synchro' href="#">Synchro</a></li>
    //                                 <li class="juana"><a class='dropdown-item juan' name='Xyz' href="#">Xyz</a></li>
    //                                 <li class="juana"><a class='dropdown-item juan' name='Pendulum' href="#">Pendulum</a></li>
    //                                 <li class="juana"><a class='dropdown-item juan' name='Link' href="#">Link</a></li>
    //                                 <li class="juana"><a class='dropdown-item juan' name='Tokens' href="#">Tokens</a></li>
    //                             </ul >
    //                         </li >
    //                         <li class="dropend">
    //                             <a class='dropdown-item dropdown-toggle' data-bs-toggle='dropdown' href="#">Spell</a>
    //                             <ul class="dropdown-menu">
    //                                 <li><a class='dropdown-item' href="#">Normal</a></li>
    //                                 <li><a class='dropdown-item' href="#">Continuous</a></li>
    //                                 <li><a class='dropdown-item' href="#">Equip</a></li>
    //                                 <li><a class='dropdown-item' href="#">Quick-Play</a></li>
    //                                 <li><a class='dropdown-item' href="#">Field</a></li>
    //                                 <li><a class='dropdown-item' href="#">Ritual</a></li>
    //                             </ul>
    //                         </li>
    //                         <li class="dropend">
    //                             <a class='dropdown-item dropdown-toggle' data-bs-toggle='dropdown' href="#">Trap</a>
    //                             <ul class="dropdown-menu">
    //                                 <li><a class='dropdown-item' href="#">Normal</a></li>
    //                                 <li><a class='dropdown-item' href="#">Continuous</a></li>
    //                                 <li><a class='dropdown-item' href="#">Counter</a></li>
    //                                 <li><a class='dropdown-item' href="#">Equip</a></li>
    //                                 <li><a class='dropdown-item' href="#">Field</a></li>
    //                             </ul>