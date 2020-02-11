import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyunitPage } from './buyunit.page';

describe('BuyunitPage', () => {
  let component: BuyunitPage;
  let fixture: ComponentFixture<BuyunitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyunitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyunitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
