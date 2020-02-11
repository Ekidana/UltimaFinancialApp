import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminverifyidentityPage } from './adminverifyidentity.page';

describe('AdminverifyidentityPage', () => {
  let component: AdminverifyidentityPage;
  let fixture: ComponentFixture<AdminverifyidentityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminverifyidentityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminverifyidentityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
