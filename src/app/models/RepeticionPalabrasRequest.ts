export class RepeticionPalabrasRequest {
  texto: string;
  palabra: string;

  constructor(_request: any) {
    this.texto = _request.texto;
    this.palabra = _request.palabra;
  }
}
