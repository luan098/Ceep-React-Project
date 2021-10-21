import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = {
      localNotas: [],
    };

    this._inscricaoNotas = this._notificateNotas.bind(this);
  }

  /** Quando o componente termina de ser montado */
  componentDidMount() {
    this.props.notas.inscrever(this._inscricaoNotas);
  }

  /** Quando o componente e desmontado */
  componentWillUnmount() {
    this.props.notas.desinscrever(this._inscricaoNotas);
  }

  /** Atualiza o virtual dom sempre que é chamada passando as novas notas do parametro, é usada como função de inscrição */
  _notificateNotas(localNotas) {
    this.setState({ ...this.state, localNotas });
  }

  /** função de render do componente */
  render() {
    return (
      <ul className="lista-notas">
        {this.state.localNotas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                indice={index}
                apagarNota={this.props.deletarNota}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
