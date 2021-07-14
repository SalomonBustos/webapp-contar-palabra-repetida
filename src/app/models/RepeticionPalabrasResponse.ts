export class RepeticionPalabrasResponse {
  texto: string;
  cantidadRepeticiones: number;

  constructor(_response: any) {
    this.texto = _response.texto;
    this.cantidadRepeticiones = _response.cantidadRepeticiones;
  }
}
