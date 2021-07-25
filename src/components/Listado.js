import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types'; //v85 documentando la app

const Listado = ({gastos}) => (
    <div className='gastos-realizados'>
        <h2>Listado</h2>
        {gastos.map(gasto => (
            <Gasto 
            key={gasto.id}
            gasto={gasto}
            />
        ))}
    </div>
);
//decirle que proptypes pasan a este componente
Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
export default Listado ;