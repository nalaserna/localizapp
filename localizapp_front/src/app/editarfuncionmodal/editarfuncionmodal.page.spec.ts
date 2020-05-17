import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarfuncionmodalPage } from './editarfuncionmodal.page';

describe('EditarfuncionmodalPage', () => {
  let component: EditarfuncionmodalPage;
  let fixture: ComponentFixture<EditarfuncionmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarfuncionmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarfuncionmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
