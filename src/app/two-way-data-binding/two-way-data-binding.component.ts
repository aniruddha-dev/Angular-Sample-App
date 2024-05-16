import { Component } from '@angular/core';

export interface Data {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.scss'
})
export class TwoWayDataBindingComponent {

  title: string = 'Data binding example';
  firstName: string = 'John';
  lastName: string = 'Doe';

  data: Data | undefined;


  onSave() {
    alert(`Fullname: ${this.firstName} ${this.lastName}`)
  }
}

