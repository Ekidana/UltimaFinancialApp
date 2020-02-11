import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessagedepoPage } from './messagedepo.page';

describe('MessagedepoPage', () => {
  let component: MessagedepoPage;
  let fixture: ComponentFixture<MessagedepoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagedepoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessagedepoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
