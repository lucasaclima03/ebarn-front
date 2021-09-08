import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesFormComponent } from './vehicles-form/vehicles-form.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';

const routes: Routes = [
  { path: '', component: VehiclesListComponent},
  { path: 'novo', component: VehiclesFormComponent},
  { path: 'editar/:id', component: VehiclesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
