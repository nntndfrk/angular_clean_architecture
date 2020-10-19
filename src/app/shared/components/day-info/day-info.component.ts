import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Day} from '../../../core/domain/model/day.model';

@Component({
  selector: 'app-day-info',
  templateUrl: './day-info.component.html',
  styleUrls: ['./day-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayInfoComponent {
  @Input() day: Day;
}
