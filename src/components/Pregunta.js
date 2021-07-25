import React,{Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    //definir state cantidad
    const[cantidad, guardarCantidad] = useState(0); //como es una cantidad del presupuesto se inicia en 0
    const[error, guardarError] = useState(false);
    //Funcion que lee el presupuesto
    const definirPresupuesto = e => { 
        console.log(parseInt(e.target.value)); //notese que cuando en la consola el nro es negro es porque es string en morado es number
        guardarCantidad(parseInt(e.target.value, 10)); //define base en 10
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();
    
        //Se valida el presupuesto
        if (cantidad<1 || isNaN(cantidad)) {
            guardarError(true);
            return;            
        }
        //Si se pasa la validacion / en caso que haya un error
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje='El presupuesto es incorrecto' /> : null }
            {            /*como el mensaje de error se va a usar mas de una vez
            se crea el mensaje en otro componente v73* - por eso utilizamos un prop,
            para que reciba el mensaje que se va a  mostrar en pantalla con un props
            */}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={definirPresupuesto} //se ejecuta cuando el usuario define su presupuesto
                ></input>
                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir presupuesto'
                ></input>
            </form>
        </Fragment>
      );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired, 
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired,
}
 
export default Pregunta;