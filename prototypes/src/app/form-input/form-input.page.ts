import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.page.html',
  styleUrls: ['./form-input.page.scss'],
})
export class FormInputPage implements OnInit {

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder, private svc: MemoryService) {
    this.fg = this.fb.group({
      'i1': [null, Validators.required],
      'i2': [null, Validators.required],
      'i3': [null, Validators.required],
      'i4': [null, Validators.required],
      'i5': [null, Validators.required],
      'i6': [null, Validators.required],
      'i7': [null, Validators.required],
      'i8': [null, Validators.required],
      'i9': [null, Validators.required],
      'i10': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.svc.inputAddressByIdCard) {
      let value = this.svc.inputAddressByIdCard;
      let data = `${value.i1} ${value.i2} ${value.i3} ${value.i4} ${value.i5} ${value.i6}`;
      this.fg.get("i7").patchValue(data);
    }

    if (this.svc.inputAddressByCurrent) {
      let value = this.svc.inputAddressByCurrent;
      let data = `${value.i1} ${value.i2} ${value.i3} ${value.i4} ${value.i5} ${value.i6}`;
      this.fg.get("i8").patchValue(data);
    }

    if (this.svc.inputTel) {
      this.fg.get("i10").patchValue(this.svc.inputTel.i1);
    }
  }

  onSave() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {
      alert("Submit success!!");
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }

  hasData(name: string): boolean {
    let invalid = this.isInvalid(name);
    var ctrl = this.fg.get(name);
    return !invalid && ctrl.value;
  }

  displayIcon(name: string): string {
    if (this.isInvalid(name)) {
      return "alert-circle-outline";
    }
    return this.hasData(name) ? "checkmark-circle-outline" : "ellipse-outline";
  }

  displayColor(name: string): string {
    return this.isInvalid(name) ? "danger" : "primary"
  }

  getData(name: string): string {
    return this.hasData(name) ? this.fg.get(name).value : "";
  }

}
