import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{

  title: string = '';
  username: string = '';
  password: string = '';

  subscription: Subscription | undefined;

  constructor(private router: Router) {
    console.log('I am in constructor!');    
  }

  // by using query parameter
  navigateByUsingRouteParameter() {
    this.router.navigate(['communication']);
  }

  //by using query param
  navigateByUsingQueryParam() {
    this.router.navigate(['/communication'], {queryParams: {id: 104}});
  }

  //#region Life Cycle Hook

  ngOnChanges() {
    console.log('I am in ngOnChanges!');
  }

  ngOnInit(): void {
    console.log('I am in ngOnInit!');
  }

  ngDoCheck() {
    console.log('I am in ngDoCheck!');
  }

  ngAfterContentInit() {
    console.log('I am in ngAfterContentInit!');
  }

  ngAfterContentChecked() {
    console.log('I am in ngAfterContentChecked!');
  }

  ngAfterViewInit() {
    console.log('I am in ngAfterViewInit!');
  }

  ngAfterViewChecked() {
    console.log('I am in ngAfterViewChecked!');
  }

  ngOnDestroy() {
    console.log('I am in ngOnDestroy!');
    this.subscription?.unsubscribe();
  }

  //#endregion
}
