/*let _valorRandom = valorRandom;
let _boton = btn;

_boton.onclick = ()=>{
    let random = Math.round( Math.random() * 100 )
    _valorRandom.innerHTML = random
}*/

verificarCadena.onsubmit = (e)=>{
    e.preventDefault()
    let _cadena = cadena.value

    let patr = /abc/
    resultado.innerHTML = patr.test(_cadena)
}