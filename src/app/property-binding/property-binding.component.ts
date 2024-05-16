import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss'
})
export class PropertyBindingComponent implements OnInit {

  width: string;
  height: string;
  src: string;

  ngOnInit() {
    this.width = '200';
    this.height = '200';
    this.src = '../../favicon.ico'
  }

}
