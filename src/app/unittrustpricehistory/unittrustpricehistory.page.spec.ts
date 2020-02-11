import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnittrustpricehistoryPage } from './unittrustpricehistory.page';

describe('UnittrustpricehistoryPage', () => {
  let component: UnittrustpricehistoryPage;
  let fixture: ComponentFixture<UnittrustpricehistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnittrustpricehistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnittrustpricehistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
