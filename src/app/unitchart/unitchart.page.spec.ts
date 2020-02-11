import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnitchartPage } from './unitchart.page';

describe('UnitchartPage', () => {
  let component: UnitchartPage;
  let fixture: ComponentFixture<UnitchartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitchartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitchartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
