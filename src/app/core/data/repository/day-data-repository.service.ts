import {DayRepository} from '../../domain/repository/day.repository';
import {Injectable} from '@angular/core';
import {Day} from '../../domain/model/day.model';
import {Observable} from 'rxjs';
import {ApiUtilService} from '../api/api-util.service';

@Injectable()
export class DayDataRepositoryService extends DayRepository {
  constructor(private apiUtilService: ApiUtilService) {
    super();
  }

   getDay(latitude: number, longitude: number): Observable<Day> {
    return this.apiUtilService.getDay(latitude, longitude);
  }
}
