import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DayInfoComponent} from './components/day-info/day-info.component';
import {SpinnerComponent} from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    DayInfoComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    DayInfoComponent,
    SpinnerComponent,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ]
})
export class SharedModule {
}
