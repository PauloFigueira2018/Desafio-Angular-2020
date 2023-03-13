import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorModule } from './error/error.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ServicesComponent } from './services/services/services.component';
import { PoPageLoginModule, PoModalPasswordRecoveryModule } from '@portinari/portinari-templates';
import { ActivitiesformComponent } from './activities/activitiesform/activitiesform.component';
import { FinishActivitiesComponent } from './finish-activities/finish-activities.component';
import { PoModule,PoMenuModule,PoButtonModule,PoFieldModule,PoTableModule} from '@portinari/portinari-ui';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActivitiesComponent,
    ActivitiesformComponent,
    ServicesComponent,
    FinishActivitiesComponent],
  imports: [
    BrowserModule,
    PoModule,
    PoMenuModule,
    PoButtonModule,
    PoPageLoginModule,
    PoTableModule, 
    PoFieldModule,
    FormsModule,
    ReactiveFormsModule,
    PoModalPasswordRecoveryModule,
    ErrorModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ServicesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
