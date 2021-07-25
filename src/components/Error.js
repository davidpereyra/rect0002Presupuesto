import React from 'react';
import PropTypes from 'prop-types';
//Mensaje proveniente de error en pregunta
const Error = ({mensaje}) => (
    <p className='alert alert-danger error'>{mensaje}</p> 
);

Error.propTypes = {
    mensaje : PropTypes.string.isRequired
}
export default Error;