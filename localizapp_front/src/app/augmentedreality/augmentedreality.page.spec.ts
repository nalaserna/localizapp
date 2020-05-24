import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AugmentedrealityPage } from './augmentedreality.page';

describe('AugmentedrealityPage', () => {
  let component: AugmentedrealityPage;
  let fixture: ComponentFixture<AugmentedrealityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AugmentedrealityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AugmentedrealityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
