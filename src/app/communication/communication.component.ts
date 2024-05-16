import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.scss',
})
export class CommunicationComponent implements OnInit {
  paramId = 0;
  temp = 'Parent to Child';
  serviceSubcriberValue = '';

  constructor(private activatedroute: ActivatedRoute, private appService: AppService) {
    this.activatedroute.params.subscribe((data) => {
      if (data['id']) {
        console.log('Query Parameter: ' + data['id']);
      }
    });

    this.activatedroute.queryParams.subscribe((data) => {
      if (data['id']) {
        console.log('Query Param: ' + data['id']);
      }
    });
  }

  ngOnInit() {
    this.appService.subject$.subscribe((data: any) => {
      console.log(data);
      // this.serviceSubcriberValue = data;
    });
  }

  catchData(data: any) {
    alert('Data Value: ' + data);
  }

  onClick() {
    this.temp = 'Parent to Child On Click';
  }
}
