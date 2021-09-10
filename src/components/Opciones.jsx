import React from 'react';
import Opcion from './Opcion';

export default class Opciones extends React.Component {
    
    constructor(props)
    {
        super(props);

        this.handleEleccion = this.handleEleccion.bind(this);
        this.getOpcionesKeys = this.getOpcionesKeys.bind(this);
        this.getOpciones = this.getOpciones.bind(this);
    }

    handleEleccion(event)
    {
        this.props.onEleccion(event);
    }

    getOpcionesKeys()
    {
        return Object.keys(this.props.opcionesActuales);
    }

    getOpciones(i)
    {
        let arrayOpciones = [];
        for(let i = 0; i < Object.keys(this.props.opcionesActuales).length; i++)
            arrayOpciones.push( <Opcion key={i} textoBoton={this.getOpcionesKeys()[i].toUpperCase()} opcionActual={this.props.opcionesActuales[this.getOpcionesKeys()[i]]} id={this.getOpcionesKeys()[i]} onEleccion={this.handleEleccion} /> );
        return arrayOpciones;
    }

    render()
    {
        return (
            <div className="opciones">
                {this.getOpciones()}
            </div>
        )
    }
}