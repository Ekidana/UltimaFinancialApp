import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellunitPage } from './sellunit.page';

describe('SellunitPage', () => {
  let component: SellunitPage;
  let fixture: ComponentFixture<SellunitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellunitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellunitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
