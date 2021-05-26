import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceContactMeService {

  Url = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  SendEmail(name, email, message){
    // //this.Url = this.Url + "contactme/" + name + '/' + email + '/' + message;
    // this.http.post(this.Url+ "contactme/" + name + '/' + email + '/' + message, null)
    //           .pipe(catchError((this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse)
  {
    alert(error.message);

  }
}
