import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "http://localhost:8080/flight_reservation/reservations/";
  
  constructor(private _http:Http) { }

  public getReservation(id:number):any{
    return this._http.get(this.url + id)
    .pipe(map(response => {
      return response.json();
    },
    error => {
      console.error(error)
    }
    ))
  }
  
  public checkin(checkInRequest):any{
      return this._http.post(this.url, checkInRequest)
      .pipe(map(response => {
        return response.json();
      },
      error => {
        return console.error(error);
      }
      ));
  }

}
