import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { BodyComponent } from './home/body/body.component';
import { ServicesComponent } from './home/services/services.component';
import { ChooseComponent } from './home/choose/choose.component';
import { FeaturesComponent } from './home/features/features.component';
import { AgentComponent } from './home/agent/agent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { CountdownComponent } from './home/countdown/countdown.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyComponent,
    ServicesComponent,
    ChooseComponent,
    FeaturesComponent,
    AgentComponent,
    NavbarComponent,
    MainComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
