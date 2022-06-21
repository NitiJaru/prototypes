import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemoKycAddressIdcardPage } from './demo-kyc-address-idcard.page';

describe('DemoKycAddressIdcardPage', () => {
  let component: DemoKycAddressIdcardPage;
  let fixture: ComponentFixture<DemoKycAddressIdcardPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoKycAddressIdcardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoKycAddressIdcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
