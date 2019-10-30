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
import { CountdownComponent } from './home/countdown/countdown.component';
import { FooterComponent } from './footer/footer.component';
import { SpaceComponent } from './space/space.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyComponent } from './properties/property/property.component';
import { FacilitiesComponent } from './properties/property/facilities/facilities.component';
import { LocationComponent } from './properties/property/location/location.component';
import { DescriptionComponent } from './properties/property/description/description.component';
import {RouterModule} from '@angular/router'

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
    CountdownComponent,
    FooterComponent,
    SpaceComponent,
    PropertiesComponent,
    PropertyComponent,
    FacilitiesComponent,
    LocationComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:MainComponent},
      {path:'main', component:MainComponent},
      {path:'properties', component:PropertiesComponent},
      {path: 'properties/property/:id',component:PropertyComponent, 
      children:[
        { path: '', component:FacilitiesComponent},
        {path:'facilities', component:FacilitiesComponent},
        {path:'description',component:DescriptionComponent},
        {path:'location',component:LocationComponent},
      ]
    },
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
