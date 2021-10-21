import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria";

    this.state = {
      localCategorias: [],
    };

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

  /** Sempre que o titulo e alterado insere a nova informação na variavel local especifica */
  _handleMudancaTitulo(event) {
    this.titulo = event.target.value;
  }

  /** Sempre que o texto e alterado insere a nova informação na variavel local especifica */
  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  /** Sempre que a categoria e alterada insere a nova informação na variavel local especifica */
  _handleChangeCat(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  /** Cria uma nota com as informações passadas nos campos do formulario
   * @param {object} event
   */
  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.adicionarNota(this.titulo, this.texto, this.categoria);
  }

  /** função de render do componente */
  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select
          name="categoria"
          className="form-cadastro_input"
          onChange={this._handleChangeCat.bind(this)}
        >
          <option>Sem Categoria</option>

          {this.state.localCategorias.map((cat, index) => {
            return <option key={index + 1}>{cat}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
