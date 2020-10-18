export class Day {
  sunrise: Date;
  sunset: Date;
  solarNoon: Date;
  dayLength: number;

  constructor(
    sunrise: Date,
    sunset: Date,
    solarNoon: Date,
    datLength: number,
  ) {
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.solarNoon = solarNoon;
    this.dayLength = datLength;
  }
}
