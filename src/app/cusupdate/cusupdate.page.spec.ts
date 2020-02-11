import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CusupdatePage } from './cusupdate.page';

describe('CusupdatePage', () => {
  let component: CusupdatePage;
  let fixture: ComponentFixture<CusupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusupdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CusupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
