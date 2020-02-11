import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnittrustPage } from './unittrust.page';

describe('UnittrustPage', () => {
  let component: UnittrustPage;
  let fixture: ComponentFixture<UnittrustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnittrustPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnittrustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
