import { Component } from '@angular/core';
import { AppService } from './shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sample-app';

  constructor(private appService: AppService){

  }

  onServiceEmitValue() {
    this.appService.emitData('App Component')
  }
}
