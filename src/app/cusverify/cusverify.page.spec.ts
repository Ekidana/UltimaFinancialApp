import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CusverifyPage } from './cusverify.page';

describe('CusverifyPage', () => {
  let component: CusverifyPage;
  let fixture: ComponentFixture<CusverifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusverifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CusverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
