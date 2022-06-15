import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dev2deli',
  templateUrl: './dev2deli.page.html',
  styleUrls: ['./dev2deli.page.scss'],
})
export class Dev2deliPage implements OnInit {

  public isDevMode: boolean = false;

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      'a': [null, Validators.required],
      'b': [null, Validators.required],
      'c': null,
      'd': [false, [Validators.required, Validators.requiredTrue]],
      'isApprove': [null, Validators.required],
    });
  }


  ngOnInit() {
  }

  onSave() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {
      console.log("Submit success!!");
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

  formCompleteCount(): number {
    let count: number = 0;
    if (this.hasData("a")) {
      count++;
    };
    if (this.hasData("b")) {
      count++;
    };
    if (this.hasData("c")) {
      count++;
    };
    return count;
  }

  toggleMode() {
    this.isDevMode = !this.isDevMode;
  }

}
