import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from '../pageDate/items';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataURL = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Items[]> {
    return this.http.get<Items[]>(this.dataURL);
  }
}
