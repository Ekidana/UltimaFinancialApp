import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FmsellrequestPage } from './fmsellrequest.page';

describe('FmsellrequestPage', () => {
  let component: FmsellrequestPage;
  let fixture: ComponentFixture<FmsellrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmsellrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FmsellrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
