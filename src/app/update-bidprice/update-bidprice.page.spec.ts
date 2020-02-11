import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateBidpricePage } from './update-bidprice.page';

describe('UpdateBidpricePage', () => {
  let component: UpdateBidpricePage;
  let fixture: ComponentFixture<UpdateBidpricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBidpricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateBidpricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
