import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { EventsComponent } from './events/events.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { CommunicationComponent } from './communication/communication.component';
import { every } from 'rxjs';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PipeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'data-binding',
    component: TwoWayDataBindingComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'directive',
    component: DirectiveComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'communication',
    component: CommunicationComponent
  },
  {
    path: 'communication/:id',
    component: CommunicationComponent
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
