import {Injectable} from '@angular/core';
import {SunriseService} from './service/sunrise.service';
import {Observable} from 'rxjs';
import {GetDayBody} from './request/get-day-body';
import {Day} from '../../domain/model/day.model';
import {map} from 'rxjs/operators';
import {DayMapper} from '../mapper/day.mapper';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilService {
  constructor(
    private sunriseService: SunriseService,
  ) {
  }

  getDay(latitude: number, longitude: number): Observable<Day> {
    const reqBody = new GetDayBody(latitude, longitude);

    return this.sunriseService.getDay(reqBody)
      .pipe(map(res => DayMapper.fromApi(res)));
  }
}
