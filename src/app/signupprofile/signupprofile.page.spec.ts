import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupprofilePage } from './signupprofile.page';

describe('SignupprofilePage', () => {
  let component: SignupprofilePage;
  let fixture: ComponentFixture<SignupprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
