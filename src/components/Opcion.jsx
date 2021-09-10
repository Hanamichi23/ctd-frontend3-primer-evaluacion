import React from 'react';

export default class Opciones extends React.Component {
    
    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event)
    {
        this.props.onEleccion(event);
    }

    render()
    {
        return (
            <div className="opcion">
                <button type="button" className="botones" id={this.props.id} onClick={this.handleClick}>{this.props.textoBoton}</button>
                <h2>{this.props.opcionActual}</h2>
            </div>
        )
    }
}