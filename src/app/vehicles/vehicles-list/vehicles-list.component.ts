import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicles } from '../vehicles';
import { VehiclesService } from '../vehicles.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css'],
  preserveWhitespaces: true,
})
export class VehiclesListComponent implements OnInit {
  vehicles: Vehicles[] | undefined;
  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal', { static: true })
  deleteModal!: string | TemplateRef<any> | (new (...args: any[]) => any);

  vehicleSelected!: Vehicles;
  requests: Vehicles[] | undefined;

  constructor(
    private service: VehiclesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.list().subscribe((dados) => (this.vehicles = dados));
  }

  onEdit(_id: any) {
    this.router.navigate(['editar', _id], { relativeTo: this.route });
  }

  onDelete(vehicle: Vehicles) {
    this.vehicleSelected = vehicle;
    this.service.remove(this.vehicleSelected._id).subscribe();
    location.reload();
  }
}
