import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { MyTwimpsComponent } from './my-twimps/my-twimps.component';
import { FavoriteTwimpsComponent } from './favorite-twimps/favorite-twimps.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ProfileRoutingModule,
  ],
  declarations: [ProfileComponent, FavoriteTwimpsComponent, MyTwimpsComponent]
})
export class ProfileModule { }
