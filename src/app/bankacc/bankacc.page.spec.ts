import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankaccPage } from './bankacc.page';

describe('BankaccPage', () => {
  let component: BankaccPage;
  let fixture: ComponentFixture<BankaccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankaccPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankaccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
