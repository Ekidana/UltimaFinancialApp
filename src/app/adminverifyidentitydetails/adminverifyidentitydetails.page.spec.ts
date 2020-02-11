import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminverifyidentitydetailsPage } from './adminverifyidentitydetails.page';

describe('AdminverifyidentitydetailsPage', () => {
  let component: AdminverifyidentitydetailsPage;
  let fixture: ComponentFixture<AdminverifyidentitydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminverifyidentitydetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminverifyidentitydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
