import React,{Fragment} from 'react';
import { revisarPresupuesto } from '../helpers';
//v84 crear un helper, archivo que contiene funciones para usar en distintos lados para no sobrecargar los componentes.
import PropTypes from 'prop-types'; //v85 documentando la app

const ControlPresupuesto = ({presupuesto, restante}) => {
    return (  
        <Fragment>
            <div className='alert alert-primary'>
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto,restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
    );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControlPresupuesto;