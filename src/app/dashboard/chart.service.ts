import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChartService {
  readonly chart = [
    ['Pilsen', 33],
    ['Loop', 68],
    ['South Loop', 49],
    ['Lincoln Park', 15],
    ['LakeView', 80],
    ['Edgewater', 27]
  ];

  constructor() {}

  obterChart(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.chart);
      observable.complete();
    });
  }
}
