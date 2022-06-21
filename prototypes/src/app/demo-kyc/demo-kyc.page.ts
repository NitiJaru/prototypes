import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-demo-kyc',
  templateUrl: './demo-kyc.page.html',
  styleUrls: ['./demo-kyc.page.scss'],
})
export class DemoKycPage implements OnInit {

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
    if (this.svc.kycAddressIdCard) {
      let value = this.svc.kycAddressIdCard;
      let data = `${value.i1} ${value.i2} ${value.i3} ${value.i4} ${value.i5} ${value.i6}`;
      this.fg.get("i7").patchValue(data);
    }

    if (this.svc.kycAddressCurrent) {
      let value = this.svc.kycAddressCurrent;
      let data = `${value.i1} ${value.i2} ${value.i3} ${value.i4} ${value.i5} ${value.i6}`;
      this.fg.get("i8").patchValue(data);
    }
    
    if (this.svc.kycTel) {
      this.fg.get("i10").patchValue(this.svc.kycTel.i1);
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
