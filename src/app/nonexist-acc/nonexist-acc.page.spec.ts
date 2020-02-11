import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NonexistAccPage } from './nonexist-acc.page';

describe('NonexistAccPage', () => {
  let component: NonexistAccPage;
  let fixture: ComponentFixture<NonexistAccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonexistAccPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NonexistAccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
