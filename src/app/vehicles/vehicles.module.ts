import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesFormComponent } from './vehicles-form/vehicles-form.component';



@NgModule({
  declarations: [
    VehiclesListComponent,
    VehiclesFormComponent

  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    ReactiveFormsModule
  ]
})
export class VehiclesModule { }
