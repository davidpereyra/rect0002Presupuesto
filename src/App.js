import React,{useState, useEffect} from 'react'; //useEffect para actualizar el restante
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  //Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true); //es para la carga condicional de componente
  const [gastos, guardarGastos] = useState([]); 
  const [gasto, guardarGasto] = useState([]); 
  const [creargasto, guardarCrearGasto] = useState(false); 

  //UseEffect que actualiza el restante
  useEffect(()=>{    
    if (creargasto) {
      guardarGastos([
        ...gastos,
        gasto
      ]);
      // Resta gasto del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
      //Resetea a false despues de ejecutar
      guardarCrearGasto(false);
    }
  },[gasto,creargasto, gastos,restante]);

  //Se ejecuta esta funcion cuando agreguemos un nuevo gasto
/*   const agregarNuevoGasto = gasto => {
    guardarGastos([
      ...gastos,
      gasto
    ])
  }  no lo usa porque prefierio usar useEffect en v83*/

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
          {mostrarpregunta ? ( //coloco la pregunta en un ternario para saber cuando mostrar
            <Pregunta
              guardarPresupuesto = {guardarPresupuesto}
              guardarRestante = {guardarRestante}  
              actualizarPregunta={actualizarPregunta}
            />
          ):( // si se dio el presupuesto muestro el formulario y listado de gastos
            <div className='row'>
              <div className='one-half column'>
                <Formulario
                  guardarGasto = {guardarGasto}
                  guardarCrearGasto = {guardarCrearGasto}
                />
              </div>
              <div className='one-half column'>
                <Listado
                  gastos={gastos}
                />
                <ControlPresupuesto
                  presupuesto = {presupuesto}
                  restante = {restante}
                />
              </div>
            </div>        
          )}         
          </div>
      </header>
    </div>
  );
}

export default App;
