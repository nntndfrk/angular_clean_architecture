import {Injectable} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import {ApiDay} from '../model/api-day.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SunriseService {
  private readonly baseUrl = environment.SUNRISE_URL;

  constructor(private http: HttpClient) {
  }

  getDay(latitude: number, longitude: number): Observable<ApiDay> {
    const params = new HttpParams();
    params.set('lat', latitude.toString());
    params.set('lng', longitude.toString());
    return this.http.get<any>(`${this.baseUrl}/json`)
      .pipe(map(data => ApiDay.fromApi(data)));
  }
}
