import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NqfeedbackPage } from './nqfeedback.page';

describe('NqfeedbackPage', () => {
  let component: NqfeedbackPage;
  let fixture: ComponentFixture<NqfeedbackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NqfeedbackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NqfeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
