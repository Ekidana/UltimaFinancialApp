import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcessaccPage } from './processacc.page';

describe('ProcessaccPage', () => {
  let component: ProcessaccPage;
  let fixture: ComponentFixture<ProcessaccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessaccPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessaccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
