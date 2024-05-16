import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based

  amount = 101;

  power = 5;
  factor = 1;

  myObject: any = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  };

  myString: string = 'This is a STRING in Mixed CASE';

  myNumber: number = 0.23;

  myArray: any[] = ['apple', 'banana', 'orange', 'grape', 'mango'];

  myObservable$: Observable<number> = of(42);
  myPromise$: Promise<string> = Promise.resolve('Hello World!');

  fruits: string[] = ['apple', 'banana', 'carrot', 'date'];
}
