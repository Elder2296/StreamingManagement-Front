import { Injectable } from '@angular/core';
import { environment} from '../../../environments/environment';
import { BodyRequestLoginDTO } from '../pages/DTO/BodyRequestLoginDTO';
import { BodyResposeLoginDTO } from '../pages/DTO/BodyResponseLoginDTO';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = `${environment.HOST}/${environment.AUTH_SERVER}`;

  constructor(private http:HttpClient) {

   }

  login(requestBody : BodyRequestLoginDTO):Observable<BodyResposeLoginDTO>{

    return this.http.post<BodyResposeLoginDTO>(this.url,requestBody);

  }
}
