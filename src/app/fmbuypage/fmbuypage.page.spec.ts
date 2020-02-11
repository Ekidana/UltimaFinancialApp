import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FmbuypagePage } from './fmbuypage.page';

describe('FmbuypagePage', () => {
  let component: FmbuypagePage;
  let fixture: ComponentFixture<FmbuypagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmbuypagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FmbuypagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
