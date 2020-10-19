import {HttpParams} from '@angular/common/http';

export class GetDayBody {
  constructor(
    public latitude: number,
    public longitude: number,
  ) {
  }

  toApi(): HttpParams {
    const params = new HttpParams();
    params.append('lat', this.latitude.toString());
    params.append('lng', this.longitude.toString());
    params.append('formatted', '0');
    return params;
  }

  toApiQuery(): string {
    return `?lat=${this.latitude.toString()}&lng=${this.longitude.toString()}&formatted=0`;
  }
}
