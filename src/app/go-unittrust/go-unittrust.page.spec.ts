import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoUnittrustPage } from './go-unittrust.page';

describe('GoUnittrustPage', () => {
  let component: GoUnittrustPage;
  let fixture: ComponentFixture<GoUnittrustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoUnittrustPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoUnittrustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
