
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected http: HttpClient) {
  }

  login(data:any): Observable<any> {
    return this.http.post(`${environment.api}/login`, data);
  }
  
  // user(): Observable<User> {
  //   return this.http.get<User>(`${environment.api}/user`);
  // }

  logout(): Observable<void> {
    return this.http.post<void>(`${environment.api}/login`, {});
  }


}

