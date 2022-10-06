//const paises=['Francia','Espania','Portugal','Mexico','Argentina']
//async
//const paises=[]
function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais)

        callback()
    }, 3000)
}
function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(paises => {
            console.log(paises)
        })
    }, 2000)
}

//mostrarPaises()
//nuevoPais('Alemania', mostrarPaises)
//-----------------------------------------------
const paises = []

function nuevoPais(pais, callback) {
    paises.push(pais)
    console.log(`Agregado:  ${pais}`)
    callback()
}

function mostrarPaises() {
    console.log(paises)
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises)
        setTimeout(() => {
            nuevoPais('Mexico', mostrarPaises)
            setTimeout(() => {
                nuevoPais('Francia', mostrarPaises)
            }, 3000)
        }, 3000);
    }, 3000)
}
iniciarCallbackHell()
// mostrarPaises()
//nuevoPais('Alemania', mostrarPais)



