import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicles } from './vehicles';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  [x: string]: any;
  private readonly API = 'http://localhost:4040/vehicles';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Vehicles[]>(this.API).pipe(tap());
  }

  loadById(_id: any) {
    return this.http.get(`${this.API}/${_id}`).pipe(take(1));
  }

  update(vehicle: any) {
    return this.http.put(`${this.API}/${vehicle._id}`, vehicle).pipe(take(1));
  }

  remove(_id: any) {
    return this.http.delete(`${this.API}/${_id}`).pipe(take(1));
  }
}
