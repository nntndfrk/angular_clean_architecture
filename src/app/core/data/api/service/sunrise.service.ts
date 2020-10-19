import {Injectable} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import {ApiDay} from '../model/api-day.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {GetDayBody} from '../request/get-day-body';

@Injectable({
  providedIn: 'root'
})
export class SunriseService {
  private readonly baseUrl = environment.SUNRISE_URL;

  constructor(private http: HttpClient) {
  }

  getDay(body: GetDayBody): Observable<ApiDay> {
    const query = body.toApiQuery();
    return this.http.get<any>(`${this.baseUrl}/json${query}`)
      .pipe(map(data => ApiDay.fromApi(data)));
  }
}
