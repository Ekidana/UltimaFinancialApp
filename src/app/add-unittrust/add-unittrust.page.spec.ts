import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddUnittrustPage } from './add-unittrust.page';

describe('AddUnittrustPage', () => {
  let component: AddUnittrustPage;
  let fixture: ComponentFixture<AddUnittrustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUnittrustPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddUnittrustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
