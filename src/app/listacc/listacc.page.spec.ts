import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaccPage } from './listacc.page';

describe('ListaccPage', () => {
  let component: ListaccPage;
  let fixture: ComponentFixture<ListaccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaccPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
