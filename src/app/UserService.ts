import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const apiUrl = 'https://localhost:5000/User/'
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' }) };
const userData = localStorage.getItem('userdata') ?? "";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _http: HttpClient;
  constructor(private http: HttpClient) { this._http = http; }

  login(username: string, password: string) {
    return this.http.post(`${apiUrl}Login`, {
      "userName": username,
      "password": password
    }, httpOptions)
      .pipe(
        catchError(error => {
          console.error('An error occurred:', error);
          return throwError(() => new Error("Error in the login request:" + error));
        }));
  }

  register(username: string, password: string, email: string) {
    return this.http.post(`${apiUrl}NewUser`, {
      userName: username,
      email: email,
      password: password
    }).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError(() => new Error("Error in the register request:" + error));
      }));
  }

  logout() {
    //localStorage.clear();
    location.replace("/");
  }

  updateWallet(updateAmount : number) {
    let jsonData = JSON.parse(userData).value;
    return this.http.put(`${apiUrl}UpdateWallet`, {
      jsonData, 
      updateAmount
    });
  }

  updateUserPassword(newpsw: string) {
    let jsonData = JSON.parse(userData).value;
    return this.http.put(`${apiUrl}ChangePassword`, {
      jsonData,
      newpsw
    });
  }

}
// // richiesta per eliminare un utente esistente
// deleteUser(userData) {
//   return this.http.delete(`${ this.apiUrl } / delete `, {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     }),
//     body: userData
//   });
// }