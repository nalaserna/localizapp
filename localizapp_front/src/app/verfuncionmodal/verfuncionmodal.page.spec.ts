import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerfuncionmodalPage } from './verfuncionmodal.page';

describe('VerfuncionmodalPage', () => {
  let component: VerfuncionmodalPage;
  let fixture: ComponentFixture<VerfuncionmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerfuncionmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerfuncionmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
