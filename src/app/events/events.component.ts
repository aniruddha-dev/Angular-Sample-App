import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  input = '';

  onKeyDown(event: any) {
    this.input += event.target.value;
  }

  onKeyUp(event: any) {
    this.input += event.target.value;
  }

  onClick(event: any) {
    this.input += event.target.value;
  }

  onChange(event: any) {
    this.input += event.target.value;
  }
}
