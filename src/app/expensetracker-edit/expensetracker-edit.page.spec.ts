import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpensetrackerEditPage } from './expensetracker-edit.page';

describe('ExpensetrackerEditPage', () => {
  let component: ExpensetrackerEditPage;
  let fixture: ComponentFixture<ExpensetrackerEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensetrackerEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensetrackerEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
