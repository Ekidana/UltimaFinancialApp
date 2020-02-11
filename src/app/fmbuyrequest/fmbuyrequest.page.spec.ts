import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FmbuyrequestPage } from './fmbuyrequest.page';

describe('FmbuyrequestPage', () => {
  let component: FmbuyrequestPage;
  let fixture: ComponentFixture<FmbuyrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmbuyrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FmbuyrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
