import React from 'react';
import data from './components/data.json';
import Historia from './components/Historia';
import Opciones from './components/Opciones';
import Recordatorio from './components/Recordatorio';

export default class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      data: null,
      idActual: null,
      eleccionesAnteriores: null
    }

    this.getMomentoActual = this.getMomentoActual.bind(this);
    this.handleEleccion = this.handleEleccion.bind(this);
  }

  componentDidMount()
  {
    // Simulo que el JSON llega desde una API
    this.setState({
      data,
      idActual: data[0].id,
      eleccionesAnteriores: []
    });
  }

  handleEleccion(event)
  {
      console.log(event);
      let idBotonElegido = event.target.id;
      let nextIdNumero = parseInt(this.state.idActual[0]) + 1;
      let idProximo = nextIdNumero+this.state.idActual.slice(1, this.state.data[0].id.length)+idBotonElegido;
      let llegoAlFinal = !this.state.data.find( momento => momento.id === idProximo );
      
      if (llegoAlFinal)
        alert("Fin.");
      else {
        this.setState( (prevState) => {
          let eleccionesAnterioresPrev = [...prevState.eleccionesAnteriores];
          eleccionesAnterioresPrev.push(event.target.textContent);
          return {
            idActual: idProximo,
            eleccionesAnteriores: eleccionesAnterioresPrev
          }} );
      }
  }
  
  getMomentoActual()
  {
    return (this.state.data.find( momento => momento.id === this.state.idActual ));
  }

  render()
  {
    return this.state.data ? (
        <div className="layout">
          <Historia historiaActual={this.getMomentoActual().historia} />
          <Opciones opcionesActuales={this.getMomentoActual().opciones} onEleccion={this.handleEleccion} />
          <Recordatorio historialElecciones={this.state.eleccionesAnteriores}/>
        </div> )
        : null;
  }
}