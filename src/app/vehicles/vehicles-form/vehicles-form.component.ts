import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css'],
})
export class VehiclesFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: VehiclesService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const register = null;

    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.service.loadById(id))
      )
      .subscribe((vehicle) => this.updateForm(vehicle));

    this.form = this.fb.group({
      _id: [null],
      vehicleName: [null, [Validators.required]],
    });
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  updateForm(vehicle: any) {
    this.form.patchValue({
      _id: vehicle._id,
      vehicleName: vehicle._vehicleName,
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      if (this.form.value._id) {
        this.service.update(this.form.value).subscribe(
          (success) => {
            this.location.back();
          },
          (error) => console.log(error),
          () => console.log('Update Completo')
        );
      } else {
        this.service.create(this.form.value).subscribe(
          (success: any) => {
            this.location.back();
          },
          (error: any) => console.log(error),
          () => console.log('request completo')
        );
      }
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  onChange(event: any) {
    console.log(event);
    const selectedFiles = <FileList>event.srcElement.files;
  }
}
function subscribe(arg0: (vehicle: any) => void) {
  throw new Error('Function not implemented.');
}
