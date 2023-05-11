import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './store/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './store/admin.effects';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.adminReducer),
    EffectsModule.forFeature([AdminEffects]),
    AdminRoutingModule
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
