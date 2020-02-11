import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminInvestmentPage } from './admin-investment.page';

describe('AdminInvestmentPage', () => {
  let component: AdminInvestmentPage;
  let fixture: ComponentFixture<AdminInvestmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInvestmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminInvestmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
