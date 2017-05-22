import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// app
import { AppComponent }  from './ihm/app.component';
import { DashboardComponent } from './ihm/dashboard.component';
import { TravelComponent } from './ihm/travel.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot([
                {path: 'dashboard', component: DashboardComponent},
                {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
                {path: 'travel', component: TravelComponent}
                ])],
                
          declarations: [ AppComponent, DashboardComponent, TravelComponent ],
          bootstrap:    [ AppComponent ],
})
export class AppModule { }
