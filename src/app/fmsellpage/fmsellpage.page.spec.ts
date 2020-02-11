import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FmsellpagePage } from './fmsellpage.page';

describe('FmsellpagePage', () => {
  let component: FmsellpagePage;
  let fixture: ComponentFixture<FmsellpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmsellpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FmsellpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
