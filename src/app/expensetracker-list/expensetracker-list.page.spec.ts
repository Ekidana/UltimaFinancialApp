import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpensetrackerListPage } from './expensetracker-list.page';

describe('ExpensetrackerListPage', () => {
  let component: ExpensetrackerListPage;
  let fixture: ComponentFixture<ExpensetrackerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensetrackerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensetrackerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
