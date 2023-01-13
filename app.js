/*let _valorRandom = valorRandom;
let _boton = btn;

_boton.onclick = ()=>{
    let random = Math.round( Math.random() * 100 )
    _valorRandom.innerHTML = random
}*/

verificarCadena.onsubmit = (e)=>{
    e.preventDefault()
    let _cadena = cadena.value

    let patr = /ABC/
    resultado.innerHTML = patr.test(_cadena)
}

form_busca_cadena.onsubmit =(e)=>{
    e.preventDefault()

    let expresion = /(\d{10})/
    resp_busca_cadena.innerHTML = expresion.test(busca_cadena.value)
}

form_cadena_a_array.onsubmit = (e)=>{
    e.preventDefault()
    let expresion = /[a-z]+/gi
    resp_cadena_a_array.innerHTML = cadena_a_array.value.match(expresion)
}

verificar_telefono.onsubmit = (e)=>{
    e.preventDefault()
    
    let expresion = /[0-9]{10}/
    resp_telefono.innerHTML = expresion.test(cadena_telefono.value)
}

reemplazar_texto.onsubmit = (e)=>{
    e.preventDefault()
    
    let buscar = /asdf/;
    let reemplazar = "aaaa";
    let nuevoTexto = reemplazar_texto_input.value.replace(buscar, reemplazar);
    resp_reemplazar_texto.innerHTML = nuevoTexto
}