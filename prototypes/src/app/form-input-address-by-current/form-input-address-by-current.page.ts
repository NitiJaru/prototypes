import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-form-input-address-by-current',
  templateUrl: './form-input-address-by-current.page.html',
  styleUrls: ['./form-input-address-by-current.page.scss'],
})
export class FormInputAddressByCurrentPage implements OnInit {

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder, private svc: MemoryService, private navCtrl: NavController) {
    this.fg = this.fb.group({
      'i1': ["", Validators.required],
      'i2': ["", Validators.required],
      'i3': ["", Validators.required],
      'i4': ["", Validators.required],
      'i5': ["", Validators.required],
      'i6': "",
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.svc.inputAddressByCurrent) {
      this.fg.patchValue(this.svc.inputAddressByCurrent);
    }
  }

  onSave() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {
      this.svc.inputAddressByCurrent = this.fg.value;
      this.navCtrl.back();
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

  onCopyFromAddressByIdCard() {
    if (this.svc.inputAddressByIdCard) {
      this.fg.patchValue(this.svc.inputAddressByIdCard);
    }
  }

}
