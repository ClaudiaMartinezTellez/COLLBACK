const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;

    if (descuento) {
        resolve('Descuento se ha Aplicado') //resolve para cuando se aplica
    } else {
        reject('No se pudo aplico el descuento') //reject para cuando no se aplica
    }
})

aplicarDescuento
    .then(resultado => {
        console.log(resultado)
    }).catch(error => {
        console.log(error)
    })

consol.log(aplicarDescuento)

//callback to promise
const paises = []
const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais)
        resolve(`agregado: ${pais}`)
    }, 3000)
})

nuevoPais('Mexico')
    .then(resultado => {
        console.log(resultado) //se agrego el pais mexico
        console.log(paises) //ense;ane el arreglo con mexico y eua
        return nuevoPais('EUA')
    })
    .then(resultado => {
        console.log(resultado) //se agrego eua
        console.log(paises) //mexico y eua
        return nuevoPais('Francia')
    })
    .then(resultado => {
        console.log(resultado) //se agrego francia
        console.log(paises) //meico,eua y francia
    })