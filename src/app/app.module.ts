import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { DirectiveComponent } from './directive/directive.component';
import { MinLengthDirective } from './shared/Directives/min-length.directive';
import { HoverDirective } from './shared/Directives/hover.directive';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipe, ExponentialStrengthPipe } from './shared/Pipes/exponential.pipe';
import { CommunicationComponent } from './communication/communication.component';
import { ChildComponent } from './communication/child/child.component';
import { AppService } from './shared/services/app.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TwoWayDataBindingComponent,
    EventsComponent,
    DirectiveComponent,
    MinLengthDirective,
    HoverDirective,
    PipeComponent,
    ExponentialStrengthPipe,
    CustomPipe,
    CommunicationComponent,
    ChildComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
