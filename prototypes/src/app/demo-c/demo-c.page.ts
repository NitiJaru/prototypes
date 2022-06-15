import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-c',
  templateUrl: './demo-c.page.html',
  styleUrls: ['./demo-c.page.scss'],
})
export class DemoCPage implements OnInit {

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      'a': [null, Validators.required],
      'b': [null, Validators.required],
      'c': [null, Validators.required],
      'd': [null, Validators.required],
      'e': null,
    });
  }


  ngOnInit() {
  }

  onSave() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }
  }

  onFillData(name: string): void {
    this.fg.get(name).setValue("fill-some-data");
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
