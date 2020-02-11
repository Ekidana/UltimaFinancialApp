import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminunittrustPage } from './adminunittrust.page';

describe('AdminunittrustPage', () => {
  let component: AdminunittrustPage;
  let fixture: ComponentFixture<AdminunittrustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminunittrustPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminunittrustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
