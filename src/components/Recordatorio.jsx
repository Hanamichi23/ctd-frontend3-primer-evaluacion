import React from 'react';

export default class Recordatorio extends React.Component {
    
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.historialElecciones[this.props.historialElecciones.length-1]}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul className="listaElecciones">
                    {this.props.historialElecciones.slice(0, -1).map( (eleccion, index) => <li key={index}>{eleccion}</li> )}
                </ul>
            </div>
        )
    }
}