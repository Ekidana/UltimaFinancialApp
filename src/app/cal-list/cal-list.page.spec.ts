import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalListPage } from './cal-list.page';

describe('CalListPage', () => {
  let component: CalListPage;
  let fixture: ComponentFixture<CalListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
