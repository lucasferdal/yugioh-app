let pantalla = document.getElementById('pantalla')
let selecter = document.getElementById('selecter')
let boton = document.getElementById('boton')

async function elFetch() {
    try {
        let res = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        dato = await res.json()
    } catch (error) {
        console.log('omar algo anda mal')
    }
    console.log(dato)

    boton.addEventListener('click', () => {
        
        let seleccion = selecter.options[selecter.selectedIndex].value
        pantalla.innerHTML = ''
        
        for (let i = 0; i < dato.data.length; i++) {
            let element = dato.data[i];
            
            let llamar = () => { 
                pantalla.innerHTML += `
                <div class='m-2' style='float: left; padding: 0.5rem' >
                <p> ${element.name} </p> 
                <img src='${dato.data[i].card_images[0].image_url}' style='width: 15rem'/>
                </div>
                `
            }

            element.type === seleccion ? llamar() : null
        }
    })
            
    }
    elFetch()