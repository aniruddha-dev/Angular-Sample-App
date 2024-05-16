import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnChanges {
  @Input() data: string = '';

  @Output() outputData = new EventEmitter<string>();

  constructor() {
    console.log('Input paramter value: ' + this.data);
  }

  ngOnChanges(changes: any) {
    console.log('ngOnChanges Data:' + changes)
  }

  onEmitData() {
    this.outputData.emit('Child To Parent');
  }
}
