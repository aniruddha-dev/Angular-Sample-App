import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {

  subject$ = new Subject();
  behaviouSubject$ = new BehaviorSubject('BehaviorSubject Default Value');


  constructor() {}

  emitData(data: any) {
    this.subject$.next(data);
    this.behaviouSubject$.next(data);
  }
}