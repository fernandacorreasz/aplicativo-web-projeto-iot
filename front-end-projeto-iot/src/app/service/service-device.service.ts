import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDeviceService {
  private baseUrl = 'http://localhost:8080/recycle-bin-devices/deviceslist';

  constructor(private http: HttpClient) {}

  getDevices(offset: number, limit: number): Observable<any> {
    const url = `${this.baseUrl}/${offset}/${limit}`;
    return this.http.get(url);
  }
}
