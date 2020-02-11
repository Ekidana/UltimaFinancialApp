import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditUnittrustPage } from './edit-unittrust.page';

describe('EditUnittrustPage', () => {
  let component: EditUnittrustPage;
  let fixture: ComponentFixture<EditUnittrustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUnittrustPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditUnittrustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
