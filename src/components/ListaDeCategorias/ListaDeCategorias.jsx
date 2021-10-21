import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { localCategorias: [] };
    this._inscricaoCategoria = this._notificateFunction.bind(this);
  }

  /** Quando o componente termina de ser montado */
  componentDidMount() {
    this.props.categorias.inscrever(this._inscricaoCategoria);
  }

  /** Quando o componente e desmontado */
  componentWillUnmount() {
    this.props.categorias.desinscrever(this._inscricaoCategoria);
  }

  /** Atualiza o virtual dom sempre que é chamada passando as novas categorias do parametro, é usada como função de inscrição */
  _notificateFunction(localCategorias) {
    this.setState({ ...this.state, localCategorias });
  }

  /** Verifica se a key do event é 'Enter' se for chama a funcao de adicao da nova categoria
   * @param {object} event
   */
  _handleKey(event) {
    if (event.key === "Enter") {
      this.props.adicionarCategoria(event.target.value);
    }
  }

  /** função de render do componente */
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias__lista">
          {this.state.localCategorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias__item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          className="lista-categorias__input"
          type="text"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleKey.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
