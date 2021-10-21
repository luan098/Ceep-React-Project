export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  /** Inscreve a function passada na lista de inscritos da classe
   * @param {function} notificateFunc
   */
  inscrever(notificateFunc) {
    this._inscritos.push(notificateFunc);
  }

  /** Busca e remove a função que tiver a mesma referencia da lista de inscritos da classe
   * @param {Function} notificateFunc
   */
  desinscrever(notificateFunc) {
    this._inscritos.filter((inscrito) => inscrito !== notificateFunc);
  }

  /** Realiza a chamada de todas as funções dentro da lista de inscritos passando as categorias como parametro */
  notificar() {
    this._inscritos.forEach((notificate) => notificate(this.categorias));
  }

  /** Adiciona uma nova categoria a lista de categorias da classe, tambem chama a função notificate para notificar a inclusão para todos os inscritos
   * @param {string} novaCategoria
   */
  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    this.notificar();
  }
}
