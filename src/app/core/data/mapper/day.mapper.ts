import {ApiDay} from '../api/model/api-day.model';
import {Day} from '../../domain/model/day.model';

class DayMapper {
  static fromApi(day: ApiDay): Day {
    return new Day(
      new Date(day.sunrise),
      new Date(day.sunset),
      new Date(day.solarNoon),
      day.dayLength,
    );
  }
}
