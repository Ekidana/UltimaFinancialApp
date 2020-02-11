import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReachTargetPage } from './reach-target.page';

describe('ReachTargetPage', () => {
  let component: ReachTargetPage;
  let fixture: ComponentFixture<ReachTargetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachTargetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReachTargetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
