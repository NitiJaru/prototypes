import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormInputAddressByCurrentPage } from './form-input-address-by-current.page';

describe('FormInputAddressByCurrentPage', () => {
  let component: FormInputAddressByCurrentPage;
  let fixture: ComponentFixture<FormInputAddressByCurrentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputAddressByCurrentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormInputAddressByCurrentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
