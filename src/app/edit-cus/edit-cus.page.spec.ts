import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditCusPage } from './edit-cus.page';

describe('EditCusPage', () => {
  let component: EditCusPage;
  let fixture: ComponentFixture<EditCusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
