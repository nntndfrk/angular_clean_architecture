import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Day} from '../model/day.model';
import {mapTo, tap} from 'rxjs/operators';
import {DayRepository} from '../repository/day.repository';

@Injectable({
  providedIn: 'root'
})
export class AppState {
  constructor(private dayRepository: DayRepository) {
  }

  // tslint:disable-next-line:variable-name
  private _isLoading$ = new BehaviorSubject<boolean>(false);
  get isLoading$(): Observable<boolean> {
    return this._isLoading$.asObservable();
  }

  // tslint:disable-next-line:variable-name
  private _day$ = new BehaviorSubject<Day>(null);
  get day$(): Observable<Day> {
    return this._day$.asObservable();
  }

  getDay(latitude: number, longitude: number): Observable<void> {
    this._isLoading$.next(true);
    return this.dayRepository.getDay(latitude, longitude)
      .pipe(
        tap((day) => {
          this._day$.next(day);
          this._isLoading$.next(false);
        }),
        mapTo(null)
      );
  }
}
