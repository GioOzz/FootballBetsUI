import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

const apiUrl = 'http://localhost:5200/User/'
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' }) };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _http: HttpClient;


  constructor(private http: HttpClient) { this._http = http; }

  login(username: string, password: string): Observable<any> {
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
    return this.http.post(`${ apiUrl } /NewUser`, {
    id: uuidv4(),
      userName: username,
        email: email,
          password: password,
            wallet: 0,
              dateCreated: Date.now(),
                dateUpdate: Date.now(),
                  betSlips: {
      userId: uuidv4(),
        bets: [],
      },
    permissions: { newUserPermission: true }
  })
      .pipe(
    catchError(error => {
      console.error('An error occurred:', error);
      return throwError(() => new Error("Error in the register request:" + error));
    })
      );
  }

checkUser(username: string): boolean {
  //Cookie session https://www.tutorialswebsite.com/how-to-use-cookies-in-angular/#:~:text=What%20is%20Cookies%20in%20Angular%3F%20Cookie%20s%20are,your%20account%20information%20used%20by%20authentication%20for%20example.
  //location.replace(this._baseUrl + 'home')
  return true;
}

logout() {
  localStorage.clear(); //delete the cookie session
}
}

// // richiesta per aggiornare i dati di un utente esistente
// updateUser(userData) {
//   return this.http.put(`${ this.apiUrl } / update`, userData);
// }

// // richiesta per eliminare un utente esistente
// deleteUser(userData) {
//   return this.http.delete(`${ this.apiUrl } / delete `, {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     }),
//     body: userData
//   });
// }

interface NewUser {
  "id": 0,
  "userName": "string",
  "email": "string",
  "password": "string",
  "wallet": 0,
  "dateCreated": "2023-01-30T01:51:54.468Z",
  "dateUpdate": "2023-01-30T01:51:54.468Z",
  "betSlips": {
    "id": 0,
    "userId": "string",
    "bets": [
      {
        "id": 0,
        "eventId": "string",
        "eventName": "string",
        "odd": 0
      }
    ],
    "totalOdd": 0,
    "amount": 0,
    "creationDate": "2023-01-30T01:51:54.468Z",
    "status": 0
  },
  "permissions": {
    "eng": true,
    "ita": true,
    "ger": true,
    "spa": true,
    "fra": true,
    "eur": true,
    "newUserPermission": true
  }
}