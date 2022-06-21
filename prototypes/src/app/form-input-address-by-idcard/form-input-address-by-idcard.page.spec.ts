import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormInputAddressByIdcardPage } from './form-input-address-by-idcard.page';

describe('FormInputAddressByIdcardPage', () => {
  let component: FormInputAddressByIdcardPage;
  let fixture: ComponentFixture<FormInputAddressByIdcardPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputAddressByIdcardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormInputAddressByIdcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
