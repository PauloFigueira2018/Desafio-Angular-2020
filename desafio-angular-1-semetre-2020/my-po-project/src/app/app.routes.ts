import {ModuleWithProviders} from '@angular/core';

import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivitiesformComponent } from './activities/activitiesform/activitiesform.component';
import { ErrorComponent } from './error/error.component';
import { FinishActivitiesComponent } from './finish-activities/finish-activities.component';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'activities', component: ActivitiesComponent},
  { path: 'activitiesform/:id', component: ActivitiesformComponent},
  { path: 'historico', component: FinishActivitiesComponent},
  { path: '**', component: ErrorComponent},
 ];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);