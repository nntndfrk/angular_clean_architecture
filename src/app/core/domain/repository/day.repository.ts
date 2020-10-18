import {Observable} from 'rxjs';
import {Day} from '../model/day.model';

abstract class DayRepository {
  abstract getDay(latitude: number, longitude: number): Observable<Day>;
}
