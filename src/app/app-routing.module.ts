import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CoreModule,
    DashboardModule,
    LoginModule,
    ProfileModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
