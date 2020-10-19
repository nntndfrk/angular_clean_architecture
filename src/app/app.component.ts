import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Day} from './core/domain/model/day.model';
import {AppState} from './core/domain/state/app-state.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
  lat = '49';
  lon = '26';
  day: Day;
  isLoading: boolean;

  private subscription = new Subscription();

  constructor(private state: AppState) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.state.day$.subscribe((day) => this.day = day)
    );

    this.subscription.add(
      this.state.isLoading$.subscribe((isLoading) => this.isLoading = isLoading)
    );
  }

  getDayInfo(): void {
    const lat = Number.parseInt(this.lat, 10);
    const lon = Number.parseInt(this.lon, 10);
    this.subscription.add(
      this.state.getDay(lat, lon).subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
