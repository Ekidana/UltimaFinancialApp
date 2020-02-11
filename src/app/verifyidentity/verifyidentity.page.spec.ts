import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyidentityPage } from './verifyidentity.page';

describe('VerifyidentityPage', () => {
  let component: VerifyidentityPage;
  let fixture: ComponentFixture<VerifyidentityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyidentityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyidentityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
