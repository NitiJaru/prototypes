import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemoKycAddressCurrentPage } from './demo-kyc-address-current.page';

describe('DemoKycAddressCurrentPage', () => {
  let component: DemoKycAddressCurrentPage;
  let fixture: ComponentFixture<DemoKycAddressCurrentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoKycAddressCurrentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoKycAddressCurrentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
