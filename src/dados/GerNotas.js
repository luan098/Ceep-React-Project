export default class Notas {
  constructor() {
    this.notas = [];
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
    this._inscritos = this._inscritos.filter(
      (inscrito) => inscrito !== notificateFunc
    );
  }

  /** Realiza a chamada de todas as funções dentro da lista de inscritos passando as notas como parametro */
  notificar() {
    this._inscritos.forEach((cbInscrito) => cbInscrito(this.notas));
  }

  /** Adiciona uma nova nota a lista de notas da classe, tambem chama a função notificate para notificar a inclusão para todos os inscritos
   * @param {string} titulo
   * @param {string} texto
   * @param {string} categoria
   */
  adicionarNota(titulo, texto, categoria) {
    this.notas.push({ titulo, texto, categoria });
    this.notificar();
  }

  /** Remove a nota desejada de acordo com o index passado, tambem chama a função notificate para notificar a inclusão para todos os inscritos
   * @param {number | string} index
   */
  deletarNota(index) {
    this.notas.splice(index, 1);
    this.notificar();
  }
}
