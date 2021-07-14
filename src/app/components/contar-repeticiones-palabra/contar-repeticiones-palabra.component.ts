import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepeticionPalabrasRequest } from 'src/app/models/RepeticionPalabrasRequest';
import { ContarRepeticionesPalabraService } from 'src/app/services/contar-repeticiones-palabra.component.service';

@Component({
  selector: 'app-contar-repeticiones-palabra',
  templateUrl: './contar-repeticiones-palabra.component.html',
  styleUrls: ['./contar-repeticiones-palabra.component.css']
})
export class ContarRepeticionesPalabraComponent implements OnInit {

  form: FormGroup;
  request: RepeticionPalabrasRequest;
  resultado: string;

  constructor(
    private service: ContarRepeticionesPalabraService,
    private fb: FormBuilder
  ) {
    this.request = new RepeticionPalabrasRequest({});
    this.form = this.createForm();
  }

  ngOnInit() {
  }

  createForm(): FormGroup {
    return this.fb.group({
      texto: [this.request.texto, [Validators.required]],
      palabra: [this.request.palabra, [Validators.required]]
    });
  }

  public procesar(): void {
    this.resultado = null;
    var data = this.getDataAProcesar();
    this.service.contarRepeticiones(data).subscribe((response: any) => {
      this.resultado = this.base64Decode(response.message);
    }, err => {
      this.resultado = this.base64Decode(err.error.message);
    });
  }

  getDataAProcesar(){
    var data = this.form.getRawValue();
    data.texto = this.base64Encode(data.texto);
    data.palabra = this.base64Encode(data.palabra);
    return data;
  }

  base64Encode(valor: string) {
    return btoa(valor);
  }

  base64Decode(valor: string) {
    return atob(valor);
  }

  public limpiarCampos(): void {
    this.request.palabra = null;
    this.request.texto = null;
    this.form.controls['texto'].setValue(null);
    this.form.controls['palabra'].setValue(null);
    this.resultado = null;
  }

}
