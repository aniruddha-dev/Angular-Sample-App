import { Component } from '@angular/core';
import { User } from '../shared/models/user.interface';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss',
})
export class DirectiveComponent {
  hasUserName: boolean = true;
  firstName = 'John';
  lastName = 'Doe';
  fullName = '';

  applyBoldClass: boolean = true;
  applyItalicsClass: boolean = true;

  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;

  users: User[] = [
    {
      id: 'Emp1',
      name: 'Karthik',
      gender: 'Male',
      annualSalary: 100000,
      dateOfBirth: '25/6/1988',
    },
    {
      id: 'Emp2',
      name: 'sachin',
      gender: 'Male',
      annualSalary: 200000,
      dateOfBirth: '9/6/1982',
    },
    {
      id: 'Emp3',
      name: 'rahul',
      gender: 'Male',
      annualSalary: 300000,
      dateOfBirth: '12/8/1979',
    },
    {
      id: 'Emp4',
      name: 'Mary',
      gender: 'Female',
      annualSalary: 50000,
      dateOfBirth: '14/10/1980',
    },
  ];

  inpvalue: number = 4;

  applyClasses() {
    let classes = {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass,
    };

    return classes;
  }

  ApplyStyles() {
    let styles = {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size.px': this.fontSize,
    };

    return styles;
  }

  getHoverColor(user: User) {
    return user.gender === 'Male' ? 'orange' : 'red';
  }
}
