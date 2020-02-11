import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepositchartPage } from './depositchart.page';

describe('DepositchartPage', () => {
  let component: DepositchartPage;
  let fixture: ComponentFixture<DepositchartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositchartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepositchartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
