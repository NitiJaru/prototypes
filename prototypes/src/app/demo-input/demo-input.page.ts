import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.page.html',
  styleUrls: ['./demo-input.page.scss'],
})
export class DemoInputPage implements OnInit {

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder) {
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

  onSave() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    console.log(this.fg.value);
    
    if (this.fg.valid) {
      alert("Submit success!!");
    }
  }

  onFillData(name: string): void {
    if (this.hasData(name)) {
      this.fg.get(name).setValue(null);
    }
    else {
      this.fg.get(name).setValue("fill-some-data");
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
    return this.hasData(name) ? "checkmark-circle-outline" : "ellipse-outline";
  }

}
