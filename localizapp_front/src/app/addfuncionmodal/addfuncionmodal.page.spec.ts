import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddfuncionmodalPage } from './addfuncionmodal.page';

describe('AddfuncionmodalPage', () => {
  let component: AddfuncionmodalPage;
  let fixture: ComponentFixture<AddfuncionmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfuncionmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddfuncionmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
