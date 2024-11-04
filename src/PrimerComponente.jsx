//usaremos nuestro primer snippet rafc
//creamos variables string number array, boolean, funcion, objeto, fecha
// const string = 'Hola Mundo'
// const number = 1223455
// const array = ['hoy', 'manana', 'ayer']
// const boolean = true
// const funcion = () => 'La funcion se ejecuto'
// const objeto = {nombre: 'Juan', edad: 23}
// const fecha = new Date()
import ProTypes from 'prop-types'

export const PrimerComponente = ({titulo = 'Hello world', subtitulo="El mundo es nuestro"}) => {
    console.log(titulo)
    console.log(subtitulo)
    return (
        <>
        <h1>{titulo}</h1>
        <h1>{subtitulo + 1}</h1>
        
        </>
    )
}

PrimerComponente.propTypes ={
    titulo: ProTypes.string.isRequired,
    subtitulo: ProTypes.number.isRequired
}