import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// app
import { AppComponent }  from './ihm/app.component';
import { DashboardComponent } from './ihm/dashboard.component';
import { TravelComponent } from './ihm/travel.component';
import { ContactComponent } from './ihm/contact.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot([
                {path: 'dashboard', component: DashboardComponent},
                {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
                {path: 'travel', component: TravelComponent},
                {path: 'contact', component: ContactComponent}
                ])],
                
          declarations: [ AppComponent, DashboardComponent, TravelComponent, ContactComponent ],
          bootstrap:    [ AppComponent ],
})
export class AppModule { }
