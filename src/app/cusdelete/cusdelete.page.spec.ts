import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CusdeletePage } from './cusdelete.page';

describe('CusdeletePage', () => {
  let component: CusdeletePage;
  let fixture: ComponentFixture<CusdeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusdeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CusdeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
