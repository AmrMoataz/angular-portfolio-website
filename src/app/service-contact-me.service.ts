import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceContactMeService {

  baseUrl = 'https://ancient-island-53771.herokuapp.com/api/';
  constructor(private http: HttpClient) { }

  SendEmail(name, email, message){  
      var url = this.baseUrl + "contactme/" + name + '/' + email + '/' + message;
      return this.http.get(url).pipe(
        catchError(this.errorHandler)
      );  
  }

  errorHandler(error)
  { 
    console.log(error);
    return throwError(error.message || "Server Error");
  }
}
