import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContarRepeticionesPalabraService {
  private API_URL;

  constructor(private httpClient: HttpClient) {
    this.API_URL = environment.api.base + environment.api.contarRepeticionesPalabra;
  }

  contarRepeticiones(request: any): Observable<any> {
    return this.httpClient.post<any>(this.API_URL, request);
  }

}
