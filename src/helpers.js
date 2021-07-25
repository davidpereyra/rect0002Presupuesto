export const revisarPresupuesto = (presupuesto, restante) =>{
    //+75% de presupuesto, verde, a la mitad amarillo, 25% o menos, rojo.
    let clase;
    if ((presupuesto / 4) > restante) {
        clase = 'alert alert-danger';
    }else if ((presupuesto /2 ) > restante) {
        clase = 'alert alert-warning';        
    }else{
        clase = 'alert alert-success';
    }
    return clase;
}
