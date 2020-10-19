export class ApiDay {
  constructor(
    public sunrise: string,
    public sunset: string,
    public solarNoon: string,
    public dayLength: number,
  ) {
  }

  /* DataMapper */
  static fromApi(map: Map<string, any>): ApiDay {
    /* tslint:disable:no-string-literal */
    return new ApiDay(
      map['results']['sunrise'],
      map['results']['sunset'],
      map['results']['solar_noon'],
      map['results']['day_length'],
    );
    /* tslint:enable:no-string-literal */
  }
}
