import React, { Component } from "react";
import "./assets/App.css";
import "./assets/index.css";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Notas from "./dados/GerNotas";
import Categorias from "./dados/GerCategorias";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          adicionarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
          />
          <ListaDeNotas
            deletarNota={this.notas.deletarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
