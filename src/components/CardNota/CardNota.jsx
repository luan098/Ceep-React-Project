import React, { Component } from "react";
import "./estilo.css";
// commom import to html tag
// import deleteSVG from "../../assets/img/delete.svg"

// import svg using ReactComponent
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          {/* <img src={deleteSVG} alt="" /> */}
          <DeleteSVG onClick={this.apagar.bind(this)} />
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
