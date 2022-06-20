import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dev2deli-b',
  templateUrl: './dev2deli-b.page.html',
  styleUrls: ['./dev2deli-b.page.scss'],
})
export class Dev2deliBPage implements OnInit {

  private formDataTotalCount: string[] = ["a", "b", "c", "d"];

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      'a': [null, Validators.required],
      'b': [null, Validators.required],
      'c': [null, Validators.required],
      'd': [null, Validators.required],
      'isSentKYC': [false, [Validators.required, Validators.requiredTrue]],
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

  formCompleteCount(): number {
    let count: number = 0;
    this.formDataTotalCount.forEach(name => { count += this.hasData(name) ? 1 : 0; })
    return count;
  }

  displayFormProgress(): string {
    let preMsg = this.formCompleteCount() > 0 ? "ข้อมูลสมบูรณ์แล้ว" : "ข้อมูลยังไม่สมบูรณ์";
    return `${preMsg} ${this.formCompleteCount()}/${this.formDataTotalCount.length}`
  }

}
