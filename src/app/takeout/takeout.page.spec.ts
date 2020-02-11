import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakeoutPage } from './takeout.page';

describe('TakeoutPage', () => {
  let component: TakeoutPage;
  let fixture: ComponentFixture<TakeoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakeoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
